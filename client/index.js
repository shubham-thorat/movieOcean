import express from 'express'
import dotenv from 'dotenv'
const app = express();

dotenv.config();
app.get('/', (req, res) => {
    res.send("Hello backend");
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})