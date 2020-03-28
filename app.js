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
  bookDatabase('book')
    .select('*')
    .then(books => res.status(200).json(books))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });
    });
});

app.get('/api/v1/books/:id', (req, res) => {
  bookDatabase('book')
    .select('*')
    .limit(1)
    .where({ id: req.params.id })
    .then(book => res.status(200).json(book))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });
    });
});

app.post('/api/v1/books', (req, res) => {
  bookDatabase('book')
    .insert(req.body)
    .then(() => res.status(201).json({ data: req.body }))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });
    });
});

app.listen(PORT, () => console.log('Example app is listening!'));
