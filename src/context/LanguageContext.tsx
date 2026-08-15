import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "nav.talk": "Let's Talk",

    // Hero
    "hero.badge": "AVAILABLE FOR AI & FULL-STACK PROJECTS",
    "hero.name": "Ahmed",
    "hero.title": "AI Engineer & Software Architect",
    "hero.bio":
      "Architecting autonomous AI Agent networks, RAG vector retrieval pipelines, & enterprise systems. Experienced Flutter & .NET Full-Stack Developer backed by 14+ years of telecom operations engineering.",
    "hero.projectsBtn": "View Featured Projects",
    "hero.resumeBtn": "Download Resume",

    // Section Tags
    "tag.about": "// 01. ABOUT ME",
    "tag.skills": "// 02. SKILLS & EXPERTISE",
    "tag.services": "// 03. SERVICES & SOLUTIONS",
    "tag.projects": "// 04. FEATURED PROJECTS",
    "tag.experience": "// 05. CAREER TIMELINE",
    "tag.certificates": "// 06. CERTIFICATIONS",
    "tag.contact": "// 07. GET IN TOUCH",

    // Titles
    "about.title": "Engineering Intelligence & Scale",
    "skills.title": "Core Technical Capabilities",
    "services.title": "Specialized Engineering Services",
    "projects.title": "Selected Work & Systems",
    "experience.title": "Professional Experience",
    "certificates.title": "Accreditations & Certificates",
    "contact.title": "Let's Build Something Intelligent",

    // Contact Form
    "contact.direct": "Direct Communication",
    "contact.formTitle": "Send a Message (OWASP Protected)",
    "contact.nameLabel": "Your Name *",
    "contact.emailLabel": "Your Email *",
    "contact.subjectLabel": "Subject",
    "contact.messageLabel": "Message *",
    "contact.submitBtn": "Send Message",
    "contact.sending": "Sanitizing & Sending...",
    "contact.success": "Thank you! Your message has been sanitized and sent successfully.",
    "contact.rateLimit": "Security Alert: Submission limit exceeded. Please wait 10 minutes.",
    "contact.xssAlert": "Security Error: Script or HTML injection detected and blocked.",
  },
  ar: {
    // Nav
    "nav.about": "عني",
    "nav.skills": "المهارات",
    "nav.services": "الخدمات",
    "nav.projects": "المشاريع",
    "nav.experience": "الخبرات",
    "nav.certificates": "الشهادات",
    "nav.contact": "تواصل معي",
    "nav.talk": "تواصل معي",

    // Hero
    "hero.badge": "متاح لمشاريع الذكاء الاصطناعي والتطوير الكامل",
    "hero.name": "أحمد",
    "hero.title": "مهندس ذكاء اصطناعي ومطور برمجيات",
    "hero.bio":
      "تطوير أنظمة الذكاء الاصطناعي الوكيلة (Agentic AI) وسلاسل استرجاع المعرفة (RAG) وتطبيقات Flutter و .NET مع خبرة أكثر من 14 عاماً في هندسة الاتصالات.",
    "hero.projectsBtn": "عرض المشاريع المميزة",
    "hero.resumeBtn": "تحميل السيرة الذاتية",

    // Section Tags
    "tag.about": "// 01. من أنا",
    "tag.skills": "// 02. المهارات والخبرات",
    "tag.services": "// 03. الخدمات والحلول",
    "tag.projects": "// 04. المشاريع المختارة",
    "tag.experience": "// 05. التسلسل المهني",
    "tag.certificates": "// 06. الشهادات والاعتمادات",
    "tag.contact": "// 07. تواصل معي",

    // Titles
    "about.title": "هندسة الأنظمة الذكية والقابلة للتوسع",
    "skills.title": "القدرات والقدرات التقنية الأساسية",
    "services.title": "الخدمات الهندسية المتخصصة",
    "projects.title": "المشاريع والأعمال المختارة",
    "experience.title": "الخبرة والمسار المهني",
    "certificates.title": "الشهادات والاعتمادات الرسمية",
    "contact.title": "فلنبنِ نظاماً ذكياً معاً",

    // Contact Form
    "contact.direct": "التواصل المباشر (محمي ضداً الـ Scraping)",
    "contact.formTitle": "إرسال رسالة (محمية بـ OWASP Security)",
    "contact.nameLabel": "الاسم بالكامل *",
    "contact.emailLabel": "البريد الإلكتروني *",
    "contact.subjectLabel": "موضوع الرسالة",
    "contact.messageLabel": "نص الرسالة *",
    "contact.submitBtn": "إرسال الرسالة آمنة",
    "contact.sending": "جاري الفحص والتعقيم والإرسال...",
    "contact.success": "شكراً لك! تم فحص وتعقيم رسالتك وإرسالها بنجاح.",
    "contact.rateLimit": "تنبيه أمني: تم تجاوز الحد المسموح للإرسال. يرجى الانتظار 10 دقائق.",
    "contact.xssAlert": "حظر أمني: تم اكتشاف محاولة حقن سكريبت وتمرير كود خبيث وحظره فوراً.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
