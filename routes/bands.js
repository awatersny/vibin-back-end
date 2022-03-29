import { Router } from 'express'
import * as bandsCtrl from '../controllers/bands.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
// router.get('/', bandsCtrl.index)
// router.post('/', bandsCtrl.create)
// router.put('/:id', bandsCtrl.update)
// router.delete('/:id', bandsCtrl.delete)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, bandsCtrl.index)
router.post('/', checkAuth, bandsCtrl.create)
router.put('/:id', checkAuth, bandsCtrl.update)
router.delete('/:id', checkAuth, bandsCtrl.delete)

export { router }