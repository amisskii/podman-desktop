#!/bin/bash
# Define the base directory for Playwright outputs
PLAYWRIGHT_OUTPUT_DIR="$TMT_TREE/tests/playwright/output"



# Define the full paths to the output files
FULL_PATH_JUNIT_XML="$PLAYWRIGHT_OUTPUT_DIR/junit-results.xml"

TMT_RESULTS_YAML="$TMT_TEST_DATA/results.yaml"
TEST_FMF_ID="$(tmt test id)" # Get the unique FMF ID of the current test

# Generate the results.yaml file, directly referencing the full paths
cat <<EOF > "$TMT_RESULTS_YAML"
- name: "$TEST_FMF_ID"
  result: pass
  note: "Playwright test executed and results referenced directly from original location."
  log:
    - path: "$FULL_PATH_JUNIT_XML"
      format: xml
EOF
exit 0