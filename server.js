const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();
const { PORT, NODE_ENV } = process.env;

app.listen(
  PORT,
  console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`)
);
