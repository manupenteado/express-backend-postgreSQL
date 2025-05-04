import express from 'express';
import db from './models/index.js';
import userRoute from './routes/user.route.js';
import exempleRoute from './routes/exemple.route.js';


db.sequelize.sync({ force: true })  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((error) => {
    console.error("Error syncing database", error);
  });

const app = express();

//converte o que a gente recebe no servidor para um obj javascript
app.use(express.json());

app.use("/users", userRoute);
app.use("/secureExempleRoute", exempleRoute);

app.get('/', (req, res) => {
    res.send({message: 'Hello everyone!'});
    });

//se a variavel nao for definida, ele vai usar o 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Server is running on port http://localhost:${PORT}/`);});