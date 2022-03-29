import { Router } from 'express'
import * as instrumentsCtrl from '../controllers/instruments.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, instrumentsCtrl.index)
router.post('/', checkAuth, instrumentsCtrl.create)


export { router }