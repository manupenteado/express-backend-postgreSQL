curl --request POST \
--url https://express-backend-postgre-sql.vercel.app/users/register \
--header "Content-Type: application/json" \
  --data '{"name": "manuzinha", "password": "12345678", "email":"penteadoemanuele@gmail.com"}'