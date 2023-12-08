import express from "express";
import dotenv from 'dotenv'
import accueil from "./routes/routeAcceuile.js";
import fini from "./routes/routesFin.js";
import dyn from "./routes/routeDyn.js";
import { date, pathMethode, compteurFin } from "./middleware/middleware.js";

dotenv.config()
const app = express()
const port = process.env.PORT;

app.use(date, pathMethode)
app.use(accueil)
app.use(fini)
app.use(dyn)

app.listen(port, () => {
    console.log(`Bienvenue sur ${port}`);
})