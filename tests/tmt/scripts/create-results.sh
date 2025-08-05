#!/bin/bash
set -euo pipefail

cd "$TMT_TEST_DATA"

cp -r "$TMT_TREE/tests/playwright/output" .

cat <<EOF > ./results.yaml
- name: /tests/smoke
  result: pass
  note: 
    - "test"
  log:
    - ../output.txt
    - output
EOF

ls $TMT_TEST_DATA
