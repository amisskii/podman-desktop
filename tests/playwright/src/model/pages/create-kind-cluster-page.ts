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

import { type Locator, type Page } from '@playwright/test';

import { BasePage } from './base-page';

export class CreateKindClusterPage extends BasePage {
  readonly clusterPropertiesInformation: Locator;
  readonly clusterNameField: Locator;
  readonly controllerCheckbox: Locator;
  readonly clusterCreationButton: Locator;
  readonly goBackButton: Locator;
  readonly logsButton: Locator;
  readonly providerTypeCombobox: Locator;
  readonly httpPort: Locator;
  readonly httpsPort: Locator;
  readonly containerImage: Locator;

  constructor(page: Page) {
    super(page);
    this.clusterPropertiesInformation = this.page.getByRole('form', { name: 'Properties Information' });
    this.clusterNameField = this.clusterPropertiesInformation.getByRole('textbox', { name: 'Name', exact: true });
    // Locator for the parent element of the ingress controller checkbox, used to change its value
    this.controllerCheckbox = this.clusterPropertiesInformation
      .getByRole('checkbox', {
        name: 'Setup an ingress controller',
      })
      .locator('..');
    this.clusterCreationButton = this.clusterPropertiesInformation.getByRole('button', { name: 'Create', exact: true });
    this.logsButton = this.clusterPropertiesInformation.getByRole('button', { name: 'Show Logs' });
    this.providerTypeCombobox = this.clusterPropertiesInformation.getByRole('combobox', { name: 'Provider Type' });
    this.httpPort = this.clusterPropertiesInformation.getByLabel('HTTP Port');
    this.httpsPort = this.clusterPropertiesInformation.getByLabel('HTTPS Port');
    this.containerImage = this.clusterPropertiesInformation.getByPlaceholder('Leave empty for using latest.');
    this.goBackButton = this.page.getByRole('button', { name: 'Go back to resources' });
  }
}
