import { Router } from 'express'
import * as genresCtrl from '../controllers/genres.js'
import { decodeUserFromToken, checkAuth,} from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, genresCtrl.index)
router.post('/', checkAuth, genresCtrl.create)

export { router }