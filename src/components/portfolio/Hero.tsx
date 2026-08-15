import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Bot,
  Smartphone,
  Server,
  ArrowRight,
  Radio,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiStackoverflow, SiMedium } from "@icons-pack/react-simple-icons";
import { TiltCard } from "./TiltCard";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  { icon: Github, href: "https://github.com/ahmsaied", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ahmsaied/",
    label: "LinkedIn",
  },
  {
    icon: SiStackoverflow,
    href: "https://stackoverflow.com/users/9513914/ahmed-saied",
    label: "StackOverflow",
  },
  {
    icon: SiMedium,
    href: "https://medium.com/@ahm.saied",
    label: "Medium",
  },
  { icon: Mail, href: "mailto:eng.ahm.saied@gmail.com", label: "Email" },
];

export const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Soft Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Human Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 mb-6 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-cyan-400" />
                {language === "ar" ? "القاهرة، مصر • متاح للمشاريع والحلول التقنية" : "Cairo, Egypt • Available for AI & Full-Stack Solutions"}
              </span>
            </div>

            {/* Name Header */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              {language === "ar" ? "أحمد خضر" : "Ahmed Khedr"}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-6 leading-snug">
              <span className="gradient-text-blue-cyan">
                {language === "ar"
                  ? "مهندس ذكاء اصطناعي وبرمجيات متكاملة"
                  : "AI & Full-Stack Engineer"}
              </span>
            </h2>

            {/* Natural Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              {language === "ar"
                ? "متخصص في بناء شبكات الذكاء الاصطناعي الوكيلة (Agentic AI)، وسلاسل استرجاع المعرفة (RAG)، وتطبيقات الموبايل المتقدمة باستخدام Flutter، والخدمات السحابية الدقيقة بـ .NET Core. مسنود بخبرة هندسية تزيد عن 14 عاماً في تشغيل البنية التحتية للاتصالات."
                : "Building autonomous AI Agent networks, RAG knowledge retrieval pipelines, production Flutter mobile applications, and high-concurrency .NET microservices. Backed by 14+ years of telecommunications operations engineering."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all border border-cyan-400/30 px-7"
              >
                <a href="#projects" className="flex items-center gap-2">
                  {language === "ar" ? "استكشف المشاريع" : "Explore Featured Projects"}
                  <ArrowRight size={18} />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border border-white/15 bg-[#0d111a]/80 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 backdrop-blur-md transition-all px-7"
              >
                <a
                  href="/assets/Ahmed Khedr - Software Developer Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <FileText size={18} className="text-cyan-400" />
                  {language === "ar" ? "تحميل السيرة الذاتية" : "Download Resume"}
                </a>
              </Button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-2xl border border-white/10 bg-[#0c1018]/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-950/20 transition-all duration-300"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Sleek 3D Tilt Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <TiltCard className="w-full max-w-md relative overflow-hidden bento-card">
              <div className="relative flex flex-col items-center text-center z-10">
                {/* Clean Profile Photo Container */}
                <div className="relative mb-6">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-cyan-400/40 bg-[#080a0f] shadow-2xl">
                    <img
                      src="/assets/profile.png"
                      alt="Ahmed Khedr"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Profile Details */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  Ahmed Khedr
                </h3>
                <p className="text-sm font-mono text-cyan-400 mb-4">
                  eng.ahm.saied@gmail.com
                </p>

                {/* Parallax Floating Tech Chips */}
                <div
                  className="grid grid-cols-2 gap-2.5 w-full pt-4 border-t border-white/10"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#080a0f]/90 text-left">
                    <Bot className="text-cyan-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Core Focus</p>
                      <p className="text-xs font-semibold text-white">Agentic AI & RAG</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#080a0f]/90 text-left">
                    <Smartphone className="text-blue-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Mobile</p>
                      <p className="text-xs font-semibold text-white">Flutter BLoC</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#080a0f]/90 text-left">
                    <Server className="text-teal-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Backend</p>
                      <p className="text-xs font-semibold text-white">.NET Microservices</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#080a0f]/90 text-left">
                    <Radio className="text-indigo-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Experience</p>
                      <p className="text-xs font-semibold text-white">14+ Yrs Telecom</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
