import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controlers/userControler.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
