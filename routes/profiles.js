import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:id', profilesCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.patch('/:profileId/instruments/:instrumentId', profilesCtrl.addInstruments)
router.patch('/:profileId/genres/:genreId', profilesCtrl.addGenres)
router.delete('/:id/instruments/:instrumentId', profilesCtrl.deleteInstrument)
router.delete('/:profileId/genres/:genreId', profilesCtrl.deleteGenre)

export { router }
