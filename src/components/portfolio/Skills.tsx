import React from "react";
import { motion } from "framer-motion";
import { Brain, Smartphone, Server, Radio, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

export const Skills = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t("skills.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI & Data Science (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <SpotlightCard className="p-8 h-full bento-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Brain size={24} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider">
                    {language === "ar" ? "الركيزة الأولى" : "PILLAR 01"}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {language === "ar" ? "هندسة الذكاء الاصطناعي والبيانات" : "AI & Data Engineering"}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Generative AI & LLMs",
                  "Agentic AI Frameworks",
                  "LangChain Orchestration",
                  "RAG Knowledge Pipelines",
                  "Python & FastAPI",
                  "Vector DBs (Pinecone/Chroma)",
                  "Prompt Engineering",
                  "Autonomous Tool Execution",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-[#080a0f]/60 hover:border-cyan-500/30 transition-all group"
                  >
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Mobile Development (Spans 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1"
          >
            <SpotlightCard className="p-8 h-full bento-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Smartphone size={24} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-blue-400 uppercase tracking-wider">
                    {language === "ar" ? "الركيزة الثانية" : "PILLAR 02"}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {language === "ar" ? "تطوير الموبايل" : "Mobile Engineering"}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  "Flutter & Dart",
                  "Clean BLoC Architecture",
                  "Android (Java Native)",
                  "Firebase Backend",
                  "Google Maps API",
                  "Real-Time Chat Sockets",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-[#080a0f]/60 hover:border-blue-500/30 transition-all group"
                  >
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-blue-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Backend & DevOps (Spans 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <SpotlightCard className="p-8 h-full bento-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Server size={24} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-teal-400 uppercase tracking-wider">
                    {language === "ar" ? "الركيزة الثالثة" : "PILLAR 03"}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {language === "ar" ? "الخلفية والإنفرا" : "Backend & DevOps"}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  ".NET Core & C#",
                  "Docker Containerization",
                  "CI/CD Pipelines",
                  "Azure Cloud Platform",
                  "SQL Server & Entity Framework",
                  "RESTful API Microservices",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-[#080a0f]/60 hover:border-teal-500/30 transition-all group"
                  >
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-teal-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Telecom & Leadership (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <SpotlightCard className="p-8 h-full bento-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Radio size={24} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-indigo-400 uppercase tracking-wider">
                    {language === "ar" ? "الركيزة الرابعة" : "PILLAR 04"}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {language === "ar" ? "الاتصالات وإدارة الفرق" : "Telecom & Leadership"}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Network Infrastructure Operations",
                  "BSS / OSS Enterprise Systems",
                  "GSM & 3G KPI Telemetry Analysis",
                  "Cross-Functional Team Leadership",
                  "Process Automation & Tooling",
                  "Agile Project Management",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-[#080a0f]/60 hover:border-indigo-500/30 transition-all group"
                  >
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-indigo-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
