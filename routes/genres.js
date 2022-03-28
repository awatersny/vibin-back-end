import { Router } from 'express'
import * as genresCtrl from '../controllers/genres.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/', genresCtrl.create)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, genresCtrl.index)

export { router }