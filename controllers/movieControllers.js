const Movie = require('../models/database');
const getDb = require('../connection/db').getDb;
const { ObjectId} = require('mongodb');

exports.postAddMovie = (req, res) => {
  const { name, description, duration, rating } = req.body;
  const movie = new Movie(name, description, duration, rating);
  movie.save();
  res.json({ message: 'movie added successfully' });
};

exports.getAllMovies = (req, res) => {
  const db = getDb();
  db.collection('movies')
    .find()
    .toArray()
    .then((movies) => {
      res.json(movies);
      
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.getSingleMovie = (req, res) => {
  const idName = req.query.id;
  const movieId = new ObjectId(idName);
  console.log(movieId);
  const db = getDb();
  db.collection('movies')
    .findOne({ _id: movieId })
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.getPaginatedMovies = (req, res) => {
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  const skip = (page - 1) * size;

  const db = getDb();
  db.collection('movies')
    .find()
    .skip(skip)
    .limit(size)
    .toArray()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};


