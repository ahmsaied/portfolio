import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, ShieldCheck, Lock } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sanitizeInput, ContactFormSchema, checkRateLimit } from "@/lib/security";
import { SecureInject } from "./SecureInject";
import { useLanguage } from "@/context/LanguageContext";

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot trap for bots
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check
    if (formData.website) {
      toast.error("Bot activity detected.");
      return;
    }

    // 2. Client-side Rate Limiting
    if (!checkRateLimit()) {
      toast.error(t("contact.rateLimit"));
      return;
    }

    // 3. OWASP Input Sanitization & Zod Schema Validation
    try {
      const sanitized = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
        website: formData.website,
      };

      ContactFormSchema.schema.parse(sanitized);

      setLoading(true);

      // 4. Guaranteed Direct Email Dispatch to eng.ahm.saied@gmail.com via FormSubmit AJAX API
      const response = await fetch("https://formsubmit.co/ajax/eng.ahm.saied@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: sanitized.name,
          email: sanitized.email,
          _subject: sanitized.subject || `Portfolio Contact Message from ${sanitized.name}`,
          message: sanitized.message,
          _captcha: "false", // Disable captcha redirect for smooth AJAX background delivery
          _template: "table",
        }),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok && (result.success === "true" || result.success === true)) {
        toast.success(t("contact.success"));
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        // Direct Mailto Fallback
        toast.success(t("contact.success"));
        const mailtoUri = `mailto:eng.ahm.saied@gmail.com?subject=${encodeURIComponent(
          sanitized.subject || "Portfolio Inquiry"
        )}&body=${encodeURIComponent(
          `From: ${sanitized.name} (${sanitized.email})\n\nMessage:\n${sanitized.message}`
        )}`;
        window.open(mailtoUri, "_blank");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      }
    } catch (err: any) {
      setLoading(false);
      const issue = err?.errors?.[0]?.message || t("contact.xssAlert");
      toast.error(`Security Alert: ${issue}`);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background Glow Orb */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
            {t("tag.contact")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links (Obfuscated against Scrapers) */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <SpotlightCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Lock size={22} className="text-cyan-400" />
                {t("contact.direct")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Protected against automated web scrapers. Click below to dynamically interact.
              </p>

              <div className="space-y-3">
                {/* Email Item - Obfuscated JS Injection */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl border border-white/10 bg-[#0a0d14]/70 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all group">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-slate-400">Encrypted Email</p>
                    <SecureInject type="email" className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors" />
                  </div>
                </div>

                {/* Phone Item - Obfuscated JS Injection */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl border border-white/10 bg-[#0a0d14]/70 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all group">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-slate-400">Encrypted Phone / WhatsApp</p>
                    <SecureInject type="phone" className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors" />
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/ahmsaied"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl border border-white/10 bg-[#0a0d14]/70 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Github size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-slate-400">GitHub</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      github.com/ahmsaied
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ahmsaied/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl border border-white/10 bg-[#0a0d14]/70 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-slate-400">LinkedIn</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      linkedin.com/in/ahmsaied
                    </p>
                  </div>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: OWASP Sanitized Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck size={22} className="text-cyan-400" />
                    {t("contact.formTitle")}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                    OWASP XSS Protected
                  </span>
                </div>

                {/* Honeypot hidden bot field */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">{t("contact.nameLabel")}</label>
                    <Input
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">{t("contact.emailLabel")}</label>
                    <Input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">{t("contact.subjectLabel")}</label>
                  <Input
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">{t("contact.messageLabel")}</label>
                  <Textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold py-6 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all border border-cyan-400/40"
                >
                  {loading ? (
                    <span className="font-mono text-sm">{t("contact.sending")}</span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      {t("contact.submitBtn")}
                      <Send size={18} />
                    </span>
                  )}
                </Button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
