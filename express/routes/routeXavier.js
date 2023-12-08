import { Router } from 'express'
import { man } from '../middleware/middleware.js'

const xavier = Router()

xavier.get('/xavier', man, async (_, res) => {
    res.send("Commençons la journée")

})

export default xavier