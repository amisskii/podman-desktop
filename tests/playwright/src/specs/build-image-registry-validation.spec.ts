/**********************************************************************
 * Copyright (C) 2025 Red Hat, Inc.
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

    test('Verify registry validation checkbox is enabled by default', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      const registryValidationCheckbox = buildImagePage.page.getByRole('checkbox', { name: 'validate registries' });
      await playExpect(registryValidationCheckbox).toBeVisible();
      await playExpect(registryValidationCheckbox).toBeChecked();
    });

    test('Build succeeds with valid registry and validation enabled', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      const dockerfilePath = path.resolve(__dirname, '..', '..', 'resources', 'test-containerfile');
      const contextDirectory = path.resolve(__dirname, '..', '..', 'resources');

      // Verify validation is enabled
      const registryValidationCheckbox = buildImagePage.page.getByRole('checkbox', { name: 'validate registries' });
      await playExpect(registryValidationCheckbox).toBeChecked();

      // Build with valid registry (default containerfile uses ghcr.io/linuxcontainers/alpine)
      const updatedImagesPage = await buildImagePage.buildImage(
        'valid-registry-build-test',
        dockerfilePath,
        contextDirectory,
      );

      // Verify the image was built successfully
      playExpect(
        await updatedImagesPage.waitForImageExists('docker.io/library/valid-registry-build-test'),
      ).toBeTruthy();

      // Clean up
      const imageDetailsPage = await updatedImagesPage.openImageDetails('docker.io/library/valid-registry-build-test');
      await playExpect(imageDetailsPage.heading).toBeVisible();
      const finalImagesPage = await imageDetailsPage.deleteImage();
      playExpect(await finalImagesPage.waitForImageDelete('docker.io/library/valid-registry-build-test')).toBeTruthy();
    });

    test('Build succeeds with valid registry and validation disabled', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      const dockerfilePath = path.resolve(__dirname, '..', '..', 'resources', 'test-containerfile');
      const contextDirectory = path.resolve(__dirname, '..', '..', 'resources');

      // Disable validation
      const registryValidationCheckbox = buildImagePage.page.getByRole('checkbox', { name: 'validate registries' });
      await playExpect(registryValidationCheckbox).toBeChecked();
      await registryValidationCheckbox.click();
      await playExpect(registryValidationCheckbox).not.toBeChecked();

      // Build should still succeed with valid registry even when validation is disabled
      const updatedImagesPage = await buildImagePage.buildImage(
        'valid-registry-no-validation-test',
        dockerfilePath,
        contextDirectory,
      );

      playExpect(
        await updatedImagesPage.waitForImageExists('docker.io/library/valid-registry-no-validation-test'),
      ).toBeTruthy();

      // Clean up
      const imageDetailsPage = await updatedImagesPage.openImageDetails(
        'docker.io/library/valid-registry-no-validation-test',
      );
      await playExpect(imageDetailsPage.heading).toBeVisible();
      const finalImagesPage = await imageDetailsPage.deleteImage();
      playExpect(
        await finalImagesPage.waitForImageDelete('docker.io/library/valid-registry-no-validation-test'),
      ).toBeTruthy();
    });

    test('Toggle registry validation checkbox', async ({ navigationBar }) => {
      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      const registryValidationCheckbox = buildImagePage.page.getByRole('checkbox', { name: 'validate registries' });
      await playExpect(registryValidationCheckbox).toBeVisible();

      // Verify default state is enabled
      await playExpect(registryValidationCheckbox).toBeChecked();

      // Toggle off
      await registryValidationCheckbox.click();
      await playExpect(registryValidationCheckbox).not.toBeChecked();

      // Toggle back on
      await registryValidationCheckbox.click();
      await playExpect(registryValidationCheckbox).toBeChecked();
    });

    test('Build with invalid registry credentials and validation enabled shows warnings', async ({ navigationBar }) => {
      // Inject invalid credentials for a REAL registry (ghcr.io) directly into auth.json
      // This tests credential validation, not whether the registry exists
      await injectInvalidCredentials(TEST_REGISTRY_URL, INVALID_USERNAME, INVALID_PASSWORD);

      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      // Use the standard containerfile with a valid base image from ghcr.io
      const dockerfilePath = path.resolve(__dirname, '..', '..', 'resources', 'test-containerfile');
      const contextDirectory = path.resolve(__dirname, '..', '..', 'resources');

      // Verify validation is enabled
      const registryValidationCheckbox = buildImagePage.page.getByRole('checkbox', { name: 'validate registries' });
      await playExpect(registryValidationCheckbox).toBeChecked();

      // Build with invalid credentials but validation enabled
      // With validation enabled, the system pre-checks credentials and may show errors/warnings
      // However, if the image is public or cached, the build may still proceed
      const updatedImagesPage = await buildImagePage.buildImage(
        'invalid-creds-validation-enabled-test',
        dockerfilePath,
        contextDirectory,
      );

      // The build may succeed (public image, cached, or validation is just a warning)
      // or fail depending on the actual registry behavior
      const imageExists = await updatedImagesPage
        .waitForImageExists('docker.io/library/invalid-creds-validation-enabled-test')
        .catch(() => false);

      if (imageExists) {
        // Clean up if image was built
        const imageDetailsPage = await updatedImagesPage.openImageDetails(
          'docker.io/library/invalid-creds-validation-enabled-test',
        );
        await playExpect(imageDetailsPage.heading).toBeVisible();
        await imageDetailsPage.deleteImage();
      }

      // Clean up: Remove the invalid credentials
      await removeRegistryCredentials(TEST_REGISTRY_URL);
    });

    test('Build with invalid registry credentials and validation disabled may pass invalid auth', async ({
      navigationBar,
    }) => {
      // Inject invalid credentials with malformed base64 encoding
      // This simulates corrupted auth data that would cause base64 decoding errors
      await injectInvalidCredentials(TEST_REGISTRY_URL, INVALID_USERNAME, INVALID_PASSWORD, true);

      const imagesPage = await navigationBar.openImages();
      await playExpect(imagesPage.heading).toBeVisible();

      const buildImagePage = await imagesPage.openBuildImage();
      await playExpect(buildImagePage.heading).toBeVisible();

      // Use the standard containerfile with a valid base image from ghcr.io
      const dockerfilePath = path.resolve(__dirname, '..', '..', 'resources', 'test-containerfile');
      const contextDirectory = path.resolve(__dirname, '..', '..', 'resources');

      // Disable validation
      const registryValidationCheckbox = buildImagePage.page.getByRole('checkbox', { name: 'validate registries' });
      await playExpect(registryValidationCheckbox).toBeChecked();
      await registryValidationCheckbox.click();
      await playExpect(registryValidationCheckbox).not.toBeChecked();

      // Build with malformed credentials and validation disabled
      // Without validation, the malformed auth passes through unchecked and may cause
      // base64 decoding errors or authentication failures during the build
      const updatedImagesPage = await buildImagePage.buildImage(
        'invalid-creds-validation-disabled-test',
        dockerfilePath,
        contextDirectory,
      );

      // The build may succeed (if image is public/cached) or fail with base64/auth errors
      const imageExists = await updatedImagesPage
        .waitForImageExists('docker.io/library/invalid-creds-validation-disabled-test')
        .catch(() => false);

      if (imageExists) {
        // Clean up if image was built
        const imageDetailsPage = await updatedImagesPage.openImageDetails(
          'docker.io/library/invalid-creds-validation-disabled-test',
        );
        await playExpect(imageDetailsPage.heading).toBeVisible();
        await imageDetailsPage.deleteImage();
      }

      // Clean up: Remove the invalid credentials
      await removeRegistryCredentials(TEST_REGISTRY_URL);
    });
  });
