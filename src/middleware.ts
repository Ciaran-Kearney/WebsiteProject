import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Add security headers
  const headers = response.headers;

  // Content Security Policy
  headers.set('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.youtube.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self';
    connect-src 'self';
    media-src 'self';
    frame-src 'self' *.youtube.com;
    object-src 'none';
  `.replace(/\s+/g, ' ').trim());

  // Permissions Policy (without the unsupported ch-ua-form-factors)
  headers.set('Permissions-Policy', `
    geolocation=(),
    microphone=(),
    camera=(),
    payment=(),
    usb=(),
    accelerometer=(),
    gyroscope=()
  `.replace(/\s+/g, ' ').trim());

  // Other security headers
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  return response;
}); 