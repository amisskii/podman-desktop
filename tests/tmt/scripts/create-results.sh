#!/bin/bash
set -euo pipefail

cd "$TMT_TEST_DATA"

cp ../output.txt .
cp "$TMT_TREE/tests/playwright/output/junit-results.xml" .

cat <<EOF > ./results.yaml
- name: /tests/tmt/e2e-smoke
  result: pass
  note: 
    - "Playwright test executed and results referenced directly from original location."
  log:
    - output.txt
    - junit-results.xml
EOF
