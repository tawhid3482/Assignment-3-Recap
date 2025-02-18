import { model, Schema } from 'mongoose'
import { TBooking } from './booking.interface'

const bookingSchema = new Schema<TBooking>(
  {
    date: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: false, ref: 'User' },
    car: { type: Schema.Types.ObjectId, required: true, ref: 'Car' },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    totalCost: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
)

export const Booking = model<TBooking>('booking', bookingSchema)
