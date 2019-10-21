#!/bin/bash

# curl "https://young-reef-92206.herokuapp.com/questions" \
curl "http://localhost:4741/questions" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
