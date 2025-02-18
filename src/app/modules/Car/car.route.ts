import express from 'express'
import validationRequest from '../../middleware/validationRequest'
import { CarValidation } from './car.validation'
import { carController } from './car.controller'

const router = express.Router()

router.post(
  '/cars',
  validationRequest(CarValidation.createCarValidation),
  carController.createCar,
)
router.put('/cars/:id', carController.updateCar)
router.get('/cars/:id', carController.gelSingleCar)
router.delete('/cars/:id', carController.deleteCar)
router.get('/cars', carController.gelAllCar)

export const CarRoutes = router
