import { Router } from 'express'

const router = Router()

const modulesRoutes = [
  {
    path: '/',
    route: ami,
  },
]

modulesRoutes.forEach((route) => router.use(route.path, route.route))

export default router
