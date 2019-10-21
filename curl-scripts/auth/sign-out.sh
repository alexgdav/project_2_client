#!/bin/bash

# curl "https://young-reef-92206.herokuapp.com/sign-out" \
curl "http://localhost:4741/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
