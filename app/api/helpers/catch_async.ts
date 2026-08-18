import { NextRequest, NextResponse } from 'next/server'
import { AppError } from '../errors/app.error'
import { error_handler } from './error_handler'
import { rate_limit } from './rate_limit'

export const catch_async = (
  fn: (request: NextRequest) => Promise<NextResponse>,
) => {
  return async (request: NextRequest) => {
    try {
      rate_limit(request)

      return await fn(request)
    } catch (error) {
      return error_handler(error as AppError)
    }
  }
}
