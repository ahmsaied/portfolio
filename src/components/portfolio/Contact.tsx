import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, MessageSquare, Sparkles } from "lucide-react";
import { SiStackoverflow, SiMedium } from "@icons-pack/react-simple-icons";
import { SpotlightCard } from "./SpotlightCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "eng.ahm.saied@gmail.com",
    href: "mailto:eng.ahm.saied@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+20 100 265 2078",
    href: "https://wa.me/201002652078",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ahmsaied",
    href: "https://github.com/ahmsaied",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmsaied",
    href: "https://www.linkedin.com/in/ahmsaied/",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
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
            // 07. GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="gradient-text-blue-cyan">Intelligent</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <SpotlightCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare size={22} className="text-cyan-400" />
                Direct Communication
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Have an AI project, Flutter mobile app, or enterprise backend solution in mind? Reach out directly via email or messaging!
              </p>

              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-xl border border-white/10 bg-[#0a0d14]/70 hover:bg-cyan-950/30 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <method.icon size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-mono text-slate-400">{method.label}</p>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles size={20} className="text-cyan-400" />
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <Input
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <Input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <Input
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <Textarea
                    rows={4}
                    placeholder="Tell me about your project or technical goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#0a0d14]/80 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold py-6 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all border border-cyan-400/40"
                >
                  {loading ? (
                    <span className="font-mono text-sm">Sending...</span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
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
