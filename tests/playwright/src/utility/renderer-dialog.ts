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

import type { Page } from '@playwright/test';

/** Mock the renderer bridge only in explicitly enabled CDP test runs. */
export async function withMockedRendererOpenFileDialog(
  page: Page,
  filePaths: string[],
  action: () => Promise<void>,
): Promise<void> {
  const mock = await page.evaluateHandle(paths => {
    const dialogWindow = window as typeof window & { openDialog: () => Promise<string[] | undefined> };
    if (!Object.getOwnPropertyDescriptor(dialogWindow, 'openDialog')?.writable) {
      throw new Error('CDP dialog mocking requires launching with --enable-features=ContextBridgeMutability');
    }
    const original = dialogWindow.openDialog;
    const state = {
      called: false,
      restore: (): void => {
        dialogWindow.openDialog = original;
      },
    };
    dialogWindow.openDialog = async (): Promise<string[]> => {
      state.called = true;
      return paths;
    };
    return state;
  }, filePaths);

  try {
    await action();
    // The click may finish before the handler reaches openDialog after awaiting IPC.
    const consumed = await page.waitForFunction(state => state.called, mock, { timeout: 10_000 });
    await consumed.dispose();
  } finally {
    try {
      await mock.evaluate(state => state.restore());
    } finally {
      await mock.dispose();
    }
  }
}
