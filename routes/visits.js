import { Router } from 'express'
import * as tacosCtrl from "../controllers/visits.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/tacos
router.get('/', tacosCtrl.index)
// GET - localhost:3000/tacos/:id
router.get("/:id", tacosCtrl.show)
// GET - localhost:3000/tacos/:id/edit
router.get("/:id/edit", isLoggedIn, tacosCtrl.edit)

// POST - localhost:3000/tacos
router.post('/', isLoggedIn, tacosCtrl.create)

// PUT - localhost:300/taco/:id
router.put("/:id", isLoggedIn, tacosCtrl.update)

// PATCH - localhost:3000/tacos/:id/flip-tasty
router.patch("/:id/flip-tasty", isLoggedIn, tacosCtrl.flipTasty)

// DELETE - localhost:3000/tacos/:id
router.delete("/:id", isLoggedIn, tacosCtrl.delete)

export {
  router
}
