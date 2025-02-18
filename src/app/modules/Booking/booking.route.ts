import express from 'express'
import { bookingControllers } from './booking.controller'
import validationRequest from '../../middleware/validationRequest'
import { bookingValidation } from './booking.validation'

const router = express.Router()

router.post('/bookings',validationRequest(bookingValidation.createBookingValidationSchema), bookingControllers.createBooking)

export const BookingRoutes = router
