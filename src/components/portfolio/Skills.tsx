import React from "react";
import { motion } from "framer-motion";
import { Brain, Smartphone, Server, Radio, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const categories = [
  {
    icon: Brain,
    title: "AI & Data Engineering",
    tag: "Pillar 01",
    skills: [
      "Generative AI",
      "Agentic AI Frameworks",
      "LLMs & RAG Pipelines",
      "Python",
      "LangChain",
      "Prompt Engineering",
      "Vector Databases (Pinecone / Chroma)",
    ],
    accentColor: "from-cyan-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    tag: "Pillar 02",
    skills: [
      "Flutter",
      "Dart",
      "Android (Java)",
      "Clean Architecture",
      "State Management (BLoC)",
      "Firebase Integration",
      "Push Notifications & Maps",
    ],
    accentColor: "from-blue-500 to-cyan-400",
  },
  {
    icon: Server,
    title: "Backend & DevOps",
    tag: "Pillar 03",
    skills: [
      ".NET Core",
      "C#",
      "Docker Containers",
      "CI/CD Pipelines",
      "Azure Cloud",
      "SQL Server & Entity Framework",
      "RESTful API Design",
    ],
    accentColor: "from-teal-400 to-cyan-500",
  },
  {
    icon: Radio,
    title: "Telecom & Leadership",
    tag: "Pillar 04",
    skills: [
      "Network Infrastructure",
      "BSS/OSS Operations",
      "GSM / 3G KPI Analysis",
      "Team Leadership",
      "Agile Project Management",
      "Cross-Functional Operations",
    ],
    accentColor: "from-cyan-400 to-blue-600",
  },
];

export const Skills = () => {
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
          <div className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
            // 02. SKILLS & EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Core Technical <span className="gradient-text-blue-cyan">Capabilities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${cat.accentColor} text-white shadow-lg`}
                      >
                        <cat.icon size={24} />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest">
                          {cat.tag}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Skill Badges List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-[#0a0d14]/60 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-all group"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform"
                        />
                        <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-200 transition-colors">
                          {skill}
                        </span>
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

export default Skills;
