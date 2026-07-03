# Extension Operations

## Navigation

| Target          | Selector                                                     |
| --------------- | ------------------------------------------------------------ |
| Extensions page | `nav[aria-label="AppNavigation"] a[aria-label="Extensions"]` |

## Page Structure

### ExtensionsPage

```
[role="region"][aria-label="extensions"]
├── [role="region"][aria-label="header"]
│   ├── [role="heading"]                        ← "Extensions"
│   └── button:has-text("Installed")             ← tab buttons (no aria-label)
│       button:has-text("Catalog")
│       button:has-text("Local Extensions")
├── [role="region"][aria-label="content"]
│   └── [role="region"][aria-label="{extensionLabel}"]  ← extension cards
```

## Locators

### ExtensionsPage

| Element               | Selector                                                        |
| --------------------- | --------------------------------------------------------------- |
| Page heading          | `[aria-label="header"] [role="heading"]:has-text("extensions")` |
| Installed tab         | `button:has-text("Installed")`                                  |
| Catalog tab           | `button:has-text("Catalog")`                                    |
| Local Extensions tab  | `button:has-text("Local Extensions")`                           |
| Install custom button | `[aria-label="Install custom"]`                                 |

### Install Custom Extension Dialog

| Element         | Selector                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Dialog          | `[role="dialog"][aria-label="Install Custom Extension"]`                                                                       |
| OCI image input | `[role="dialog"][aria-label="Install Custom Extension"] [role="textbox"][aria-label="Image name to install custom extension"]` |
| Install button  | `[role="dialog"][aria-label="Install Custom Extension"] button:has-text("Install")`                                            |
| Done button     | `[role="dialog"][aria-label="Install Custom Extension"] button:has-text("Done")`                                               |

### ExtensionCard (per extension in Installed list)

| Element         | Selector                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Card region     | `[aria-label="content"] [role="region"][aria-label="{extensionLabel}"]`                                          |
| Details link    | `[role="region"][aria-label="{extensionLabel}"] button:has-text("{extensionName} extension details")`            |
| Status          | `[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Status Label"]`                           |
| Start (enable)  | `[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Actions"] button:has-text("Start")`       |
| Stop (disable)  | `[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Actions"] button:has-text("Stop")`        |
| Delete (remove) | `[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Actions"] button:has-text("Delete")`      |
| Edit properties | `[role="region"][aria-label="{extensionLabel}"] button:has-text("Edit properties of {extensionName} extension")` |

### ExtensionDetailsPage

| Element           | Selector                                                             |
| ----------------- | -------------------------------------------------------------------- |
| Heading           | `[aria-label="Header"] [role="heading"]:has-text("{extensionName}")` |
| Start             | `[aria-label="Header"] button:has-text("Start")`                     |
| Stop              | `[aria-label="Header"] button:has-text("Stop")`                      |
| Delete            | `[aria-label="Header"] button:has-text("Delete")`                    |
| Status            | `[aria-label="Header"] [aria-label="Extension Status Label"]`        |
| Tab activation    | `[aria-label="Tabs"] button:has-text("{tabName}")`                   |
| Error stack trace | `[aria-label="Tab Content"] [aria-label="Stack Trace"]`              |

### ExtensionCatalogCard (per extension in Catalog)

| Element           | Selector                                                                       |
| ----------------- | ------------------------------------------------------------------------------ |
| Card              | `[role="group"][aria-label="{extensionName}"]`                                 |
| More details      | `[role="group"][aria-label="{extensionName}"] button:has-text("More details")` |
| Install button    | `[role="group"][aria-label="{extensionName}"] button:has-text("Install")`      |
| Already installed | text "Already installed" within card                                           |

## Operations

### View installed extensions

1. Navigate: `click('nav[aria-label="AppNavigation"] a[aria-label="Extensions"]')`
2. Wait for page: `wait('[aria-label="header"] [role="heading"]:has-text("extensions")')`
3. Click Installed: `click('button:has-text("Installed")')`

### View extension catalog

1. Navigate to Extensions page (steps 1-2)
2. Click Catalog: `click('button:has-text("Catalog")')`
3. Wait for catalog cards: `wait('[role="group"][aria-label] button:has-text("More details")')`

### Install extension from catalog

1. View extension catalog (steps 1-3)
2. Click Install: `click('[role="group"][aria-label="{extensionName}"] button:has-text("Install")')`
3. Wait for installed: `wait('[role="group"][aria-label="{extensionName}"] text="Already installed"', { timeout: 60000 })`

### Install custom extension (OCI)

1. Navigate to Extensions page
2. Click Install custom: `click('[aria-label="Install custom"]')`
3. Wait for dialog: `wait('[role="dialog"][aria-label="Install Custom Extension"]')`
4. Fill OCI image: `fill('[role="dialog"][aria-label="Install Custom Extension"] [role="textbox"][aria-label="Image name to install custom extension"]', '{ociImage}')`
5. Click Install: `click('[role="dialog"][aria-label="Install Custom Extension"] button:has-text("Install")')`
6. Wait for Done: `wait('[role="dialog"][aria-label="Install Custom Extension"] button:has-text("Done")', { timeout: 120000 })`
7. Click Done: `click('[role="dialog"][aria-label="Install Custom Extension"] button:has-text("Done")')`

### Open extension details

1. Navigate to Extensions page, Installed tab
2. Click details: `click('[role="region"][aria-label="{extensionLabel}"] button:has-text("{extensionName} extension details")')`
3. Wait for details: `wait('[aria-label="Header"] [role="heading"]:has-text("{extensionName}")')`

### Enable/Disable extension

1. **From card** (Installed tab):
   - Start: `click('[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Actions"] button:has-text("Start")')`
   - Stop: `click('[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Actions"] button:has-text("Stop")')`

2. **From details page**:
   - Start: `click('[aria-label="Header"] button:has-text("Start")')`
   - Stop: `click('[aria-label="Header"] button:has-text("Stop")')`

### Delete extension

1. **From card**: `click('[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Actions"] button:has-text("Delete")')`
2. **From details**: `click('[aria-label="Header"] button:has-text("Delete")')`

### Check extension status

```
getText('[role="region"][aria-label="{extensionLabel}"] [aria-label="Extension Status Label"]')
```

Returns: `ACTIVE`, `DISABLED`, `FAILED`, etc.

## Gotchas

- Extension labels in cards use the display name, not the extension ID
- Catalog cards use `[role="group"]`, installed cards use `[role="region"]`
- Install from catalog can take 30-120s depending on extension size
- Custom OCI install dialog stays open until you click Done
- Start/Stop buttons swap based on current state — check status first
- Built-in extensions (podman, docker, compose) cannot be deleted
