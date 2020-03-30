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

app.get('/api/v1/coliving', (req, res) => {
  res.send({
    "page": 1,
    "total_results": 157,
    "total_pages": 942,
    "results": [
      {
        "id": 420,
        "title": "coliving 1",
        "description": "apartamento equipado, cuenta con 3 habitaciones, cocina integral",
        "release_date": "2019-07-19",
        "image":  "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg",
        "location": "Bogotá",
        "latitude": "4.687652",
        "longitude": "-74.042464",
        "type_living_place": "Apartamento",
        "roomsNumber": 3,
        "amount": 1000000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 421,
        "title": "coliving 2",
        "description": "apartamento equipado, cuenta con 3 habitaciones, cocina integral",
        "release_date": "2019-08-09",
        "image":  "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg",
        "location": "Bogotá",
        "latitude": "4.611673 ",
        "longitude": "-74.161250",
        "type_living_place": "Apartamento",
        "roomsNumber": 3,
        "amount": 1000000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 422,
        "title": "coliving 3",
        "description": "apartamento equipado, cuenta con 3 habitaciones, cocina integral",
        "release_date": "2019-03-10",
        "image":  "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg",
        "location": "Bogotá",
        "latitude": "4.640794",
        "longitude": "-74.195380",
        "type_living_place": "Apartamento",
        "roomsNumber": 3,
        "amount": 1000000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 423,
        "title": "coliving 4",
        "description": "apartamento equipado, cuenta con 3 habitaciones, cocina integral",
        "release_date": "2020-02-15",
        "image":  "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg",
        "location": "Bogotá",
        "latitude": "4.687652",
        "longitude": "-74.134514",
        "type_living_place": "Apartamento",
        "roomsNumber": 3,
        "amount": 1000000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 424,
        "title": "coliving 5",
        "description": "apartamento equipado, cuenta con 3 habitaciones, cocina integral",
        "release_date": "2020-01-19",
        "image":  "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg",
        "location": "Bogotá",
        "latitude": "4.609900",
        "longitude": "-74.042464",
        "type_living_place": "Apartamento",
        "roomsNumber": 3,
        "amount": 1000000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 425,
        "title": "coliving 6",
        "description": "apartamento equipado, cuenta con 3 habitaciones, cocina integral",
        "release_date": "2019-09-25",
        "image":  "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg",
        "location": "Bogotá",
        "latitude": "4.615277",
        "longitude": "-74.141639",
        "type_living_place": "Apartamento",
        "roomsNumber": 3,
        "amount": 1000000,
        "amountCurrency": "COP",
        "favorite": false
      }
    ]
  });
});

app.listen(PORT, () => console.log('Example app is listening!'));
