const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');
const DB_NAME = 'celebrity-lab';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const movies = [{
        title: 'Million Dollar Baby',
        genre: 'drama',
        plot: 'Boxe'
    },
    {
        title: 'Lord of the rings',
        genre: 'fantasy',
        plot: 'Rings'
    },
    {
        title: 'La bella vita',
        genre: 'comedy',
        plot: 'Vita_bella!'
    }
];

Movie.create(movies)
    .then(newMovies => {
        console.log('Created' + newMovies.length + ' movies');
        mongoose.connection.close();
    }).catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

// const celebrities = [{
//         name: 'Brad Pitt',
//         occupation: 'Actor',
//         catchPhrase: 'Non ne ho idea'
//     },
//     {
//         name: 'Lebron James',
//         occupation: 'Basketball player',
//         catchPhrase: 'Non lo so'
//     },
//     {
//         name: 'Queen Elizabeth',
//         occupation: 'Queen',
//         catchPhrase: 'blablablabla'
//     }
// ];

// Celebrity.create(celebrities)
//     .then(newCelebrities => {
//         console.log('Created' + newCelebrities.length + ' celebrities');
//         mongoose.connection.close();
//     }).catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

//node bin/seeds.js