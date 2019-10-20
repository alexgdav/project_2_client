# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/examples/show.sh

# curl "https://young-reef-92206.herokuapp.com/questions/${ID}" \
curl "http://localhost:4741/questions/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
