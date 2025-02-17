import express from 'express'
import { userControllers } from './user.controller'
import validationRequest from '../../middleware/validationRequest'
import { userValidation } from './user.validation'

const router = express.Router()

router.post(
  '/signup',
  validationRequest(userValidation.userValidationSchema),
  userControllers.createUser,
)

export const UserRoutes = router
