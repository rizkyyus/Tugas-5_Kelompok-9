import { CorsConfig } from '@adonisjs/cors/types'
import env from '../start/env.js'

/**
 * Configuration options to tweak the CORS policy. The following
 * options are documented on the official documentation website.
 *
 * https://docs.adonisjs.com/guides/security/cors
 */
const corsConfig: CorsConfig = {
  enabled: true,
  origin: true, // Allow all origins in development
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: true,
  exposeHeaders: ['cache-control', 'content-language', 'content-type', 'expires', 'last-modified', 'pragma'],
  credentials: true,
  maxAge: 90,
}

export default corsConfig
