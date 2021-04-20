const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

// router.get('/movies/create', (req, res) => {
//     res.render('movie-create');
// });

// router.post('/movie/create', async (req, res) => {
//     const {
//         title,
//         genre,
//         plot
//     } = req.body;
//     await Author.create({
//         title,
//         genre,
//         plot
//     });
//     res.redirect('/books');
// });

module.exports = router;