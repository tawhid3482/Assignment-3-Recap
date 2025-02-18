import { Types } from 'mongoose'
import { TBooking } from './booking.interface'
import { Booking } from './booking.model'
import { Car } from '../Car/car.model'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'
import { User } from '../user/user.model'

type TBooks = {
  carId: string
  date: string
  startTime: string
}

const createBookingIntoDb = async (
  payload: TBooks,
  userId: Types.ObjectId,
): Promise<TBooking> => {
  const { carId } = payload

  // Check if the car ID exists
  const car = await Car.findById(carId)

  if (!car) {
    throw new AppError(httpStatus.NOT_FOUND, 'Car not found!')
  }

  if (car.status === 'unavailable') {
    throw new AppError(httpStatus.NOT_FOUND, 'Car is already book!')
  }
  if (car.isDeleted === true) {
    throw new AppError(httpStatus.NOT_FOUND, 'Car is already deleted!')
  }

  // Check if the car ID exists
  const user = await User.findById(userId)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
  }

  // Update car status to 'unavailable'
  car.status = 'unavailable'
  await car.save()

  // Create the booking
  const result = await Booking.create({
    date: payload.date,
    user: userId,
    car: carId,
    startTime: payload.startTime,
    endTime: null,
    totalCost: 0,
  })

  // Populate the car and user fields
  return (await result.populate('car')).populate({
    path: 'user',
    select: '-password',
  })
}


export const BookingServices = {
  createBookingIntoDb,
}
