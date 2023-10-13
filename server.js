const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });
const { PORT, NODE_ENV } = process.env;

const app = express();

// DEV LOGGING MIDDLEWARE
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

app.listen(
  PORT,
  console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`)
);
