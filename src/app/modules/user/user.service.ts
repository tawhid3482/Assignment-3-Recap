import { TUser } from './user.interface'
import { User } from './user.model'

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.create(payload)
  return await User.findById(user._id).select('-password'); // Exclude password
}


export const userServices = {
    createUserIntoDB,
}