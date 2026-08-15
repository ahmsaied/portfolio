import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: Cpu,
      value: "14+",
      label: language === "ar" ? "سنوات في الهندسة" : "Years Engineering",
      description: language === "ar" ? "تشغيل شبكات الاتصالات وتطوير البنية التحتية البرمجية." : "Telecom operations & software infrastructure engineering.",
    },
    {
      icon: Sparkles,
      value: "AI & RAG",
      label: language === "ar" ? "الذكاء الاصطناعي الوكيل" : "Agentic Systems",
      description: language === "ar" ? "بناء أنظمة LangChain وسلاسل استرجاع البيانات." : "LangChain orchestration & autonomous vector retrieval pipelines.",
    },
    {
      icon: Layers,
      value: "Full-Stack",
      label: language === "ar" ? "تطوير التطبيقات" : "Flutter & .NET",
      description: language === "ar" ? "تطبيقات موبايل معمارية Clean بـ Flutter وخلفيات .NET." : "Clean BLoC mobile apps & high-concurrency microservices.",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: language === "ar" ? "اعتمادية الأنظمة" : "System Reliability",
      description: language === "ar" ? "التركيز على القابلية للتوسع والاختبار البرمجي الجيد." : "Focus on maintainability, testing, & enterprise scale.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t("about.title")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Narrative Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <SpotlightCard className="p-8 md:p-10 bento-card">
            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">
                  {language === "ar" ? "على مدار العقد الماضي، " : "Over the past decade, "}
                </strong>
                {language === "ar"
                  ? "تطورت رحلتي في هندسة البرمجيات بشكل طبيعي من عملي في تشغيل شبكات الاتصالات بشركات كبرى مثل WE (المصرية للاتصالات) و Orange مصر. كنت دائماً مدفوعاً بأتمتة العمليات، وبناء أدوات التحليل الداخلية، وتحسين اعتمادية الشبكات، ليتحول هذا الشغف إلى مسار مهني متكامل في هندسة البرمجيات والأنظمة."
                  : "my journey into software engineering grew naturally from my work in telecom operations at leading providers like WE (Telecom Egypt) and Orange Egypt. Driven by a desire to automate operations, construct telemetry tooling, and optimize network reliability, what began as curiosity matured into a full career in software architecture."}
              </p>

              <p>
                {language === "ar"
                  ? "مع توسع نطاق عملي الهندي، ركزت بشكل أساسي على "
                  : "As my engineering scope expanded, I shifted my core focus to "}
                <span className="gradient-text-blue-cyan font-bold">
                  {language === "ar" ? "الذكاء الاصطناعي (Artificial Intelligence)" : "Artificial Intelligence"}
                </span>{" "}
                {language === "ar"
                  ? "وقدرته التغييرية على إعادة تشكيل سلوك الأنظمة الذاتية وإتخاذ القرارات برمجياً."
                  : "and its power to redefine autonomous system behavior and decision-making workflows."}
              </p>

              <p>
                {language === "ar"
                  ? "اليوم، أتخصص في "
                  : "Today, I specialize in "}
                <strong className="text-cyan-300 font-semibold">
                  {language === "ar" ? "الذكاء الاصطناعي التوليدي والأنظمة الوكيلة (Generative AI & Agentic Systems)" : "Generative AI & Agentic Systems"}
                </strong>{" "}
                {language === "ar"
                  ? "— تصميم شبكات الوكلاء متعددة المهام، وقواعد المعرفة RAG باستعمال Python و LangChain — إلى جانب بناء تطبيقات الموبايل بـ Flutter وخلفيات الأنظمة القوية بـ .NET Core."
                  : "— designing multi-agent frameworks, RAG knowledge bases, and LLM orchestration applications with Python & LangChain — while building production mobile applications with Flutter and backend infrastructure with .NET Core."}
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
              <SpotlightCard className="p-6 h-full flex flex-col justify-between bento-card">
                <div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 inline-block mb-4">
                    <item.icon size={22} />
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
