import DOMPurify from "dompurify";
import { z } from "zod";

/**
 * OWASP Compliant Input Sanitizer
 * Strips dangerous HTML tags, inline scripts, event handlers, and javascript: URIs.
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return "";
  const clean = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // Strip ALL HTML tags completely for strict input fields
    ALLOWED_ATTR: [],
  });
  return clean.trim();
};

/**
 * Zod Form Validation Schema with OWASP Compliant Strict Rules
 */
export class ContactFormSchema {
  static schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(60, "Name cannot exceed 60 characters")
      .refine(
        (val) => !/<[^>]*>/g.test(val),
        "Script or HTML tags are strictly forbidden."
      ),
    email: z
      .string()
      .trim()
      .email("Please provide a valid email address")
      .max(100, "Email address is too long")
      .refine(
        (val) => !/(javascript|data|vbscript):/i.test(val),
        "Invalid protocol detected in email."
      ),
    subject: z
      .string()
      .trim()
      .max(100, "Subject cannot exceed 100 characters")
      .optional(),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters long")
      .max(2000, "Message cannot exceed 2000 characters")
      .refine(
        (val) => !/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(val),
        "Script injection detected and blocked."
      ),
    // Honeypot field for bot detection
    website: z.string().max(0, "Bot detected").optional(),
  });
}

/**
 * Client-side Rate Limiter for Form Submissions
 */
const submissionTimestamps: number[] = [];
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS = 3;

export const checkRateLimit = (): boolean => {
  const now = Date.now();
  // Filter out timestamps outside current window
  const validTimestamps = submissionTimestamps.filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (validTimestamps.length >= MAX_SUBMISSIONS) {
    return false; // Exceeded rate limit
  }
  validTimestamps.push(now);
  submissionTimestamps.length = 0;
  submissionTimestamps.push(...validTimestamps);
  return true;
};
