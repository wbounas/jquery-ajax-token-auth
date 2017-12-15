#!/bin/bash

# sh scripts/json/sign-up.sh

curl "https://ga-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ''

echo
