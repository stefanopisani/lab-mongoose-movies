const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

router.get('/celebrities', async (req, res) => {
    try {
        const celebritiesFromDB = await Celebrity.find();
        console.log('celebrities from db' + celebritiesFromDB);
        res.render('celebrities', {
            celebritiesFromDB
        });
    } catch (e) {
        res.render('error');
        console.log(`An error occurred ${e}`);
    }
});

router.get('/celebrities/new', async (req, res) => {
    try {
        const allMovies = await Movie.find();
        res.render('celebrities-new', {
            allMovies
        });
    } catch (e) {
        res.render('error');
        console.log(`An error occurred ${e}`);
    }
});

router.post('/celebrities/new', async (req, res) => {
    try {
        const {
            name,
            occupation,
            catchPhrase,
            favMovie
        } = req.body;
        await Celebrity.create({
            name,
            occupation,
            catchPhrase,
            favMovie
        });
        res.redirect('/celebrities');
    } catch (e) {
        res.render('error');
        console.log(`An error occurred ${e}`);
    }
});


router.get('/celebrities/:celebrityId', async (req, res) => {
    try {
        const celebrity = await Celebrity.findById(req.params.celebrityId).populate('favMovie');
        console.log(celebrity);
        console.log(celebrity.favMovie.title);
        res.render('celebrity-show', {
            celebrity
        });
    } catch (e) {
        res.render('error');
        console.log(`An error occurred ${e}`);
    }
});

router.get('/celebrities/:celebrityID/edit', async (req, res, next) => {

    try {
        const allMovies = await Movie.find();
        const celebrity = await Celebrity.findById(req.params.celebrityID).populate('favMovie');
        res.render('celebrity-edit', {
            celebrity,
            allMovies
        });
    } catch (e) {
        res.render('error');
        console.log(`An error occurred ${e}`);
    }
});

router.post('/celebrities/:celebrityID/edit', async (req, res, next) => {

    try {
        const celebrityID = req.params.celebrityID;
        const {
            name,
            occupation,
            catchPhrase,
            favMovie
        } = req.body;
        await Celebrity.findByIdAndUpdate(celebrityID, {
            name,
            occupation,
            catchPhrase,
            favMovie
        });
        res.redirect(`/celebrities/${celebrityID}`);
    } catch (e) {
        res.render('error');
        console.log(`An error occurred ${e}`);
    }
});

router.post('/celebrities/:celebrityId/delete', async (req, res) => {
    try {
        await Celebrity.findByIdAndDelete(req.params.celebrityId);
        res.redirect('/celebrities');
    } catch (e) {
        res.render('error');
        console.log(`An error occurred ${e}`);
    }
});


module.exports = router;