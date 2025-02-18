import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { BookingServices } from './booking.service'

const createBooking = catchAsync((req, res) => {
  const userId = req.user._id;
  const result = BookingServices.createBookingIntoDb(req.body,userId)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Car booked successfully',
    data: result,
  })
})

export const bookingControllers = {
  createBooking,
}
