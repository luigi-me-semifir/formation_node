import { Router } from "express";
import { errorStatus, verifId } from "../middleware/middleware.js";

const dyn = Router()

dyn.get('/dyn/:id', verifId, errorStatus)

export default dyn