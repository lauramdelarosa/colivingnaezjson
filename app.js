const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const bookDatabase = require('./connection');
const app = express();

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/books', (req, res) => {
  response.send('Warming up friend.');
});

app.listen(PORT, () => console.log('Example app is listening!'));
