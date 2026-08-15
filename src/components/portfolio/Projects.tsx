import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Smartphone, Server, ExternalLink, Github, Sparkles } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    id: "ai-agent",
    category: "AI",
    icon: Bot,
    title: "AI Agent Assistant & RAG Framework",
    description:
      "Autonomous Agentic AI system featuring multi-tool orchestration, vector database (RAG) knowledge retrieval, and custom execution pipelines using LangChain & Python.",
    tags: ["Python", "LangChain", "RAG", "Vector DB", "OpenAI"],
    status: "In Active Development",
    links: { github: "https://github.com/ahmsaied" },
  },
  {
    id: "genai-pipeline",
    category: "AI",
    icon: Bot,
    title: "Generative AI Content Automation",
    description:
      "Automated prompt engineering & content generation pipeline leveraging LLMs with automated filtering, template rendering, and quality checks.",
    tags: ["Python", "OpenAI API", "Prompt Engineering", "FastAPI"],
    status: "In Active Development",
    links: { github: "https://github.com/ahmsaied" },
  },
  {
    id: "habibi-app",
    category: "Mobile",
    icon: Smartphone,
    title: "Habibi Social App",
    description:
      "Production-grade mobile social platform with real-time messaging, Google Maps location integration, push notifications, and media sharing. Built using Flutter & BLoC Clean Architecture.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API", "BLoC"],
    status: "Production Ready",
    links: { github: "https://github.com/ahmsaied" },
  },
  {
    id: "dotnet-microservices",
    category: ".NET",
    icon: Server,
    title: ".NET Microservices Cloud Platform",
    description:
      "High-throughput enterprise backend constructed with .NET Core microservices, containerized with Docker, deployed on Azure with automated CI/CD pipelines.",
    tags: [".NET Core", "C#", "Docker", "Azure", "SQL Server", "REST APIs"],
    status: "Production Ready",
    links: { github: "https://github.com/ahmsaied" },
  },
];

const categoriesFilter = ["All", "AI", "Mobile", ".NET"];

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
            // 04. FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="gradient-text-blue-cyan">Work & Systems</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesFilter.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedFilter === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/40"
                  : "bg-[#0d111a]/80 text-slate-400 border border-white/10 hover:text-white hover:border-cyan-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <SpotlightCard className="p-8 h-full flex flex-col justify-between group">
                  <div>
                    {/* Top Status & Category Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <project.icon size={20} className="text-cyan-400 shrink-0" />
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0a0d14] text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Footer */}
                  {project.links && (
                    <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Github size={16} />
                          View Repository
                        </a>
                      )}
                    </div>
                  )}
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
