require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');

const app = express();

app.use(morgan('dev'));

app.use('/', routes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    message: error.message
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
