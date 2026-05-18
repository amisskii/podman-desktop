# Network Operations

## Navigation

| Target        | Selector                                                   |
| ------------- | ---------------------------------------------------------- |
| Networks page | `nav[aria-label="AppNavigation"] a[aria-label="Networks"]` |

## Page Structure

### NetworksPage (list)

```
[role="region"][aria-label="networks"]
├── [role="region"][aria-label="header"]
│   ├── [role="heading"]                        ← "Networks"
│   └── [role="group"][aria-label="additionalActions"]
│       └── button:has-text("Create")
├── [role="region"][aria-label="search"]
│   └── [role="group"][aria-label="bottomAdditionalActions"]
│       └── button:has-text("Delete")           ← bulk delete
└── [role="region"][aria-label="content"]
    └── [role="table"]
        └── [role="row"][aria-label="{networkName}"]
```

### NetworkDetailsPage

```
[role="region"][aria-label="Header"]
├── nav[aria-label="Breadcrumb"]
├── [role="heading"]                            ← network name
└── [role="group"][aria-label="Control Actions"]
[role="region"][aria-label="Tabs"]
└── a:has-text("{tabName}")                     ← Summary, Inspect
[role="region"][aria-label="Tab Content"]
```

## Locators

### NetworksPage

| Element         | Selector                                                           |
| --------------- | ------------------------------------------------------------------ |
| Page heading    | `[role="region"][aria-label="networks"] [role="heading"]`          |
| Create button   | `[aria-label="additionalActions"] button:has-text("Create")`       |
| Delete selected | `[aria-label="bottomAdditionalActions"] button:has-text("Delete")` |
| Network row     | `[role="row"][aria-label="{networkName}"]`                         |
| Name cell       | `[role="row"][aria-label="{name}"] [role="cell"]:nth-child(4)`     |

### CreateNetworkPage

| Element       | Selector                                        |
| ------------- | ----------------------------------------------- |
| Heading       | `[role="heading"]:has-text("Create a network")` |
| Name input    | `[role="textbox"][aria-label="Name"]`           |
| Subnet input  | `[role="textbox"][aria-label="Subnet"]`         |
| Basic tab     | `button:has-text("Basic")`                      |
| Advanced tab  | `button:has-text("Advanced")`                   |
| Create button | `button:has-text("Create")`                     |
| Cancel button | `button:has-text("Cancel")`                     |

### NetworkDetailsPage

| Element        | Selector                                                           |
| -------------- | ------------------------------------------------------------------ |
| Heading        | `[aria-label="Header"] [role="heading"]:has-text("{networkName}")` |
| Update Network | `[aria-label="Control Actions"] button:has-text("Update Network")` |
| Delete Network | `[aria-label="Control Actions"] button:has-text("Delete Network")` |
| Summary tab    | `[aria-label="Tabs"] a:has-text("Summary")`                        |
| Inspect tab    | `[aria-label="Tabs"] a:has-text("Inspect")`                        |

## Operations

### Create network

1. Navigate: `click('nav[aria-label="AppNavigation"] a[aria-label="Networks"]')`
2. Wait for page: `wait('[role="region"][aria-label="networks"] [role="heading"]')`
3. Click Create: `click('[aria-label="additionalActions"] button:has-text("Create")')`
4. Wait for create page: `wait('[role="heading"]:has-text("Create a network")')`
5. Fill name: `fill('[role="textbox"][aria-label="Name"]', '{networkName}')`
6. Click Create: `click('button:has-text("Create")')`
7. Wait for list: `wait('[role="region"][aria-label="networks"] [role="heading"]')`

### Create network with subnet

1. Follow steps 1-5 from "Create network"
2. Click Advanced: `click('button:has-text("Advanced")')`
3. Fill subnet: `fill('[role="textbox"][aria-label="Subnet"]', '{subnet}')`
4. Click Create: `click('button:has-text("Create")')`

### Open network details

1. Navigate to Networks page (steps 1-2)
2. Click network row: `click('[role="row"][aria-label="{networkName}"]')`
3. Wait for details: `wait('[aria-label="Header"] [role="heading"]:has-text("{networkName}")')`

### Delete network (from details)

1. Open network details
2. Click Delete: `click('[aria-label="Control Actions"] button:has-text("Delete Network")')`
3. Wait for list: `wait('[role="region"][aria-label="networks"] [role="heading"]')`

### Delete networks (bulk)

1. Navigate to Networks page
2. Select networks by clicking their checkboxes
3. Click Delete: `click('[aria-label="bottomAdditionalActions"] button:has-text("Delete")')`

## Gotchas

- Networks have only two tabs: Summary and Inspect
- The default network (`podman`) cannot be deleted
- Create page has Basic/Advanced tabs — subnet is under Advanced
- Bulk delete uses bottomAdditionalActions, not the same Delete as single-row delete
