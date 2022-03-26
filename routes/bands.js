import { Router } from 'express'
import * as bandsCtrl from '../controllers/bands.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, bandsCtrl.index)
router.post('/', checkAuth, bandsCtrl.create)

export { router }