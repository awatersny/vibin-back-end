import { Router } from 'express'
import * as instrumentsCtrl from '../controllers/instruments.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }