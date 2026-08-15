import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { SiStackoverflow, SiMedium } from "@icons-pack/react-simple-icons";

const socials = [
  { icon: Github, href: "https://github.com/ahmsaied", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ahmsaied/",
    label: "LinkedIn",
  },
  {
    icon: SiStackoverflow,
    href: "https://stackoverflow.com/users/9513914/ahmed-saied",
    label: "StackOverflow",
  },
  { icon: SiMedium, href: "https://medium.com/@ahm.saied", label: "Medium" },
  { icon: Mail, href: "mailto:eng.ahm.saied@gmail.com", label: "Email" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07090e] border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            {/* <div className="p-1 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <img
                src="/logo.png"
                alt="Ahmed Khedr Logo"
                className="w-8 h-8 object-contain"
              />
            </div> */}
            <div>
              <p className="text-white text-sm font-bold">Ahmed Khedr</p>
              <p className="text-xs text-slate-500 font-mono">
                © {new Date().getFullYear()} Ahmed Khedr. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl border border-white/10 bg-[#0d111a] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
