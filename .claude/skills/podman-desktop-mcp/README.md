# Podman Desktop MCP Testing Skill

This skill enables interactive manual testing of Podman Desktop through the electron-test-mcp MCP server.

## Files in This Directory

### Core Skill

- **`SKILL.md`** - Main skill file loaded by Claude Code. Contains complete workflow for starting app, connecting via MCP, and common testing patterns.

### Documentation

- **`TESTING-WITH-MCP.md`** - Comprehensive testing guide (12KB)
  - Two testing modes: CDP and Launch
  - Selector strategy best practices
  - Common testing scenarios
  - Complete troubleshooting section

### Examples & Scripts

- **`mcp-test-examples.md`** - 500+ lines of ready-to-use MCP commands (12KB)
  - Connection examples
  - Navigation workflows
  - Form interactions
  - Element inspection
  - Screenshot & debugging
  - Advanced multi-step scenarios
  - Continuous testing workflows

- **`start-with-cdp.sh`** - Executable bash script (2.2KB)
  - Launches compiled Podman Desktop binary with CDP on port 9222
  - Creates isolated test environment in `/tmp/pd-mcp-test-{timestamp}`
  - Platform-aware (Linux/macOS)
  - Usage: `$SKILL_DIR/start-with-cdp.sh`

## Quick Start

### For Sub-Agents

When invoking this skill, sub-agents will have access to:

1. **Complete workflow** for launching and connecting to Podman Desktop
2. **Navigation patterns** for all UI pages
3. **JavaScript evaluation examples** for reliable interactions
4. **Troubleshooting guide** for common issues

### For Manual Use

```bash
# 1. Compile binary (if not already done)
cd $PODMAN_DESKTOP_DIR
pnpm compile:current

# 2. Launch with CDP enabled
$SKILL_DIR/start-with-cdp.sh

# 3. In Claude conversation, connect via MCP
"Connect to Podman Desktop using CDP at http://localhost:9222"
```

## File Locations Summary

All files are in: `/home/anton/.claude/skills/podman-desktop-mcp/`

```
podman-desktop-mcp/
├── README.md                  # This file
├── SKILL.md                   # Main skill (loaded by sub-agents)
├── TESTING-WITH-MCP.md        # Comprehensive testing guide
├── mcp-test-examples.md       # Ready-to-use command examples
└── start-with-cdp.sh          # CDP launcher script (executable)
```

## Integration with Podman Desktop

- **Repository:** `$PODMAN_DESKTOP_DIR`
- **Binary location:** `dist/linux-unpacked/podman-desktop` (after `pnpm compile:current`)
- **Development mode:** `pnpm watch` enables CDP on port 9223 automatically
- **Production mode:** `start-with-cdp.sh` enables CDP on port 9222

## Key Differences from Repository

These files are **personal tools** separate from the Podman Desktop repository:

- ✅ Available for all sub-agents via skill invocation
- ✅ Not committed to podman-desktop repo
- ✅ Can be modified without affecting upstream
- ✅ Maintained independently of project releases

## Usage in Conversations

### Invoke Skill

```
/podman-desktop-mcp
```

### Direct Reference

```
Read /home/anton/.claude/skills/podman-desktop-mcp/mcp-test-examples.md for command examples
```

### For Sub-Agents

The skill is automatically loaded when invoked, providing complete context for testing Podman Desktop via MCP.
