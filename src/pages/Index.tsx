import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Certificates from "@/components/portfolio/Certificates";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Toaster } from "sonner";

const Index = () => (
  <main className="min-h-screen bg-[#0a0d14] text-slate-100 relative overflow-hidden grid-pattern selection:bg-cyan-500/30 selection:text-cyan-200">
    {/* Canvas Constellation Particle System */}
    <ParticleBackground />

    {/* Toast Notifications */}
    <Toaster position="bottom-right" theme="dark" />

    {/* Content Sections */}
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  </main>
);

export default Index;
