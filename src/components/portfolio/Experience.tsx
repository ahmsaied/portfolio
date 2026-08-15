import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const timeline = [
  {
    role: "Telecommunications Engineer",
    company: "WE (Telecom Egypt)",
    period: "2022 – PRESENT",
    description:
      "Overseeing telecommunication infrastructure operations, leading technical engineering teams, and optimizing BSS/OSS enterprise workflows across large-scale telecom environments in Egypt.",
    highlights: [
      "Enterprise network infrastructure management",
      "Cross-functional team leadership & project direction",
      "BSS/OSS workflow automation & telemetry enhancement",
    ],
  },
  {
    role: "Flutter Developer (Part Time)",
    company: "Stormra Ltd",
    period: "2020 – 2022",
    description:
      "Architected and delivered the 'Habibi App' — a full-featured social platform featuring real-time socket chat, Google Maps location tracking, media streaming, and push notifications.",
    highlights: [
      "Built with Flutter & BLoC Clean Architecture",
      "Google Maps API & real-time messaging pipeline",
      "Firebase cloud services & app store deployment",
    ],
  },
  {
    role: "Network Planning Engineer",
    company: "Orange Egypt (Mobinil)",
    period: "2015 – 2022",
    description:
      "Radio network implementation, KPI telemetry analysis, capacity planning, and coverage quality optimization across GSM & 3G cellular infrastructure.",
    highlights: [
      "Cellular network coverage enhancement & KPI optimization",
      "Technical operational diagnostics & capacity forecasting",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
            // 05. CAREER TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-blue-cyan">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-0">
          {/* Vertical Glowing Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent -translate-x-1/2 opacity-40" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.company + item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Center Node Circle */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 -translate-x-1.2 z-20 shadow-[0_0_15px_#06b6d4] border-2 border-[#0a0d14] mt-6">
                <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
              </div>

              {/* Card Container */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <SpotlightCard className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800/50 flex items-center gap-1.5">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                    <Briefcase size={18} className="text-cyan-400" />
                    {item.role}
                  </h3>

                  <div className="text-sm font-semibold text-blue-400 mb-4 flex items-center gap-1.5">
                    <Building2 size={14} />
                    {item.company}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {item.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
