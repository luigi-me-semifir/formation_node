import express from 'express'
import { delFilm, getFilmId, getFilms, majFilm, newFilm, newFilmBis, newFilmJoi, patchFilm } from '../controllers/filmControllers.js'

const router = express.Router()

router.get('/', (_, res) => {
  res.send("Accueil")
})

router.post('/films', newFilmJoi)
router.get('/films', getFilms)
router.put('/films/:id', majFilm)
router.delete('/films/:id', delFilm)
router.get('/films/:id', getFilmId)
router.patch('/films/:id', patchFilm)

export default router