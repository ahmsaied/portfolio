import React from "react";
import { motion } from "framer-motion";
import { Bot, Smartphone, Server, Radio, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const services = [
  {
    icon: Bot,
    title: "Agentic AI & RAG Engineering",
    description:
      "Building autonomous multi-agent systems with tool orchestration, custom knowledge retrieval (RAG), and customized LLM prompts.",
    features: [
      "Autonomous Multi-Agent Networks",
      "LangChain & Vector DB Integration",
      "RAG Knowledge Base Pipelines",
      "Custom LLM Tool Execution",
    ],
    badge: "AI & Data",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Flutter Development",
    description:
      "Designing responsive, high-performance mobile applications with Clean Architecture, state management, and real-time backend integrations.",
    features: [
      "iOS & Android Single Codebase",
      "BLoC / Clean Architecture Pattern",
      "Real-Time Chat & Google Maps",
      "Push Notifications & Firebase",
    ],
    badge: "Mobile",
  },
  {
    icon: Server,
    title: "Enterprise .NET Microservices",
    description:
      "Developing high-concurrency backend services, RESTful APIs, and database solutions containerized with Docker and Azure deployment.",
    features: [
      ".NET Core / C# Architecture",
      "Docker Containerization",
      "CI/CD Automation Pipelines",
      "Azure & SQL Server Infrastructure",
    ],
    badge: "Backend",
  },
  {
    icon: Radio,
    title: "Telecom Operations & Automation",
    description:
      "Leveraging 14+ years of telecommunications engineering to automate operational workflows, monitor telemetry, and improve system reliability.",
    features: [
      "Network Telemetry Tooling",
      "BSS / OSS Operational Workflow",
      "Infrastructure KPI Monitoring",
      "Process Automation & Tooling",
    ],
    badge: "Telecom",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
            // 03. SERVICES & SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Specialized Engineering <span className="gradient-text-blue-cyan">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                      <service.icon size={26} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight
                      size={20}
                      className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
