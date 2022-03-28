import { Router } from 'express'
import * as instrumentsCtrl from '../controllers/instruments.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/', instrumentsCtrl.create)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, instrumentsCtrl.index)


export { router }