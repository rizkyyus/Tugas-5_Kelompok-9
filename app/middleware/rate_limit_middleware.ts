import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RateLimitMiddleware {
  private requests = new Map<string, { count: number; resetTime: number }>()
  private readonly WINDOW_MS = 15 * 60 * 1000 // 15 minutes
  private readonly MAX_REQUESTS = 100 // Maximum requests per window

  async handle({ request, response }: HttpContext, next: NextFn) {
    const ip = request.ip()
    const now = Date.now()
    const requestData = this.requests.get(ip)

    if (requestData) {
      if (now > requestData.resetTime) {
        // Reset window
        this.requests.set(ip, { count: 1, resetTime: now + this.WINDOW_MS })
      } else if (requestData.count >= this.MAX_REQUESTS) {
        // Rate limit exceeded
        return response.status(429).json({
          error: 'Too many requests',
          retryAfter: Math.ceil((requestData.resetTime - now) / 1000)
        })
      } else {
        // Increment request count
        requestData.count++
      }
    } else {
      // First request from this IP
      this.requests.set(ip, { count: 1, resetTime: now + this.WINDOW_MS })
    }

    // Clean up old entries
    for (const [key, value] of this.requests.entries()) {
      if (now > value.resetTime) {
        this.requests.delete(key)
      }
    }

    return next()
  }
} 