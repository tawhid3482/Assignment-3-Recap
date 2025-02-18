import express from 'express';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import validationRequest from '../../middleware/validationRequest';
import { userValidation } from '../user/user.validation';
import { userControllers } from '../user/user.controller';


const router = express.Router();

router.post(
  '/signup',
  validationRequest(userValidation.userValidationSchema),
  userControllers.createUser,
);

router.post(
  '/signin',
  validationRequest(AuthValidation.SignInValidationSchema),
  AuthControllers.signInUser,
);

export const AuthRoutes = router;