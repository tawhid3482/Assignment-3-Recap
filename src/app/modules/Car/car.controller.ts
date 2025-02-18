import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { carService } from './car.service'
import httpStatus from 'http-status'

const createCar = catchAsync(async (req, res) => {
  const result = await carService.createCarIntoDb(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Car created successfully',
    data: result,
  })
})

const gelAllCar = catchAsync(async (req, res) => {
  const result = await carService.getAllCarFromDB()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Car created successfully',
    data: result,
  })
})

const gelSingleCar = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await carService.getSingleCarFromDB(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'A Car retrieved successfully',
    data: result,
  })
})

const updateCar = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await carService.updateCarIntoDB(id, req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Car updated successfully',
    data: result,
  })
})

const deleteCar = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await carService.deleteCarFromDB(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Car deleted successfully',
    data: result,
  })
})

export const carController = {
  createCar,
  gelAllCar,
  gelSingleCar,
  updateCar,
  deleteCar
}
