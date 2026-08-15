import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const stats = [
  {
    icon: Cpu,
    value: "14+",
    label: "Years Engineering",
    description: "Telecom operations & software infrastructure development.",
  },
  {
    icon: Sparkles,
    value: "AI & RAG",
    label: "Agentic Systems",
    description: "LangChain orchestration & autonomous vector retrieval pipelines.",
  },
  {
    icon: Layers,
    value: "Full-Stack",
    label: "Flutter & .NET",
    description: "Clean BLoC mobile apps & high-concurrency microservices.",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "System Reliability",
    description: "Focus on maintainability, testing, & enterprise scale.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
            // 01. ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="gradient-text-blue-cyan">Intelligence</span> & Scale
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Narrative Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <SpotlightCard className="p-8 md:p-10">
            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">
                  Over the past decade,{" "}
                </strong>
                my journey into software engineering grew naturally from my work in telecom operations at leading providers like <span className="text-cyan-400 font-medium">WE (Telecom Egypt)</span> and <span className="text-blue-400 font-medium">Orange Egypt</span>. Driven by a desire to automate operations, construct internal telemetry tooling, and optimize network reliability, what began as curiosity quickly matured into a full career passion for software architecture.
              </p>

              <p>
                As my engineering scope expanded, I shifted my core focus to{" "}
                <span className="gradient-text-blue-cyan font-bold">
                  Artificial Intelligence
                </span>{" "}
                and its power to redefine autonomous system behavior and decision-making workflows.
              </p>

              <p>
                Today, I specialize in{" "}
                <strong className="text-cyan-300 font-semibold">
                  Generative AI & Agentic Systems
                </strong>{" "}
                — designing multi-agent frameworks, RAG knowledge bases, and LLM orchestration applications with Python & LangChain — while building production mobile applications with <strong className="text-white">Flutter</strong> and high-performance backend infrastructure with <strong className="text-white">.NET Core</strong>.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Stat Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 inline-block mb-4">
                    <item.icon size={24} />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1 font-mono tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-cyan-300 mb-2">
                    {item.label}
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  {item.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
