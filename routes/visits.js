import { Router } from "express"
import * as visitsCtrl from '../controllers/visits.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// GET - localhost/3000/watches
router.get('/', visitsCtrl.index)
// GET - localhost/3000/watches/new
router.get('/new', isLoggedIn, visitsCtrl.new)
// GET - localhost/3000/watches/:id
router.get('/:id', visitsCtrl.show)
// GET - localhost/3000/watches/:id/edit
router.get('/:id/edit', isLoggedIn, visitsCtrl.edit)

// POST - localhost/3000/watches
router.post('/', isLoggedIn, visitsCtrl.create)

// DELETE - localhost/3000/watches/:id
router.delete('/:id', isLoggedIn, visitsCtrl.delete)

// PUT - localhost:3000/watches/:id
router.put('/:id', visitsCtrl.update)

export {
  router
}