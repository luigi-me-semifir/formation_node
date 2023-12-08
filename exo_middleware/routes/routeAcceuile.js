import { Router } from "express";
import { getAccueil } from "../service/accueil.service.js";

const accueil = Router()

accueil.get('/accueil', getAccueil)

export default accueil