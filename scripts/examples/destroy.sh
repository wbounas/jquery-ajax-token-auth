#!/bin/bash

# ID=2 sh scripts/json/change-password.sh

curl "https://ga-library-api.herokuapp.com/examples/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
