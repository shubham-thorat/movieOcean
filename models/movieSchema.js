import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    average: {
        type: String,
        required: true
    },
    download_link: {
        type: String
    }
})

const movieModel = mongoose.model('movies', movieSchema);

export default movieModel