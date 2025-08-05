#!/bin/bash
set -euo pipefail

cd "$TMT_TEST_DATA"

cp  -r "$TMT_TREE/tests/playwright/output" .

if [ "$1" -eq 0 ]; then 
cat <<EOF > ./results.yaml
- name: /tests/$2
  result: pass
  note: 
    - "Playwright tests passed."
  log:
    - ../output.txt
    - output
EOF

elif [ "$1" -eq 255 ]; then 

cat <<EOF > ./results.yaml
- name: /tests/$2
  result: fail
  note: 
    - "Playwright tests failed."
  log:
    - ../output.txt
    - output
EOF
fi
