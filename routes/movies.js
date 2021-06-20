import express from 'express'
import movieModel from '../models/movieSchema.js'

const router = express.Router()

// METHOD GET
//desc get movies from backend
//visibility public

router.get('/', (req, res) => {
    movieModel.find((error, response) => {
        if (error) throw error;
        res.json(response);
    })
})


// METHOD POST
//desc Add movies to dataset
//visibility public
router.post('/', (req, res) => {
    let movies = req.body
    let mongoMovies = []
    movies.map(movie => {
        const model = new movieModel(movie)
        model.save();
        mongoMovies.push(model);
    })
    res.json(mongoMovies);
})

// METHOD POST
//desc update movies in dataset
//visibility public
router.post('/update', (req, res) => {
    res.json(null)
})


export default router
