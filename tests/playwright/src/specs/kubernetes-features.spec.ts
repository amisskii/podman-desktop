/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
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

import { type Page } from '@playwright/test';
import { expect as playExpect } from '@playwright/test';
import { afterAll, beforeAll, beforeEach, describe, test } from 'vitest';

import { KubernetesDeploymentsPage } from '../model/pages/kubernetes-deployments-page';
import { WelcomePage } from '../model/pages/welcome-page';
import { NavigationBar } from '../model/workbench/navigation';
import { PodmanDesktopRunner } from '../runner/podman-desktop-runner';
import type { RunnerTestContext } from '../testContext/runner-test-context';
import { createClusterDefault, ensureKindCliInstalled } from '../utility/operations';
import { waitForPodmanMachineStartup } from '../utility/wait';

const CLUSTER_NAME: string = 'kind-cluster';
const CLUSTER_CREATION_TIMEOUT: number = 150000;
const podAppName = 'deploy-pod';

let pdRunner: PodmanDesktopRunner;
let page: Page;
let navigationBar: NavigationBar;

beforeAll(async () => {
  pdRunner = new PodmanDesktopRunner();
  page = await pdRunner.start();
  pdRunner.setVideoAndTraceName('kind-e2e');
  const welcomePage = new WelcomePage(page);
  await welcomePage.handleWelcomePage(true);
  await waitForPodmanMachineStartup(page);
  await ensureKindCliInstalled(page);
  navigationBar = new NavigationBar(page);
});

beforeEach<RunnerTestContext>(async ctx => {
  ctx.pdRunner = pdRunner;
});

afterAll(async () => {
  await pdRunner.close();
});

describe.skipIf(process.env.GITHUB_ACTIONS && process.env.RUNNER_OS === 'Linux')('Kind End-to-End Tests', async () => {
  test(
    'Create a Kind cluster',
    async () => {
      await createClusterDefault(page, CLUSTER_NAME, CLUSTER_CREATION_TIMEOUT);
    },
    CLUSTER_CREATION_TIMEOUT,
  );
  test('Create a deployment', async () => {
    await playExpect(navigationBar.kubernetesButton).toBeEnabled();
    await navigationBar.kubernetesButton.click();
    await playExpect(navigationBar.deploymentsLink).toBeVisible();
    await navigationBar.deploymentsLink.click();
    const deploymentsPage = new KubernetesDeploymentsPage(page);
    // Apply Deployment YAML file
    const fileChooserPromise = page.waitForEvent('filechooser');
    await deploymentsPage.applyYamlButton.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, '..', '..', 'resources', `${podAppName}.yaml`));
  });
});
