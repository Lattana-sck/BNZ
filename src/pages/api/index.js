const express = require('express');
const connectDB = require('./services/db');
const app = express();

connectDB().then(() => {
  console.log('Connected to DB');
  app.listen(3001, () => {
    console.log('Server started on port 3001');
  });
}).catch(err => {
  console.error('Unable to connect to DB', err);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
