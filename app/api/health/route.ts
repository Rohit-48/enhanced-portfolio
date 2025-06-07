import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Basic health check
    const healthCheck = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      message: 'Portfolio service is running',
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
    }

    return NextResponse.json(healthCheck, { status: 200 })
  } catch (error) {
    const errorResponse = {
      status: 'error',
      timestamp: new Date().toISOString(),
      message: 'Portfolio service is unhealthy',
      error: error instanceof Error ? error.message : 'Unknown error',
    }

    return NextResponse.json(errorResponse, { status: 503 })
  }
}

export async function HEAD() {
  return new Response(null, { status: 200 })
} 