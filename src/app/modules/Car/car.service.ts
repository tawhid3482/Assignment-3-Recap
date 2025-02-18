import { TCar } from './car.interface'
import { Car } from './car.model'

const createCarIntoDb = async (payload: TCar) => {
  const result = await Car.create(payload)
  return result
}
const getAllCarFromDB = async () => {
  const result = await Car.find()
  return result
}

const getSingleCarFromDB = async (id: string) => {
  const result = await Car.findById(id)
  return result
}

const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
  const result = await Car.findByIdAndUpdate(id, payload, {
    new: true,
    nunValidators: true,
  })
  return result
}

const deleteCarFromDB = async (id: string) => {
  const result = await Car.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
  return result
}

export const carService = {
  createCarIntoDb,
  getAllCarFromDB,
  getSingleCarFromDB,
  updateCarIntoDB,
  deleteCarFromDB,
}
