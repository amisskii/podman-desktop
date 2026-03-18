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

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { isLinux, isMac, isWindows } from './platform';

export type ContainerAuthConfigEntry = {
  [key: string]: {
    auth: string;
    podmanDesktopAlias?: string;
  };
};

export type ContainersAuthConfigFile = {
  auths?: ContainerAuthConfigEntry;
};

/**
 * Get the auth.json file location based on the platform and environment.
 * This replicates the logic from registry-setup.ts in the Podman extension.
 */
export function getAuthFileLocation(): string {
  let podmanConfigContainersPath = '';

  // Check if PODMAN_DESKTOP_HOME_DIR is set (used in E2E tests)
  const podmanDesktopHomeDir = process.env['PODMAN_DESKTOP_HOME_DIR'];

  if (isMac || isWindows) {
    const baseDir = podmanDesktopHomeDir ?? os.homedir();
    podmanConfigContainersPath = path.resolve(baseDir, '.config/containers');
  } else if (isLinux) {
    if (podmanDesktopHomeDir) {
      // When PODMAN_DESKTOP_HOME_DIR is set, use it as base
      podmanConfigContainersPath = path.resolve(podmanDesktopHomeDir, 'containers');
    } else {
      // Otherwise, use XDG_RUNTIME_DIR
      const xdgRuntimeDirectory = process.env['XDG_RUNTIME_DIR'] ?? '';
      podmanConfigContainersPath = path.resolve(xdgRuntimeDirectory, 'containers');
    }
  }

  return path.resolve(podmanConfigContainersPath, 'auth.json');
}

/**
 * Read the auth.json file and return its contents.
 * Creates an empty auth file if it doesn't exist.
 */
export async function readAuthFile(): Promise<ContainersAuthConfigFile> {
  const authFilePath = getAuthFileLocation();

  // Create directory if it doesn't exist
  const authFileDir = path.dirname(authFilePath);
  if (!fs.existsSync(authFileDir)) {
    fs.mkdirSync(authFileDir, { recursive: true });
  }

  // Create empty auth file if it doesn't exist
  if (!fs.existsSync(authFilePath)) {
    const emptyAuthFile = { auths: {} } as ContainersAuthConfigFile;
    await writeAuthFile(emptyAuthFile);
    return emptyAuthFile;
  }

  return new Promise((resolve, reject) => {
    fs.readFile(authFilePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const authFile = JSON.parse(data) as ContainersAuthConfigFile;
          resolve(authFile);
        } catch (error) {
          console.error('Error parsing auth file', error);
          // Return empty auth file if parsing fails
          resolve({ auths: {} });
        }
      }
    });
  });
}

/**
 * Write data to the auth.json file.
 */
export async function writeAuthFile(authConfig: ContainersAuthConfigFile): Promise<void> {
  const authFilePath = getAuthFileLocation();
  const authFileDir = path.dirname(authFilePath);

  // Ensure directory exists
  if (!fs.existsSync(authFileDir)) {
    fs.mkdirSync(authFileDir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(authFilePath, JSON.stringify(authConfig, undefined, 2), 'utf8', err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Inject invalid registry credentials directly into the auth.json file.
 * This is used for testing registry validation scenarios.
 *
 * @param registryUrl - The registry URL (e.g., 'invalid-registry.example.com')
 * @param username - The username (will be encoded)
 * @param password - The password (will be encoded)
 * @param useInvalidBase64 - If true, uses malformed base64 encoding
 */
export async function injectInvalidCredentials(
  registryUrl: string,
  username: string,
  password: string,
  useInvalidBase64 = false,
): Promise<void> {
  const authFile = await readAuthFile();
  authFile.auths ??= {};

  let auth: string;
  if (useInvalidBase64) {
    // Create intentionally malformed base64
    auth = 'invalid-base64-!!!';
  } else {
    // Create valid base64 but with invalid credentials
    auth = Buffer.from(`${username}:${password}`).toString('base64');
  }

  authFile.auths[registryUrl] = {
    auth,
  };

  await writeAuthFile(authFile);
  console.log(`Injected ${useInvalidBase64 ? 'malformed' : 'invalid'} credentials for ${registryUrl}`);
}

/**
 * Remove specific registry credentials from the auth.json file.
 */
export async function removeRegistryCredentials(registryUrl: string): Promise<void> {
  const authFile = await readAuthFile();

  if (authFile.auths?.[registryUrl]) {
    delete authFile.auths[registryUrl];
    await writeAuthFile(authFile);
    console.log(`Removed credentials for ${registryUrl}`);
  }
}

/**
 * Backup the current auth.json file.
 * Returns the path to the backup file.
 */
export async function backupAuthFile(): Promise<string | undefined> {
  const authFilePath = getAuthFileLocation();

  if (!fs.existsSync(authFilePath)) {
    return undefined;
  }

  const backupPath = `${authFilePath}.backup-${Date.now()}`;
  return new Promise((resolve, reject) => {
    fs.copyFile(authFilePath, backupPath, err => {
      if (err) {
        reject(err);
      } else {
        console.log(`Backed up auth file to ${backupPath}`);
        resolve(backupPath);
      }
    });
  });
}

/**
 * Restore auth.json from a backup file.
 */
export async function restoreAuthFile(backupPath: string): Promise<void> {
  const authFilePath = getAuthFileLocation();

  if (!fs.existsSync(backupPath)) {
    throw new Error(`Backup file not found: ${backupPath}`);
  }

  return new Promise((resolve, reject) => {
    fs.copyFile(backupPath, authFilePath, err => {
      if (err) {
        reject(err);
      } else {
        // Clean up the backup file
        fs.unlink(backupPath, unlinkErr => {
          if (unlinkErr) {
            console.warn(`Failed to remove backup file: ${unlinkErr}`);
          }
        });
        console.log(`Restored auth file from ${backupPath}`);
        resolve();
      }
    });
  });
}
