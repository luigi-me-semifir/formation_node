import { Router } from "express";
import { compteurFin } from "../middleware/middleware.js";

const fini = Router()

fini.get('/fin', compteurFin, (req, res) => {
    res.send('Au revoir')
})

export default fini