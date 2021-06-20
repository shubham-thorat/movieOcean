import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
export const initDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection
        .once('open', () => {
            console.log('Connected to Database');
        })
        .on('error', err => {
            console.log('Mongo error : ', err);
        })
}