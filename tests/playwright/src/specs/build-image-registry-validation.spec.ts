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

import { ArchitectureType } from '/@/model/core/platforms';
import { expect as playExpect, test } from '/@/utility/fixtures';
import { waitForPodmanMachineStartup } from '/@/utility/wait';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const validContainerfile = path.resolve(__dirname, '..', '..', 'resources', 'test-containerfile');
const invalidRegistryContainerfile = path.resolve(
  __dirname,
  '..',
  '..',
  'resources',
  'test-containerfile-invalid-registry',
);
const contextDirectory = path.resolve(__dirname, '..', '..', 'resources');

test.beforeAll(async ({ runner, welcomePage, page }) => {
  runner.setVideoAndTraceName('build-image-registry-validation-e2e');

  await welcomePage.handleWelcomePage(true);
  await waitForPodmanMachineStartup(page);
});

test.afterAll(async ({ runner }) => {
  await runner.close();
});

test.describe
  .serial('Build image with registry validation', { tag: '@smoke' }, () => {
    test.describe.configure({ retries: 1 });

    test('Registry validation checkbox is enabled by default', async ({ navigationBar }) => {
      await test.step('Navigate to build image page', async () => {
        const imagesPage = await navigationBar.openImages();
        await playExpect(imagesPage.heading).toBeVisible();

        const buildImagePage = await imagesPage.openBuildImage();
        await playExpect(buildImagePage.heading).toBeVisible();

        // Verify checkbox is visible and checked by default
        await playExpect(buildImagePage.registryValidationCheckbox).toBeVisible();
        await playExpect(buildImagePage.registryValidationCheckbox).toBeChecked();

        const isEnabled = await buildImagePage.isRegistryValidationEnabled();
        playExpect(isEnabled).toBe(true);
      });
    });

    test('Build image with valid registry and validation enabled', async ({ navigationBar }) => {
      await test.step('Build image with valid base image', async () => {
        const imagesPage = await navigationBar.openImages();
        await playExpect(imagesPage.heading).toBeVisible();

        const buildImagePage = await imagesPage.openBuildImage();
        await playExpect(buildImagePage.heading).toBeVisible();

        // Ensure validation is enabled
        await buildImagePage.toggleRegistryValidation(true);

        // Build the image - should succeed with valid registry
        const updatedImagesPage = await buildImagePage.buildImage(
          'registry-validation-valid-test',
          validContainerfile,
          contextDirectory,
          [ArchitectureType.Default],
          120_000,
        );

        await playExpect(updatedImagesPage.heading).toBeVisible({ timeout: 10_000 });

        // Verify image was created
        await playExpect
          .poll(
            async () =>
              await updatedImagesPage.waitForImageExists('docker.io/library/registry-validation-valid-test', 30_000),
            { timeout: 0 },
          )
          .toBeTruthy();

        // Cleanup: delete the image
        const imageDetailsPage = await updatedImagesPage.openImageDetails(
          'docker.io/library/registry-validation-valid-test',
        );
        await playExpect(imageDetailsPage.heading).toBeVisible();

        const cleanupImagesPage = await imageDetailsPage.deleteImage();
        await playExpect(cleanupImagesPage.heading).toBeVisible({ timeout: 30_000 });

        await playExpect
          .poll(
            async () =>
              await cleanupImagesPage.waitForImageDelete('docker.io/library/registry-validation-valid-test', 60_000),
            { timeout: 0 },
          )
          .toBeTruthy();
      });
    });

    test('Build image with invalid registry and validation enabled should show error', async ({ navigationBar }) => {
      test.setTimeout(180_000);

      await test.step('Attempt to build with invalid registry', async () => {
        const imagesPage = await navigationBar.openImages();
        await playExpect(imagesPage.heading).toBeVisible();

        const buildImagePage = await imagesPage.openBuildImage();
        await playExpect(buildImagePage.heading).toBeVisible();

        // Ensure validation is enabled
        await buildImagePage.toggleRegistryValidation(true);

        // Fill the form with containerfile that has invalid registry
        await buildImagePage.containerFilePathInput.fill(invalidRegistryContainerfile);
        await buildImagePage.buildContextDirectoryInput.fill(contextDirectory);
        await buildImagePage.imageNameInput.clear();
        await buildImagePage.imageNameInput.pressSequentially('registry-validation-invalid-test', { delay: 50 });

        // Click build button
        await playExpect(buildImagePage.buildButton).toBeEnabled();
        await buildImagePage.buildButton.scrollIntoViewIfNeeded();
        await buildImagePage.buildButton.click();

        // Wait for the build process to start and show terminal
        await playExpect(buildImagePage.terminalContent).toBeVisible({ timeout: 15_000 });

        // Wait a bit for error to appear in logs
        await buildImagePage.page.waitForTimeout(5_000);

        // Verify that error appears in the logs
        const terminalText = await buildImagePage.terminalContent.textContent();
        playExpect(terminalText).toBeTruthy();

        // The error should mention registry-related issues
        // Common error patterns: "Error", "invalid", "registry", "not found", "failed"
        const hasError =
          terminalText!.toLowerCase().includes('error') ||
          terminalText!.toLowerCase().includes('invalid') ||
          terminalText!.toLowerCase().includes('failed') ||
          terminalText!.toLowerCase().includes('not found');

        playExpect(hasError).toBe(true);

        // Cancel or complete the build
        if ((await buildImagePage.cancelBuildButton.count()) > 0) {
          await playExpect(buildImagePage.cancelBuildButton).toBeVisible();
          await buildImagePage.cancelBuildButton.click();
        }

        // Wait for Done button and click it
        await playExpect(buildImagePage.doneButton).toBeEnabled({ timeout: 60_000 });
        await buildImagePage.doneButton.click();
      });
    });

    test('Build image with validation disabled skips registry check', async ({ navigationBar }) => {
      test.setTimeout(180_000);

      await test.step('Build with validation disabled', async () => {
        const imagesPage = await navigationBar.openImages();
        await playExpect(imagesPage.heading).toBeVisible();

        const buildImagePage = await imagesPage.openBuildImage();
        await playExpect(buildImagePage.heading).toBeVisible();

        // Disable registry validation
        await buildImagePage.toggleRegistryValidation(false);

        // Verify checkbox is unchecked
        await playExpect(buildImagePage.registryValidationCheckbox).not.toBeChecked();

        // Fill the form with containerfile that has invalid registry
        await buildImagePage.containerFilePathInput.fill(invalidRegistryContainerfile);
        await buildImagePage.buildContextDirectoryInput.fill(contextDirectory);
        await buildImagePage.imageNameInput.clear();
        await buildImagePage.imageNameInput.pressSequentially('registry-validation-disabled-test', { delay: 50 });

        // Click build button
        await playExpect(buildImagePage.buildButton).toBeEnabled();
        await buildImagePage.buildButton.scrollIntoViewIfNeeded();
        await buildImagePage.buildButton.click();

        // Wait for the build process to start
        await playExpect(buildImagePage.terminalContent).toBeVisible({ timeout: 15_000 });

        // With validation disabled, the build should proceed even with invalid registry
        // The actual image pull will fail, but validation is skipped
        // This test verifies the checkbox behavior, not the build outcome

        // Wait for build to complete or fail
        await playExpect(buildImagePage.doneButton).toBeEnabled({ timeout: 120_000 });

        // The build will fail due to the invalid registry during the actual image pull
        // but the validation step should have been skipped
        const terminalText = await buildImagePage.terminalContent.textContent();
        playExpect(terminalText).toBeTruthy();

        // Click Done to return to images page
        await buildImagePage.doneButton.click();
      });
    });

    test('Toggle registry validation checkbox changes state correctly', async ({ navigationBar }) => {
      await test.step('Test checkbox toggle behavior', async () => {
        const imagesPage = await navigationBar.openImages();
        await playExpect(imagesPage.heading).toBeVisible();

        const buildImagePage = await imagesPage.openBuildImage();
        await playExpect(buildImagePage.heading).toBeVisible();

        // Verify initial state (should be checked)
        await playExpect(buildImagePage.registryValidationCheckbox).toBeChecked();

        // Toggle to disabled
        await buildImagePage.toggleRegistryValidation(false);
        await playExpect(buildImagePage.registryValidationCheckbox).not.toBeChecked();
        playExpect(await buildImagePage.isRegistryValidationEnabled()).toBe(false);

        // Toggle back to enabled
        await buildImagePage.toggleRegistryValidation(true);
        await playExpect(buildImagePage.registryValidationCheckbox).toBeChecked();
        playExpect(await buildImagePage.isRegistryValidationEnabled()).toBe(true);

        // Toggle again to disabled
        await buildImagePage.toggleRegistryValidation(false);
        await playExpect(buildImagePage.registryValidationCheckbox).not.toBeChecked();
        playExpect(await buildImagePage.isRegistryValidationEnabled()).toBe(false);
      });
    });
  });
