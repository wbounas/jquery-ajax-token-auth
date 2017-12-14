#!/bin/bash

# sh scripts/url-encoded/sign-up.sh

curl "https://ga-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo
