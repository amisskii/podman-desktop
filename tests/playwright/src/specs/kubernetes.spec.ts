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

import { type Page } from '@playwright/test';
import { expect as playExpect } from '@playwright/test';
import { afterAll, beforeAll, beforeEach, describe, test } from 'vitest';

import { KuberenetesResourceState } from '../model/core/states';
import { WelcomePage } from '../model/pages/welcome-page';
import { NavigationBar } from '../model/workbench/navigation';
import { StatusBar } from '../model/workbench/status-bar';
import { PodmanDesktopRunner } from '../runner/podman-desktop-runner';
import type { RunnerTestContext } from '../testContext/runner-test-context';
import { createClusterDefault, ensureKindCliInstalled } from '../utility/operations';
import { waitForPodmanMachineStartup } from '../utility/wait';

const CLUSTER_NAME: string = 'kind-cluster';
const NODE_NAME: string = `${CLUSTER_NAME}-control-plane`;
const KUBERNETES_CONTEXT: string = `kind-${CLUSTER_NAME}`;

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
  navigationBar = new NavigationBar(page);
});

beforeEach<RunnerTestContext>(async ctx => {
  ctx.pdRunner = pdRunner;
});

afterAll(async () => {
  await pdRunner.close();
});

describe('Kind End-to-End Tests', async () => {
  test('Create a Kind cluster', async () => {
    await ensureKindCliInstalled(page);
    await createClusterDefault(page, CLUSTER_NAME);
    const statusBar = new StatusBar(page);
    await statusBar.validateKubernetesContext(KUBERNETES_CONTEXT);
  }, 200000);
  test('Check Kubernetes Nodes', async () => {
    const nodesPage = await navigationBar.openKubernetesResource('nodes');
    const nodeDetails = await nodesPage.openResourceDetails(NODE_NAME);
    await playExpect.poll(async () => nodeDetails.getState()).toBe(KuberenetesResourceState.Running);
  });
});
