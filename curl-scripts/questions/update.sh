# Ex: TOKEN=tokengoeshere ID=idgoeshere TEXT=textgoeshere sh curl-scripts/examples/update.sh

# curl "https://young-reef-92206.herokuapp.com/questions/${ID}" \
 curl "http://localhost:4741/questions/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "question": {
      "phrase": "'"${PHRASE}"'"
    }
  }'

  echo
