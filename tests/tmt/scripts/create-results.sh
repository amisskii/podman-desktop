#!/bin/bash
set -euo pipefail

cd "$TMT_TEST_DATA"

cp -r "$TMT_TREE/tests/playwright/output" .

if [ "$1" -eq 0 ]; then
  result="pass"
  note="Playwright tests passed."
else
  result="fail"
  note="Playwright tests failed."
fi

cat <<EOF > ./results.yaml
- name: /tests/$2
  result: $result
  note: 
    - "$note"
  log:
    - ../output.txt
    - output
EOF
