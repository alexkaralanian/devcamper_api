const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

const { PORT, NODE_ENV } = process.env;

const app = express();
connectDB();

app.use(express.json());

// DEV LOGGING MIDDLEWARE
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

// ROUTE MIDDLEWARE
app.use(require('./middleware/errorHandler'));

// SERVER
const server = app.listen(
  PORT,
  console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`.blue)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});
