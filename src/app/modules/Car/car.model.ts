import { model, Schema } from 'mongoose'
import { TCar } from './car.interface'

const carSchema = new Schema<TCar>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    isElectric: { type: Boolean, required: true },
    status: {
      type: String,
      enum: {
        values: ['available', 'unavailable'],
        message: '{VALUE} is not correct !',
      },
      default: 'available',
    },
    features: { type: [String], required: true },
    pricePerHour: { type: Number, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
)

export const Car = model<TCar>('car', carSchema)
