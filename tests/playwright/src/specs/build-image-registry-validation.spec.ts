/**********************************************************************
 * Copyright (C) 2026 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ArchitectureType } from '/@/model/core/platforms';
import { expect as playExpect, test } from '/@/utility/fixtures';
import {
  backupAuthFile,
  injectInvalidCredentials,
  removeRegistryCredentials,
  restoreAuthFile,
} from '/@/utility/registry-auth-config';
import { waitForPodmanMachineStartup } from '/@/utility/wait';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test registry and invalid credentials for testing validation scenarios
// We use a real registry (ghcr.io) but with invalid credentials
const TEST_REGISTRY_URL = 'ghcr.io';
const INVALID_USERNAME = 'invalid-test-user';
const INVALID_PASSWORD = 'invalid-test-password';

// Reusable path constants
const CONTAINERFILE_PATH = path.resolve(__dirname, '..', '..', 'resources', 'test-containerfile');
const CONTEXT_DIR = path.resolve(__dirname, '..', '..', 'resources');

let authBackupPath: string | undefined;

test.beforeAll(async ({ runner, welcomePage, page }) => {
  runner.setVideoAndTraceName('build-image-registry-validation-e2e');
  await welcomePage.handleWelcomePage(true);
  await waitForPodmanMachineStartup(page);
  // Backup existing auth file before tests
  authBackupPath = await backupAuthFile();
});

test.afterAll(async ({ runner }) => {
  try {
    // Remove invalid credentials from auth file
    await removeRegistryCredentials(TEST_REGISTRY_URL).catch((error: unknown) => {
      console.log('Failed to remove invalid credentials:', error);
    });

    // Restore original auth file if it was backed up
    if (authBackupPath) {
      await restoreAuthFile(authBackupPath).catch((error: unknown) => {
        console.log('Failed to restore auth file backup:', error);
      });
    }
  } finally {
    await runner.close();
  }
});

test.describe
  .serial('Build image registry validation verification', { tag: '@smoke' }, () => {
    test.describe.configure({ retries: 1 });

    // Clean up invalid credentials after each test to ensure isolation
    test.afterEach(async () => {
      await removeRegistryCredentials(TEST_REGISTRY_URL).catch((error: unknown) => {
        console.log('afterEach cleanup: No credentials to remove or cleanup failed:', error);
      });
    });

    test('Verify registry validation checkbox is enabled by default', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      await playExpect(buildImagePage.registryValidationCheckbox).toBeVisible();
      await playExpect(buildImagePage.registryValidationCheckbox).toBeChecked();
    });

    test('Build succeeds with valid registry and validation enabled', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      // Verify validation is enabled
      await playExpect(buildImagePage.registryValidationCheckbox).toBeChecked();

      // Build with valid registry (default containerfile uses ghcr.io/linuxcontainers/alpine)
      const updatedImagesPage = await buildImagePage.buildImage(
        'valid-registry-build-test',
        CONTAINERFILE_PATH,
        CONTEXT_DIR,
      );

      // Verify the image was built successfully
      await playExpect
        .poll(async () => await updatedImagesPage.waitForImageExists('docker.io/library/valid-registry-build-test'), {
          timeout: 0,
        })
        .toBeTruthy();

      // Clean up
      const imageDetailsPage = await updatedImagesPage.openImageDetails('docker.io/library/valid-registry-build-test');
      await playExpect(imageDetailsPage.heading).toBeVisible();
      const finalImagesPage = await imageDetailsPage.deleteImage();
      await playExpect
        .poll(async () => await finalImagesPage.waitForImageDelete('docker.io/library/valid-registry-build-test'), {
          timeout: 0,
        })
        .toBeTruthy();
    });

    test('Build succeeds with valid registry and validation disabled', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      // Disable validation using Page Object method
      await buildImagePage.toggleRegistryValidation(false);
      await playExpect.poll(async () => await buildImagePage.isRegistryValidationEnabled()).toBe(false);

      // Build should still succeed with valid registry even when validation is disabled
      const updatedImagesPage = await buildImagePage.buildImage(
        'valid-registry-no-validation-test',
        CONTAINERFILE_PATH,
        CONTEXT_DIR,
      );

      await playExpect
        .poll(
          async () => await updatedImagesPage.waitForImageExists('docker.io/library/valid-registry-no-validation-test'),
          { timeout: 0 },
        )
        .toBeTruthy();

      // Clean up
      const imageDetailsPage = await updatedImagesPage.openImageDetails(
        'docker.io/library/valid-registry-no-validation-test',
      );
      await playExpect(imageDetailsPage.heading).toBeVisible();
      const finalImagesPage = await imageDetailsPage.deleteImage();
      await playExpect
        .poll(
          async () => await finalImagesPage.waitForImageDelete('docker.io/library/valid-registry-no-validation-test'),
        )
        .toBeTruthy();
    });

    test('Toggle registry validation checkbox', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      await playExpect(buildImagePage.registryValidationCheckbox).toBeVisible();

      // Verify default state is enabled
      await playExpect(buildImagePage.registryValidationCheckbox).toBeChecked();

      // Toggle off using Page Object method
      await buildImagePage.toggleRegistryValidation(false);
      await playExpect.poll(async () => await buildImagePage.isRegistryValidationEnabled()).toBe(false);

      // Toggle back on
      await buildImagePage.toggleRegistryValidation(true);
      await playExpect.poll(async () => await buildImagePage.isRegistryValidationEnabled()).toBe(true);
    });

    test('Build with invalid registry credentials and validation enabled succeeds', async ({ navigationBar }) => {
      await test.step('Inject invalid credentials', async () => {
        // Inject invalid credentials for a REAL registry (ghcr.io) directly into auth.json
        // This tests credential validation, not whether the registry exists
        await injectInvalidCredentials(TEST_REGISTRY_URL, INVALID_USERNAME, INVALID_PASSWORD);
      });

      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      // Verify validation is enabled
      await playExpect(buildImagePage.registryValidationCheckbox).toBeChecked();

      // Build with invalid credentials but validation enabled
      // Validation happens silently without console warnings
      // Build still succeeds because the base image is public
      const updatedImagesPage = await buildImagePage.buildImage(
        'invalid-creds-validation-enabled-test',
        CONTAINERFILE_PATH,
        CONTEXT_DIR,
      );

      await test.step('Verify build succeeded despite invalid credentials', async () => {
        // Build should succeed because the base image is public and doesn't require authentication
        await playExpect
          .poll(
            async () =>
              await updatedImagesPage.waitForImageExists('docker.io/library/invalid-creds-validation-enabled-test'),
          )
          .toBeTruthy();
      });

      await test.step('Clean up test image', async () => {
        // Clean up the built image
        const imageDetailsPage = await updatedImagesPage.openImageDetails(
          'docker.io/library/invalid-creds-validation-enabled-test',
        );
        await playExpect(imageDetailsPage.heading).toBeVisible();
        const finalImagesPage = await imageDetailsPage.deleteImage();
        await playExpect
          .poll(
            async () =>
              await finalImagesPage.waitForImageDelete('docker.io/library/invalid-creds-validation-enabled-test'),
          )
          .toBeTruthy();
      });
    });

    test('Build with invalid registry credentials and validation disabled fails without pre-validation', async ({
      navigationBar,
    }) => {
      await test.step('Inject malformed credentials', async () => {
        await injectInvalidCredentials(TEST_REGISTRY_URL, INVALID_USERNAME, INVALID_PASSWORD, true);
      });

      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      await buildImagePage.toggleRegistryValidation(false);
      await playExpect.poll(async () => await buildImagePage.isRegistryValidationEnabled()).toBe(false);

      const updatedImagesPage = await buildImagePage.buildImage(
        'invalid-creds-validation-disabled-test',
        CONTAINERFILE_PATH,
        CONTEXT_DIR,
        [ArchitectureType.Default],
        120_000,
        true,
      );

      await test.step('Verify build failed and image was not created', async () => {
        // Build fails with HTTP 400 base64 error - this is a runtime error from build process,
        // not a pre-validation error. waitForImageExists throws on timeout, so we catch and return false.
        await playExpect
          .poll(
            async () => {
              try {
                return await updatedImagesPage.waitForImageExists(
                  'docker.io/library/invalid-creds-validation-disabled-test',
                  1_000,
                );
              } catch {
                return false;
              }
            },
            { timeout: 15_000 },
          )
          .toBe(false);
      });
    });
  });
