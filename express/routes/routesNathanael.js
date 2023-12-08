import { Router } from 'express'

const nathanael = Router()

nathanael.get('/nathanael', async (_, res) => {
    res.send('Bienvenue Nathanael')
})

export default nathanael