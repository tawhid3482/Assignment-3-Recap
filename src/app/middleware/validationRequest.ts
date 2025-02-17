import { AnyZodObject } from 'zod'
import catchAsync from '../utils/catchAsync'
import { NextFunction, Request, Response } from 'express'

const validationRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // validation check
    await schema.parseAsync({
      body: req.body,
    })
    next()
  })
}

export default validationRequest
