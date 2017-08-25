#!/bin/bash

# sh scripts/sign-up-json.sh

API="${API_ORIGIN:-http://httpbin.org}"
URL_PATH="/post"
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ''

echo
