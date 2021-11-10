#!/bin/sh

npx cypress run --headless --spec "cypress/integration/MLset/MLset_end_to_end_testing.js"

npm run int-test