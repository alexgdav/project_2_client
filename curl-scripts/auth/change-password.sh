#!/bin/bash

# curl "https://young-reef-92206.herokuapp.com/change-password" \
curl "http://localhost:4741/change-password"
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo