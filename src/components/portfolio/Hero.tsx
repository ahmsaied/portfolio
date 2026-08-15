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
  Sparkles,
  Brain,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiStackoverflow, SiMedium, SiPython, SiFlutter, SiDotnet, SiDocker } from "@icons-pack/react-simple-icons";
import { TiltCard } from "./TiltCard";
import { TypewriterText } from "./TypewriterText";
import { BorderBeam } from "./BorderBeam";

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

const typewriterPhrases = [
  "AI Engineer — Generative & Agentic AI",
  "Flutter & .NET Full-Stack Developer",
  "Telecom Infrastructure Specialist",
  "LLM Agent & RAG Pipeline Developer",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Monospace Badge Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-6 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              AVAILABLE FOR AI & FULL-STACK PROJECTS
            </div>

            {/* Name Header */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Ahmed <span className="gradient-text-blue-cyan">Khedr</span>
            </h1>

            {/* Dynamic Typewriter Title Subheading */}
            <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-6 h-12 flex items-center justify-center lg:justify-start">
              <TypewriterText
                phrases={typewriterPhrases}
                className="gradient-text-blue-cyan"
              />
            </div>

            {/* Short Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              Architecting autonomous AI Agent networks, RAG vector retrieval pipelines, & enterprise systems. Experienced Flutter & .NET Full-Stack Developer backed by 14+ years of telecom operations engineering.
            </p>

            {/* Glow CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-semibold shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.55)] hover:scale-[1.02] transition-all border border-cyan-300/40 px-7"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Featured Projects
                  <ArrowRight size={18} />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border border-white/20 bg-[#0d111a]/80 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 backdrop-blur-md transition-all px-7"
              >
                <a
                  href="/assets/Ahmed Khedr - Software Developer Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <FileText size={18} className="text-cyan-400" />
                  Download Resume
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
                  className="p-3 rounded-2xl border border-white/10 bg-[#0d111a]/70 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Tilt Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <TiltCard className="w-full max-w-md relative overflow-hidden">
              <BorderBeam size={220} duration={9} colorFrom="#06b6d4" colorTo="#3b82f6" />
              
              <div className="relative flex flex-col items-center text-center z-10">
                {/* Glowing Avatar Container with Orbiting Ring */}
                <div className="relative mb-6">
                  {/* Orbiting ring background */}
                  <div className="absolute -inset-4 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4] absolute -top-1.5" />
                    <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] absolute -bottom-1.5" />
                  </div>

                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 blur-md opacity-75 animate-pulse-glow" />
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-cyan-400/50 bg-[#0a0d14]">
                    <img
                      src="/assets/profile.png"
                      alt="Ahmed Khedr"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Name & Title Card Details */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  Ahmed Khedr
                </h3>
                <p className="text-sm font-mono text-cyan-400 mb-4">
                  eng.ahm.saied@gmail.com
                </p>

                {/* Parallax Floating Tech Depth Badges */}
                <div
                  className="grid grid-cols-2 gap-2.5 w-full pt-4 border-t border-white/10"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#0a0d14]/80 text-left">
                    <Bot className="text-cyan-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Pillar 01</p>
                      <p className="text-xs font-semibold text-white">Agentic AI & RAG</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#0a0d14]/80 text-left">
                    <Smartphone className="text-blue-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Pillar 02</p>
                      <p className="text-xs font-semibold text-white">Flutter Cross-Platform</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#0a0d14]/80 text-left">
                    <Server className="text-teal-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Pillar 03</p>
                      <p className="text-xs font-semibold text-white">.NET Microservices</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10 bg-[#0a0d14]/80 text-left">
                    <Radio className="text-indigo-400 shrink-0" size={18} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Pillar 04</p>
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
