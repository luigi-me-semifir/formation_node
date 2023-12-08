import express from 'express'
import dotenv from 'dotenv'
import xavier from './routes/routeXavier.js';
import fatima from './routes/routeFatima.js';
import nathanael from './routes/routesNathanael.js';
import { all } from './middleware/middleware.js';

dotenv.config()
const port = process.env.PORT;

const app = express()

app.use(express.json())
app.use(all)
app.use(xavier)
app.use(nathanael)
app.use(fatima)


app.listen(port, () => {
    console.log(`Bienvenue sur le port: ${port}`);
})








