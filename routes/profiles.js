import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:id', profilesCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.patch('/:id/instruments', profilesCtrl.addInstruments)
router.patch('/:id/genres', profilesCtrl.addGenres)
router.delete('/:id/instruments/:id', profilesCtrl.deleteInstrument)
router.delete('/:id/genres/:id', profilesCtrl.deleteGenre)

export { router }
