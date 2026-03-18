# Registry Validation E2E Test Implementation Notes

## Overview

This document explains the E2E test implementation for the registry validation checkbox feature (PR #16539) and outlines the challenges encountered.

## Test File Location

`/home/anton/podman-desktop/tests/playwright/src/specs/build-image-registry-validation.spec.ts`

## Page Object Updates

Updated `/home/anton/podman-desktop/tests/playwright/src/model/pages/build-image-page.ts`:

- Added `registryValidationCheckbox` locator
- Added `toggleRegistryValidation(enabled: boolean)` method
- Added `isRegistryValidationEnabled()` method

## Test Resources

Created `/home/anton/podman-desktop/tests/playwright/resources/test-containerfile-invalid-registry`:

- Uses an invalid registry base image: `invalid-registry.example.com/nonexistent/image:latest`
- Intended for testing validation behavior with unreachable registries

## Implemented Tests

### 1. Verify registry validation checkbox is enabled by default

- Navigates to Build Image page
- Verifies the registry validation checkbox is visible and checked by default

### 2. Build succeeds with valid registry and validation enabled

- Uses the standard `test-containerfile` (with `ghcr.io/linuxcontainers/alpine`)
- Verifies validation checkbox is enabled
- Confirms build succeeds
- Cleans up the built image

### 3. Build succeeds with valid registry and validation disabled

- Disables the registry validation checkbox
- Uses the standard `test-containerfile`
- Confirms build still succeeds (no difference when registry is valid)
- Cleans up the built image

### 4. Toggle registry validation checkbox

- Tests that the checkbox can be toggled on and off
- Verifies state changes correctly

## Challenge: Testing with Invalid Credentials

### The Problem

The most important test scenarios from PR #16539 comments cannot be easily implemented:

**Desired Test Scenario 1**: Validation Enabled + Invalid Credentials

- Expected: Console shows errors about invalid registry, but build may proceed
- Challenge: Need to add invalid credentials to authentication configuration

**Desired Test Scenario 2**: Validation Disabled + Invalid Credentials

- Expected: Build fails with base64 decoding errors
- Challenge: Same credential injection issue

### Why This Is Difficult

The existing `RegistriesPage.createRegistry()` method validates credentials before adding them to the configuration. This is by design - the UI prevents users from adding invalid credentials.

To properly test the validation feature, we need to:

1. Inject invalid credentials directly into the auth configuration, OR
2. Mock the registry authentication in tests, OR
3. Set up a test registry server that we can control, OR
4. Find a way to bypass the validation in `createRegistry()` for testing purposes

### Current Implementation

The tests marked as TODO in the spec file are commented out with detailed explanations:

```typescript
// TODO: The following tests require adding invalid registry credentials
// This is challenging because createRegistry() validates credentials before adding them
// We need to either:
// 1. Find a way to add invalid credentials directly to the auth config
// 2. Mock the registry authentication in tests
// 3. Use a test registry server that we can control
```

## Recommendations for Complete Implementation

### Option 1: Direct Auth Config Manipulation (Recommended)

- Locate the auth configuration file used by Podman Desktop
- Create a test utility function to directly write invalid credentials to this file
- This bypasses the UI validation and allows testing the build-time validation

### Option 2: Test Registry Server

- Set up a test Docker registry that:
  - Accepts any credentials (to get them added via `createRegistry()`)
  - Returns authentication errors during image pulls
- More complex but more realistic

### Option 3: Mock/Stub Registry Authentication

- Use Playwright's route interception to mock registry authentication responses
- Requires understanding of which endpoints to mock

### Option 4: Add Test-Only API

- Add a test-only API method to inject invalid credentials
- Similar to how `window.getCancellableTokenSource()` and other test utilities work
- Only available in test/dev builds

## Correct Validation Behavior (from PR #16539)

Based on QE manual testing:

### With Validation ENABLED (checkbox checked - default):

- Invalid registry credentials are detected early
- Console shows errors/warnings about invalid registry
- **Build can still succeed** (validation is a pre-check, not a blocker)

### With Validation DISABLED (checkbox unchecked):

- Invalid registry credentials are NOT checked
- Credentials pass through to the build engine unchecked
- **Build fails with base64 decoding errors** when invalid credentials are encountered

## Running the Current Tests

```bash
# Run just the registry validation tests
pnpm exec playwright test build-image-registry-validation --project=podman-desktop

# Run with UI mode to see the tests in action
pnpm exec playwright test build-image-registry-validation --project=podman-desktop --ui

# View test results
pnpm exec playwright show-report tests/playwright/output/html-results
```

## Next Steps

1. Decide on approach for injecting invalid credentials (see recommendations above)
2. Implement the credential injection mechanism
3. Uncomment and complete the TODO tests in the spec file
4. Verify the tests correctly capture the validation behavior described in PR #16539
5. Consider adding tests for different types of registry failures (unreachable registry, authentication errors, etc.)
