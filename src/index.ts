import express from 'express';
import morgan from "morgan";

require('dotenv').config()

const app = express();

app.use(morgan("dev"))

const port = process.env.PORT || 5000;

app.get('/', (_, res) => {
  res.status(200).send("Welcome to the house help API")
});

app.listen(port, () => console.log(`Running on port ${port}`))