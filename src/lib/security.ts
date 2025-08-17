// Input sanitization utilities
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove potential JavaScript URLs
    .replace(/data:/gi, '') // Remove data URLs
    .slice(0, 10000); // Limit length to prevent DoS
}

export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, 254); // RFC 5321 limit
}

export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }
    return parsed.toString();
  } catch {
    return '';
  }
}

// Rate limiting for client-side (basic implementation)
const submissionTimestamps = new Map<string, number[]>();

export function checkRateLimit(identifier: string, maxAttempts = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(identifier) || [];
  
  // Remove old timestamps outside the window
  const validTimestamps = timestamps.filter(timestamp => now - timestamp < windowMs);
  
  if (validTimestamps.length >= maxAttempts) {
    return false; // Rate limit exceeded
  }
  
  validTimestamps.push(now);
  submissionTimestamps.set(identifier, validTimestamps);
  return true;
}