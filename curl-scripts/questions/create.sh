#!/bin/bash

curl "https://young-reef-92206.herokuapp.com/questions" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "question": {
      "phrase": "'"${PHRASE}"'"
    }
  }'

echo
