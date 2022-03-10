import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

// GET - localhost:3000/profiles
router.get('/', isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

//added new route here
// POST - localhost:3000/profiles/:id/watches
router.post('/:id', isLoggedIn, profilesCtrl.addToMyVisitList)
//added new route here

export {
  router
}