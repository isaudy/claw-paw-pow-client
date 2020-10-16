# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "newGameApi": {
       # "new": "'"${NEWPW}"'"
    }
  }'

echo
