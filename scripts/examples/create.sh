#!/bin/bash

# sh scripts/examples/create.sh
# TOKEN="token" TEXT=text

curl "https://ga-library-api.herokuapp.com/examples" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
