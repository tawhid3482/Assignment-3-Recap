import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'

const router = Router()

const modulesRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
]

modulesRoutes.forEach((route) => router.use(route.path, route.route))

export default router
