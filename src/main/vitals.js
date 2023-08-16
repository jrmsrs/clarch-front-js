/* eslint-disable @typescript-eslint/no-misused-promises */
const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals'

function getConnectionSpeed () {
  return String('connection' in navigator &&
    navigator.connection &&
    'effectiveType' in (navigator.connection)
    ? (navigator.connection).effectiveType
    : '')
}

async function sendToVercelAnalytics (metric) {
  const analyticsId = import.meta.env.VITE_VERCEL_ANALYTICS_ID
  if (!analyticsId) {
    return
  }

  const body = {
    dsn: analyticsId,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed()
  }

  const blob = new Blob([new URLSearchParams(body).toString()], {
    // This content type is necessary for `sendBeacon`
    type: 'application/x-www-form-urlencoded'
  })
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob)
  } else {
    await fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true
    })
  }
}

export async function reportWebVitals (onPerfEntry = sendToVercelAnalytics) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    await import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onFID(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}
