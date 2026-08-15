import { describe, it, expect, beforeEach } from "vitest";
import { sanitizeInput, ContactFormSchema, checkRateLimit } from "../lib/security";

describe("OWASP Security & Input Sanitization Suite", () => {
  // 1. XSS & Injection Prevention
  describe("XSS Prevention (DOMPurify)", () => {
    it("should completely strip <script> tags and inner code", () => {
      const maliciousInput = "<script>alert('XSS Attack!')</script>Hello World";
      const clean = sanitizeInput(maliciousInput);
      expect(clean).not.toContain("<script>");
      expect(clean).not.toContain("alert");
      expect(clean).toBe("Hello World");
    });

    it("should strip inline event handlers like onerror, onload, and onclick", () => {
      const maliciousInput = "<img src='invalid.jpg' onerror='alert(1)' />Test Image";
      const clean = sanitizeInput(maliciousInput);
      expect(clean).not.toContain("onerror");
      expect(clean).not.toContain("alert");
      expect(clean).toBe("Test Image");
    });

    it("should strip javascript: URI schemes", () => {
      const maliciousInput = "<a href='javascript:alert(1)'>Click Me</a>";
      const clean = sanitizeInput(maliciousInput);
      expect(clean).not.toContain("javascript:");
      expect(clean).toBe("Click Me");
    });

    it("should block script injection via Zod schema refine", () => {
      const payload = {
        name: "John <script>alert(1)</script>",
        email: "john@example.com",
        subject: "Inquiry",
        message: "Hello, this is a legitimate message body length.",
      };

      const result = ContactFormSchema.schema.safeParse(payload);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Script or HTML tags are strictly forbidden");
      }
    });
  });

  // 2. Form Input Validation & Bounds Checking
  describe("Form Schema Bounds & Email Validation", () => {
    it("should validate a completely legitimate contact payload", () => {
      const validPayload = {
        name: "Ahmed Saied",
        email: "eng.ahm.saied@gmail.com",
        subject: "AI Project Collaboration",
        message: "Hello Ahmed, I am interested in collaborating on an Agentic AI solution.",
      };

      const result = ContactFormSchema.schema.safeParse(validPayload);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email formats", () => {
      const invalidEmails = ["invalid-email", "user@domain", "user@.com", "@domain.com"];

      invalidEmails.forEach((email) => {
        const payload = {
          name: "Valid Name",
          email,
          message: "Valid message content for testing.",
        };
        const result = ContactFormSchema.schema.safeParse(payload);
        expect(result.success).toBe(false);
      });
    });

    it("should reject names shorter than 2 characters", () => {
      const payload = {
        name: "A",
        email: "eng.ahm.saied@gmail.com",
        message: "Valid message content for testing.",
      };
      const result = ContactFormSchema.schema.safeParse(payload);
      expect(result.success).toBe(false);
    });

    it("should reject messages shorter than 10 characters", () => {
      const payload = {
        name: "Valid Name",
        email: "eng.ahm.saied@gmail.com",
        message: "Short",
      };
      const result = ContactFormSchema.schema.safeParse(payload);
      expect(result.success).toBe(false);
    });
  });

  // 3. Honeypot Bot Trap Security
  describe("Honeypot Bot Trap Detection", () => {
    it("should pass when honeypot website field is empty (Human user)", () => {
      const payload = {
        name: "Human User",
        email: "eng.ahm.saied@gmail.com",
        message: "Valid message body for human interaction.",
        website: "",
      };
      const result = ContactFormSchema.schema.safeParse(payload);
      expect(result.success).toBe(true);
    });

    it("should fail when honeypot website field is filled by bot", () => {
      const botPayload = {
        name: "Spam Bot",
        email: "bot@spam.com",
        message: "Buy cheap products now at spam.com",
        website: "http://spam-bot-trap.com",
      };
      const result = ContactFormSchema.schema.safeParse(botPayload);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Bot detected");
      }
    });
  });

  // 4. Rate Limiting Security
  describe("Rate Limiting Security", () => {
    it("should enforce rate limits after maximum allowed submissions", () => {
      // First 3 submissions should succeed
      expect(checkRateLimit()).toBe(true);
      expect(checkRateLimit()).toBe(true);
      expect(checkRateLimit()).toBe(true);

      // 4th submission should be blocked by rate limiter
      expect(checkRateLimit()).toBe(false);
    });
  });
});
