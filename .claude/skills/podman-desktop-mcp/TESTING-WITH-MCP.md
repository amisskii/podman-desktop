# Interactive Testing with electron-test-mcp

This guide explains how to use the `electron-test-mcp` MCP server for interactive manual testing of Podman Desktop through Claude's AI assistance.

## Overview

The electron-test-mcp MCP server enables interactive testing and exploration of Podman Desktop through Claude. Unlike automated Playwright E2E tests, MCP testing allows you to:

- **Interactively explore** the UI through natural language commands
- **Debug issues** by inspecting elements, capturing screenshots, and checking state
- **Verify functionality** without writing test code
- **Test ad-hoc scenarios** that don't require full automation
- **Complement automated tests** with exploratory testing

**When to use MCP testing:**

- Quick verification of UI changes during development
- Debugging specific user workflows or issues
- Exploring new features interactively
- Manual acceptance testing before release
- Learning the codebase through UI exploration

**When NOT to use MCP testing:**

- Automated CI/CD testing (use Playwright E2E tests instead)
- Regression testing (use existing test suite)
- Performance testing or load testing

## Prerequisites

Verify that electron-test-mcp is configured in `~/.claude.json`:

```json
{
  "mcpServers": {
    "electron-test": {
      "command": "npx",
      "args": ["-y", "electron-test-mcp"]
    }
  }
}
```

If not configured, add this entry and restart Claude Code.

## Testing Modes

Podman Desktop supports two testing modes:

### 1. CDP Mode (Development Testing)

**Best for:** Development with hot reload, rapid iteration

Connect to a running `pnpm watch` instance that automatically enables Chrome DevTools Protocol (CDP) on port 9223.

**Advantages:**

- Immediate hot reload of code changes
- Fast iteration during development
- No compilation required
- Integrated with normal development workflow

**Disadvantages:**

- Development build (slower, more debug output)
- Not testing production binary

### 2. Launch Mode (Production Testing)

**Best for:** Testing compiled binaries, production-like scenarios

Launch the compiled binary with test isolation using the helper script.

**Advantages:**

- Tests actual production binary
- Isolated test environment (no data pollution)
- Production-like performance
- Clean state for reproducible tests

**Disadvantages:**

- Requires compilation (`pnpm compile:current`)
- No hot reload
- Slower iteration

## Quick Start: CDP Mode (Development)

### Step 1: Start Development Server

```bash
pnpm watch
```

This starts Podman Desktop with hot reload and automatically enables CDP on port 9223.

### Step 2: Connect via MCP in Claude

In your Claude conversation, connect to the running instance:

```
Can you connect to Podman Desktop using CDP at http://localhost:9223?
```

Claude will use the `mcp__electron-test__connect` tool with:

- `cdpUrl`: "http://localhost:9223"

### Step 3: Get Page Snapshot

Ask Claude to get a snapshot of the current page structure:

```
Can you get a snapshot of the current page?
```

This shows the accessibility tree and helps identify selectors.

### Step 4: Interact with the UI

Now you can ask Claude to interact with Podman Desktop:

```
Navigate to the Settings page and check if the Preferences tab is visible.
```

```
Click on the Containers link in the navigation and count how many containers are listed.
```

## Quick Start: Launch Mode (Production)

### Step 1: Compile the Binary

```bash
pnpm compile:current
```

**macOS Note:** After compiling, sign the binary:

```bash
codesign --force --deep --sign - "dist/mac-arm64/Podman Desktop.app"
```

### Step 2: Launch with CDP Helper

```bash
./scripts/start-with-cdp.sh
```

This script:

- Creates an isolated test directory in `/tmp/pd-mcp-test-{timestamp}`
- Sets `PODMAN_DESKTOP_HOME_DIR` for test isolation
- Launches the binary with CDP on port 9222
- Prints connection instructions

### Step 3: Connect via MCP in Claude

In your Claude conversation:

```
Can you connect to Podman Desktop using CDP at http://localhost:9222?
```

### Step 4: Test Production Workflows

Test complete workflows in the production binary:

```
Navigate to Extensions, verify the Podman extension is loaded, then go to Dashboard and check the provider status.
```

## Common Testing Scenarios

### Navigation

**Navigate to Settings:**

```
Navigate to Settings page
```

**Navigate to Containers view:**

```
Click on the "Containers" link in the navigation
```

**Open Dashboard:**

```
Navigate to Dashboard
```

### Form Interaction

**Fill a configuration form:**

```
Navigate to Settings, fill in the "Container Engine" field with "podman", and click Save.
```

**Toggle a setting:**

```
Go to Settings > Preferences and toggle the "Enable experimental features" checkbox.
```

### Element Inspection

**Get text content:**

```
What is the text of the main heading on this page?
```

**Check visibility:**

```
Is the "Start" button visible on the current page?
```

**Count elements:**

```
How many container cards are displayed in the Containers view?
```

**Get element attributes:**

```
What is the data-testid attribute of the Settings navigation link?
```

### Screenshot & Debugging

**Capture full page screenshot:**

```
Take a screenshot of the current page.
```

**Element-specific screenshot:**

```
Take a screenshot of the container list section.
```

**Get accessibility snapshot:**

```
Get an accessibility snapshot of the current page to see the element tree.
```

### Advanced Workflows

**Container creation workflow:**

```
Navigate to Containers, click "Create Container", fill in the form with image "nginx:latest" and name "test-nginx", then submit.
```

**Extension installation flow:**

```
Go to Extensions, search for "Docker", and verify the Docker extension appears in results.
```

**Provider status verification:**

```
Navigate to Dashboard, check the Podman provider status, and verify it shows as "Running".
```

## Selector Strategy Best Practices

When interacting with Podman Desktop UI, Claude should use selectors in this priority order:

### 1. Primary: data-testid Attributes (Preferred)

Use `data-testid` attributes whenever available. These are stable, semantic, and designed for testing.

**Examples:**

- `[data-testid="pin-menu"]`
- `[data-testid="container-list"]`
- `[data-testid="settings-nav-button"]`

**How to find them:** Use `snapshot()` to see the accessibility tree with test IDs.

### 2. Secondary: ARIA Roles and Accessible Names

Use ARIA roles and accessible names for semantic element selection.

**Examples:**

- `role=button[name="Start"]`
- `role=heading[name="Settings"]`
- `role=link[name="Containers"]`

### 3. Tertiary: Text Content

Use visible text content when data-testid and ARIA attributes are not available.

**Examples:**

- `text="Podman Desktop"`
- `text="Create Container"`
- Text searches are case-sensitive

### 4. Last Resort: CSS Selectors

Only use CSS selectors when other strategies fail. These are fragile and may break with UI changes.

**Examples:**

- `.container-card`
- `#settings-panel`
- `.nav-item.active`

**Best Practice:** If you find yourself using CSS selectors frequently, consider adding `data-testid` attributes to the component.

## Troubleshooting

### Port Already in Use

**Problem:** CDP port 9223 or 9222 is already in use.

**Solution:**

```bash
# Check what's using the port
lsof -i :9223
lsof -i :9222

# Kill the process if needed
kill -9 <PID>
```

### Connection Failures

**Problem:** `mcp__electron-test__connect` fails with timeout or connection error.

**Solution:**

1. Verify Podman Desktop is running
2. Check that CDP is enabled (should see console output with port)
3. Try connecting to http://localhost:9223 in browser to verify CDP endpoint
4. Ensure no firewall is blocking local ports

### CDP Timeout Issues

**Problem:** Commands timeout or hang.

**Solution:**

1. Check Podman Desktop console for errors
2. Try disconnecting and reconnecting
3. Restart Podman Desktop
4. Verify the page hasn't crashed (check process in Activity Monitor)

### Test Isolation Problems

**Problem:** Tests interfere with actual user data or previous test runs.

**Solution:**

1. Use `./scripts/start-with-cdp.sh` for production testing (creates isolated environment)
2. Verify `PODMAN_DESKTOP_HOME_DIR` is set to temp directory
3. Delete old test directories in `/tmp/pd-mcp-test-*` if needed

### Element Not Found

**Problem:** MCP commands can't find expected elements.

**Solution:**

1. Use `snapshot()` to see current page structure
2. Verify selector syntax (prefer `data-testid`)
3. Wait for page load: `wait({ timeout: 5000 })`
4. Check if element is in a different frame or webview

### Stale Element Reference

**Problem:** Element reference becomes invalid during interaction.

**Solution:**

1. Re-query the element before each interaction
2. Use unique selectors that don't change
3. Add explicit waits between actions

## Integration with Existing Tests

MCP testing complements, not replaces, existing Playwright E2E tests:

| Aspect        | MCP Testing                        | Playwright E2E               |
| ------------- | ---------------------------------- | ---------------------------- |
| **Purpose**   | Interactive exploration, debugging | Automated regression testing |
| **When**      | Development, manual verification   | CI/CD, release validation    |
| **Speed**     | Slower (manual interaction)        | Fast (automated)             |
| **Coverage**  | Ad-hoc, targeted                   | Comprehensive, repeatable    |
| **Who**       | Developers, QA (manual)            | CI/CD pipeline (automated)   |
| **Isolation** | Optional (CDP or isolated env)     | Required (clean state)       |

**Best Practice:**

- Use MCP testing during development to explore and verify
- Write Playwright tests for scenarios that need automation
- Use MCP to debug failing Playwright tests
- Convert common MCP workflows into Playwright tests for regression coverage

## Debugging Playwright Tests with MCP

You can debug running Playwright tests in real-time using MCP connection.

### Enable CDP in Tests

Set the `ENABLE_CDP_DEBUG` environment variable:

```bash
ENABLE_CDP_DEBUG=true pnpm exec playwright test my-test.spec.ts --headed
```

This enables CDP on port **9224** during test execution (different from dev port 9223 and production port 9222).

### Add Debug Pauses to Your Test

Use the `pauseForMcpInspection()` helper:

```typescript
import { pauseForMcpInspection } from '/@/utility/test-debug-helpers';

test('my test', async ({ page }) => {
  // ... test setup ...

  // Pause for 30 seconds to allow MCP inspection
  await pauseForMcpInspection(page, 'After form fill', 30000);

  // ... continue test ...
});
```

### Connect via MCP During Pause

When the test pauses, connect in Claude:

```javascript
mcp__electron - test__connect({ port: 9224 });
mcp__electron - test__snapshot();
// Inspect, screenshot, evaluate JavaScript, etc.
```

See [../tests/playwright/README-DEBUG.md](../tests/playwright/README-DEBUG.md) for comprehensive debugging guide.

## Example Commands Reference

See [scripts/mcp-test-examples.md](../scripts/mcp-test-examples.md) for ready-to-use MCP command examples.

## Tips for Effective Testing

1. **Start with a snapshot** - Always run `snapshot()` first to understand page structure
2. **Use data-testid** - Prefer stable test IDs over CSS selectors
3. **Wait for elements** - Use explicit waits for dynamic content
4. **Take screenshots** - Capture visual state for debugging
5. **Test in isolation** - Use the CDP helper script for reproducible production testing
6. **Document findings** - Record bugs or issues discovered during testing
7. **Combine with logs** - Check console output and main process logs for errors

## Additional Resources

- **MCP Server Documentation:** [electron-test-mcp on npm](https://www.npmjs.com/package/electron-test-mcp)
- **Playwright Documentation:** [playwright.dev](https://playwright.dev)
- **Podman Desktop E2E Tests:** `tests/playwright/`
- **Component Selectors:** Look for `data-testid` attributes in Svelte components
