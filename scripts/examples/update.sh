#!/bin/bash

# sh scripts/examples/update.sh
# TOKEN="token" TEXT=text ID=id

curl "https://ga-library-api.herokuapp.com/examples/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
