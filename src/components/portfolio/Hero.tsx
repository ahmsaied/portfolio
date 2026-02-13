import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiStackoverflow } from "@icons-pack/react-simple-icons";

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
  { icon: Mail, href: "mailto:eng.ahm.saied@gmail.com", label: "Email" },
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-6">
          Open to Opportunities
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
          Ahmed Khedr
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl gradient-text font-semibold mb-4">
          AI Engineer — Generative & Agentic AI
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
          Building intelligent systems with LLMs & AI Agents · Flutter & .NET
          Full-Stack Developer · 14+ Years Telecom Engineering
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/assets/Ahmed_Khedr_Resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border/50 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
