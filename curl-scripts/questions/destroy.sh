# Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/examples/destroy.sh

# curl "https://young-reef-92206.herokuapp.com/questions/${ID}" \
curl "http://localhost:4741/questions/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
