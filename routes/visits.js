import { Router } from 'express'
import * as visitsCtrl from "../controllers/visits.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/tacos
router.get('/', visitsCtrl.index)
// GET - localhost:3000/tacos/:id
router.get("/:id", visitsCtrl.show)
// GET - localhost:3000/tacos/:id/edit
router.get("/:id/edit", isLoggedIn, visitsCtrl.edit)

// POST - localhost:3000/tacos
router.post('/', isLoggedIn, visitsCtrl.create)

// PUT - localhost:300/taco/:id
router.put("/:id", isLoggedIn, visitsCtrl.update)

// PATCH - localhost:3000/tacos/:id/flip-tasty
router.patch("/:id/flip-tasty", isLoggedIn, visitsCtrl.flipTasty)

// DELETE - localhost:3000/tacos/:id
router.delete("/:id", isLoggedIn, visitsCtrl.delete)

export {
  router
}
