import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: t("nav.about"), href: "#about", id: "about" },
    { name: t("nav.skills"), href: "#skills", id: "skills" },
    { name: t("nav.services"), href: "#services", id: "services" },
    { name: t("nav.projects"), href: "#projects", id: "projects" },
    { name: t("nav.experience"), href: "#experience", id: "experience" },
    { name: t("nav.certificates"), href: "#certificates", id: "certificates" },
    { name: t("nav.contact"), href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["about", "skills", "services", "projects", "experience", "certificates", "contact"];
    // Cache section positions once, refresh on resize
    let sectionRects: { id: string; top: number; bottom: number }[] = [];

    const cacheSections = () => {
      sectionRects = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return el
          ? { id, top: el.offsetTop, bottom: el.offsetTop + el.offsetHeight }
          : { id, top: 0, bottom: 0 };
      });
    };

    cacheSections();
    window.addEventListener("resize", cacheSections, { passive: true });

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 200;
        setScrolled(window.scrollY > 20);
        for (const s of sectionRects) {
          if (scrollPos >= s.top && scrollPos < s.bottom) {
            setActiveSection(s.id);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", cacheSections);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0d14]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Only (Transparent, No Border, No Text) */}
          <a
            href="#"
            className="flex items-center group transition-transform hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain bg-transparent border-0 p-0 shadow-none"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-[#0d111a]/60 backdrop-blur-md px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-500/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#0d111a]/80 text-xs font-mono text-cyan-300 hover:border-cyan-500/40 hover:text-white transition-all shadow-sm"
              title="Switch Language / تغيير اللغة"
            >
              <Globe size={14} className="text-cyan-400" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>

            <Button
              size="sm"
              asChild
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all border border-cyan-400/30"
            >
              <a href="#contact" className="flex items-center gap-1.5 text-xs">
                {t("nav.talk")}
                <ArrowUpRight size={14} />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl border border-white/10 bg-[#0d111a]/80 text-xs font-mono text-cyan-300"
            >
              {language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-white/10 bg-[#0d111a]/80 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#0a0d14]/95 border-b border-white/10 backdrop-blur-2xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all flex items-center justify-between"
                >
                  {link.name}
                  <span className="font-mono text-xs text-cyan-500/60">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-3">
                <button
                  onClick={toggleLanguage}
                  className="w-full py-2.5 rounded-xl border border-white/10 bg-[#0d111a] text-xs font-mono text-cyan-300 flex items-center justify-center gap-2"
                >
                  <Globe size={16} />
                  <span>{language === "en" ? "تغيير للغة العربية" : "Switch to English"}</span>
                </button>
                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    {t("nav.talk")}
                    <ArrowUpRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
