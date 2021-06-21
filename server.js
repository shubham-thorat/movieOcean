import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import movies from './routes/movies.js'
import { initDB } from './models/initDB.js'
dotenv.config()

const app = express()
app.use(express.json({ limit: "50mb", extended: "true" }))
app.use(express.urlencoded({ limit: "50mb", extended: "true" }))

app.use('/movies', movies);


const port = process.env.PORT || 8080;

const __dirname = path.dirname(new URL(import.meta.url).pathname);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

async function run() {
    await initDB();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}

run();