import { Router } from 'express'
import { girl } from '../middleware/middleware.js'

const fatima = Router()

fatima.get('/fatima', girl, async (_, res) => {
    res.send('Bienvenue Fatima')
})

export default fatima