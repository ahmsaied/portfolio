import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Smartphone, Server, ExternalLink, Github, Code, Sparkles } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    id: "ai-agent",
    category: "AI",
    icon: Bot,
    title: "AI Agent Assistant & RAG Framework",
    titleAr: "إطار عمل الذكاء الاصطناعي الوكيل وأنظمة RAG",
    description:
      "Autonomous Agentic AI system featuring multi-tool orchestration, vector database (RAG) knowledge retrieval, and custom execution pipelines using LangChain & Python.",
    descriptionAr:
      "نظام ذكاء اصطناعي وكيل مستقل يتيز بتنسيق الأدوات المعتددة، واسترجاع المعرفة من قواعد البيانات المتجهة (RAG)، وسلاسل تنفيذ مخصصة باستعمال Python و LangChain.",
    tags: ["Python", "LangChain", "RAG", "Vector DB", "OpenAI"],
    status: "In Development",
    statusAr: "قيد التطوير النشط",
    links: { github: "https://github.com/ahmsaied" },
  },
  {
    id: "genai-pipeline",
    category: "AI",
    icon: Sparkles,
    title: "Generative AI Content Automation",
    titleAr: "نظام أتمتة المحتوى بالذكاء الاصطناعي التوليدي",
    description:
      "Automated prompt engineering & content generation pipeline leveraging LLMs with automated filtering, template rendering, and quality checks.",
    descriptionAr:
      "أنبوب أتمتة توليد المحتوى الهندسي المتقدم باستعمال نماذج LLM مع فحص التصفية التلقائي وتدقيق الجودة.",
    tags: ["Python", "OpenAI API", "Prompt Engineering", "FastAPI"],
    status: "In Development",
    statusAr: "قيد التطوير النشط",
    links: { github: "https://github.com/ahmsaied" },
  },
  {
    id: "habibi-app",
    category: "Mobile",
    icon: Smartphone,
    title: "Habibi Social App",
    titleAr: "تطبيق حَبيبي للتواصل الاجتماعي",
    description:
      "Production-grade mobile social platform with real-time messaging, Google Maps location integration, push notifications, and media sharing. Built using Flutter & BLoC Clean Architecture.",
    descriptionAr:
      "منصة موبايل اجتماعية متكاملة تتميز بالمحادثة الفورية، وربط خرائط جوجل، والتنبيهات المباشرة ومشاركة الوسائط. مبنية بـ Flutter و BLoC Clean Architecture.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API", "BLoC"],
    status: "Production Ready",
    statusAr: "جاهز ومكتمل",
    links: { github: "https://github.com/ahmsaied" },
  },
  {
    id: "dotnet-microservices",
    category: ".NET",
    icon: Server,
    title: ".NET Microservices Cloud Platform",
    titleAr: "منصة الخدمات السحابية بـ .NET Core",
    description:
      "High-throughput enterprise backend constructed with .NET Core microservices, containerized with Docker, deployed on Azure with automated CI/CD pipelines.",
    descriptionAr:
      "بنية تحتية برمجية عالية الأداء مبنية بـ .NET Core Microservices، ومغلفة بـ Docker ومرفوعة على Azure مع أنبوب CI/CD آلي.",
    tags: [".NET Core", "C#", "Docker", "Azure", "SQL Server", "REST APIs"],
    status: "Production Ready",
    statusAr: "جاهز ومكتمل",
    links: { github: "https://github.com/ahmsaied" },
  },
];

export const Projects = () => {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categoriesFilter = ["All", "AI", "Mobile", ".NET"];

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t("projects.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesFilter.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedFilter === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20 border border-cyan-400/40 font-semibold"
                  : "bg-[#0c1018] text-slate-400 border border-white/10 hover:text-white hover:border-cyan-500/30"
              }`}
            >
              {cat === "All" ? (language === "ar" ? "الكل" : "All") : cat}
            </button>
          ))}
        </div>

        {/* Bento Projects Grid */}
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
                <SpotlightCard className="p-8 h-full flex flex-col justify-between bento-card group">
                  <div>
                    {/* Top Status & Category Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {language === "ar" ? project.statusAr : project.status}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center gap-2.5">
                      <project.icon size={20} className="text-cyan-400 shrink-0" />
                      {language === "ar" ? project.titleAr : project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {language === "ar" ? project.descriptionAr : project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#080a0f] text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Footer */}
                  {project.links && (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Github size={16} />
                          {language === "ar" ? "معاينة المستودع" : "View Repository"}
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
