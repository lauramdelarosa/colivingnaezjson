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
        "title": "coliving QWERP",
        "description": "Apartamento equipado, cuenta con 2 habitaciones, cocina integral",
        "release_date": "2019-07-19",
        "image":  "https://www.jll.es/images/research/teaser/jll-european-coliving-index-2019-teaser.jpg",
        "location": "Bogotá",
        "latitude": "4.687652",
        "longitude": "-74.042464",
        "type_living_place": "Apartamento",
        "roomsNumber": 2,
        "amount": 1500000,
        "amountCurrency": "COP",
        "favorite": true
      },
      {
        "id": 421,
        "title": "coliving GGHH",
        "description": "Apartamento equipado, cuenta con 1 habitaciones, cocina integral, zonas compartidas",
        "release_date": "2019-08-09",
        "image":  "https://s3.amazonaws.com/mercado-ideas/wp-content/uploads/sites/8/2019/08/19164450/coliving.jpg",
        "location": "Bogotá",
        "latitude": "4.611673 ",
        "longitude": "-74.161250",
        "type_living_place": "Apartamento",
        "roomsNumber": 1,
        "amount": 1700000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 422,
        "title": "coliving LONA",
        "description": "Apartamento equipado, cuenta con 3 habitaciones, sala de estar, dos baños",
        "release_date": "2019-03-10",
        "image":  "https://sc2.elpais.com.uy/files/article_default_content/uploads/2019/12/05/5de903a299b6f.jpeg",
        "location": "Bogotá",
        "latitude": "4.640794",
        "longitude": "-74.195380",
        "type_living_place": "Apartamento",
        "roomsNumber": 3,
        "amount": 1600000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 423,
        "title": "coliving PESD",
        "description": "Hermoso partamento equipado, cuenta con 2 habitaciones, sala de estar, varias zonas comunes ",
        "release_date": "2020-02-15",
        "image":  "https://d16yj43vx3i1f6.cloudfront.net/uploads/2019/11/3-1088x726.jpg",
        "location": "Bogotá",
        "latitude": "4.687652",
        "longitude": "-74.134514",
        "type_living_place": "Apartamento",
        "roomsNumber": 2,
        "amount": 1650000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 424,
        "title": "coliving HEREI",
        "description": "Cómodo apartamento, cuenta con 2 habitaciones, sala comedor y zonas comunes",
        "release_date": "2020-01-19",
        "image":  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartamento-coliving-paris6-1587036437.jpg?resize=480:*",
        "location": "Bogotá",
        "latitude": "4.609900",
        "longitude": "-74.042464",
        "type_living_place": "Apartamento",
        "roomsNumber": 2,
        "amount": 1800000,
        "amountCurrency": "COP",
        "favorite": false
      },
      {
        "id": 425,
        "title": "coliving JUNIE",
        "description": "Amplio apartamento, cuenta con 1 habitaciones, cocina integral, sala de estar y amplias zonas comunes",
        "release_date": "2019-09-25",
        "image":  "https://s3-eu-west-1.amazonaws.com/housfy/prod/blog/images/2019/11/25134332/shridhar-gupta-dZxQn4VEv2M-unsplash-1024x683.jpg",
        "location": "Bogotá",
        "latitude": "4.615277",
        "longitude": "-74.141639",
        "type_living_place": "Apartamento",
        "roomsNumber": 1,
        "amount": 1900000,
        "amountCurrency": "COP",
        "favorite": true
      }
    ]
  });
});

app.get('/api/v1/topics', (req, res) => {
  res.send({
    "page": 1,
    "total_results": 157,
    "total_pages": 942,
    "results": [
      {
        "id": 1,
        "name": "Animales"
      },
      {
        "id": 2,
        "name": "Numeros"
      },
      {
        "id": 3,
        "name": "Frutas"
      },
      {
        "id": 4,
        "name": "Ciudades"
      },
      {
        "id": 5,
        "name": "Random"
      },
      
    ]
  });
});

app.listen(PORT, () => console.log('Example app is listening!'));
