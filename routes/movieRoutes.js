const express = require('express');
const movieController = require('../controllers/movieControllers');

const router = express.Router();

router.post('/add-movie', movieController.postAddMovie);
router.get('/get-all', movieController.getAllMovies);
router.get('/get-single', movieController.getSingleMovie);
router.get('/get-paginated', movieController.getPaginatedMovies);

module.exports = router;
