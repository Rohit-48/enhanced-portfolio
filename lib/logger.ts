type LogLevel = "debug" | "info" | "warn" | "error"

interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  data?: any
  stack?: string
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === "development"
  private isClient = typeof window !== "undefined"

  private formatMessage(level: LogLevel, message: string, data?: any): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      data,
      stack: level === "error" ? new Error().stack : undefined,
    }
  }

  private log(level: LogLevel, message: string, data?: any) {
    const entry = this.formatMessage(level, message, data)

    // Always log in development
    if (this.isDevelopment) {
      const consoleMethod = level === "debug" ? "log" : level
      console[consoleMethod](`[${level.toUpperCase()}] ${message}`, data || "")
    }

    // In production, only log warnings and errors
    if (!this.isDevelopment && (level === "warn" || level === "error")) {
      console[level](`[${level.toUpperCase()}] ${message}`, data || "")
    }

    // Send to external logging service in production
    if (!this.isDevelopment && this.isClient) {
      this.sendToExternalService(entry)
    }
  }

  private async sendToExternalService(entry: LogEntry) {
    try {
      // Example: Send to Sentry, LogRocket, or custom logging endpoint
      if (process.env.NEXT_PUBLIC_LOGGING_ENDPOINT) {
        await fetch(process.env.NEXT_PUBLIC_LOGGING_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entry),
        })
      }
    } catch (error) {
      // Silently fail to avoid infinite loops
      console.error("Failed to send log to external service:", error)
    }
  }

  debug(message: string, data?: any) {
    this.log("debug", message, data)
  }

  info(message: string, data?: any) {
    this.log("info", message, data)
  }

  warn(message: string, data?: any) {
    this.log("warn", message, data)
  }

  error(message: string, error?: Error | any) {
    const errorData = error instanceof Error ? { message: error.message, stack: error.stack, name: error.name } : error

    this.log("error", message, errorData)
  }

  // Performance logging
  time(label: string) {
    if (this.isDevelopment) {
      console.time(label)
    }
  }

  timeEnd(label: string) {
    if (this.isDevelopment) {
      console.timeEnd(label)
    }
  }

  // User action tracking
  track(event: string, properties?: Record<string, any>) {
    this.info(`User action: ${event}`, properties)

    // Send to analytics service
    if (this.isClient && window.gtag) {
      window.gtag("event", event, properties)
    }
  }
}

export const logger = new Logger()

// Error boundary helper
export function logError(error: Error, errorInfo?: any) {
  logger.error("React Error Boundary caught an error", {
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name,
    },
    errorInfo,
    url: typeof window !== "undefined" ? window.location.href : "SSR",
    userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "SSR",
  })
}

// API error helper
export function logApiError(endpoint: string, error: any, requestData?: any) {
  logger.error(`API Error: ${endpoint}`, {
    endpoint,
    error,
    requestData,
    timestamp: new Date().toISOString(),
  })
}

// Performance helper
export function logPerformance(metric: string, value: number, unit = "ms") {
  logger.info(`Performance: ${metric}`, {
    metric,
    value,
    unit,
    timestamp: new Date().toISOString(),
  })
}
