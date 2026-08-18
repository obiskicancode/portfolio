import { NextRequest } from 'next/server'
import { AppError } from '../errors/app.error'

interface RateLimitRecord {
  count: number
  firstRequest: number
}

const LIMIT = 10
const INTERVAL = 60 * 1000 // 1 minute
const requests = new Map<string, RateLimitRecord>()

// Periodically clean up stale records to prevent memory leak
function cleanupStaleRecords(now: number) {
  if (requests.size > 1000) {
    for (const [key, record] of requests.entries()) {
      if (now - record.firstRequest > INTERVAL) {
        requests.delete(key)
      }
    }
  }
}

export const rate_limit = (request: NextRequest) => {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || '127.0.0.1'
  const now = Date.now()

  cleanupStaleRecords(now)

  const data = requests.get(ip)

  if (!data || now - data.firstRequest > INTERVAL) {
    requests.set(ip, { count: 1, firstRequest: now })
    return
  }

  data.count += 1

  if (data.count > LIMIT) {
    throw new AppError('Too many requests, please try again later.', 429)
  }

  requests.set(ip, data)
}
