import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { CarRoutes } from '../modules/Car/car.route'
import { BookingRoutes } from '../modules/Booking/booking.route'
import { AuthRoutes } from '../modules/Auth/auth.route'

const router = Router()

const modulesRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/',
    route: CarRoutes,
  },
  {
    path: '/',
    route: BookingRoutes,
  },
  {
    path: '/',
    route: AuthRoutes,
  },
]

modulesRoutes.forEach((route) => router.use(route.path, route.route))

export default router
