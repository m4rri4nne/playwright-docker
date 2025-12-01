#!/bin/sh
set -eu

# Small entrypoint that runs tests and generates Allure report.
# For proper signal handling we run the child in background and forward TERM/INT.

child=""
term_handler() {
  if [ -n "${child}" ]; then
    kill -TERM "${child}" 2>/dev/null || true
  fi
}

trap term_handler TERM INT

# Run tests (background so we can forward signals)
npm test &
child=$!
wait $child
status=$?
if [ $status -ne 0 ]; then
  echo "npm test failed with status $status" >&2
  exit $status
fi

# Generate Allure report
allure generate allure-results --clean -o allure-report
echo 'Allure report generated ./allure-report'

exit 0
