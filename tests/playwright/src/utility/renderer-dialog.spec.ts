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
import { afterEach, expect, test, vi } from 'vitest';

import { withMockedRendererOpenFileDialog } from './renderer-dialog';

function setup(writable = true): {
  page: Page;
  dialogWindow: { openDialog: () => Promise<string[]> };
  original: () => Promise<string[]>;
  dispose: ReturnType<typeof vi.fn>;
} {
  const original = vi.fn().mockResolvedValue(['original']);
  const dialogWindow = {} as { openDialog: () => Promise<string[]> };
  Object.defineProperty(dialogWindow, 'openDialog', { value: original, writable, configurable: writable });
  vi.stubGlobal('window', dialogWindow);
  const dispose = vi.fn();
  const page = {
    evaluateHandle: vi.fn(async (callback, paths) => {
      const state = callback(paths);
      return { state, evaluate: vi.fn(async evaluate => evaluate(state)), dispose };
    }),
    waitForFunction: vi.fn(async (predicate, handle) => {
      if (!predicate(handle.state)) throw new Error('Dialog was not consumed');
      return { dispose: vi.fn() };
    }),
  } as unknown as Page;
  return { page, dialogWindow, original, dispose };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

test('returns fixture paths and restores the original bridge', async () => {
  const { page, dialogWindow, original, dispose } = setup();
  await withMockedRendererOpenFileDialog(page, ['/tmp/config map.yaml'], async () => {
    await expect(dialogWindow.openDialog()).resolves.toEqual(['/tmp/config map.yaml']);
  });
  expect(dialogWindow.openDialog).toBe(original);
  expect(original).not.toHaveBeenCalled();
  expect(dispose).toHaveBeenCalledOnce();
});

test('restores the bridge when the action fails', async () => {
  const { page, dialogWindow, original, dispose } = setup();
  await expect(
    withMockedRendererOpenFileDialog(page, [], async () => {
      throw new Error('Click failed');
    }),
  ).rejects.toThrow('Click failed');
  expect(dialogWindow.openDialog).toBe(original);
  expect(dispose).toHaveBeenCalledOnce();
});

test('fails and restores when the action never opens a dialog', async () => {
  const { page, dialogWindow, original, dispose } = setup();
  await expect(withMockedRendererOpenFileDialog(page, [], async () => {})).rejects.toThrow('Dialog was not consumed');
  expect(dialogWindow.openDialog).toBe(original);
  expect(dispose).toHaveBeenCalledOnce();
});

test('rejects a frozen bridge before invoking the action', async () => {
  const { page, dialogWindow, original } = setup(false);
  const action = vi.fn();
  await expect(withMockedRendererOpenFileDialog(page, [], action)).rejects.toThrow('ContextBridgeMutability');
  expect(action).not.toHaveBeenCalled();
  expect(dialogWindow.openDialog).toBe(original);
});
