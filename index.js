require("dotenv").config();
const ctrl = require('./products_ctrl')
const express = require("express");
const massive = require("massive");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
connectionString: CONNECTION_STRING,
ssl: {rejectUnauthorized: false}
})
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.get(`/api/products`,ctrl.getAll)
app.get(`/api/products/:id`,ctrl.getOne)
app.put(`/api/products/:id`, ctrl.update)
app.post(`/api/products`,ctrl.create)
app.delete(`/api/products`,ctrl.delete)


app.listen(SERVER_PORT, console.log(`YOURE LISTENING TO ${SERVER_PORT}`))
