curl --request POST \
--url http://localhost:3000/users/login \
--header "Content-Type: application/json" \
--data '{"name": "manuzinha", "password": "12345678", "email":"oi@gmail.com"}'