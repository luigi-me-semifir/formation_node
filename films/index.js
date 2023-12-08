import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/data.js'
import routes from './routes/routes.js'

dotenv.config()

connectDB();

const app = express()
const port = process.env.PORT;

app.use(routes)

app.listen(port, () => {
    console.log(`Port: ${port}`);
})