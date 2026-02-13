import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        <div className="glass rounded-2xl p-8 space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            I'm <strong className="text-foreground">Ahmed Mohamed Saied Khedr</strong>, a multidisciplinary engineer based in Cairo, Egypt with over 14 years in Telecommunications Engineering and a passionate pivot into Software Development and Artificial Intelligence.
          </p>
          <p>
            My career spans mission-critical telecom operations at <strong className="text-foreground">WE (Telecom Egypt)</strong> and <strong className="text-foreground">Orange Egypt</strong>, where I managed large-scale network infrastructure, led cross-functional teams, and delivered high-availability systems. This background gave me a unique edge in building robust, production-grade software.
          </p>
          <p>
            Today I focus on <span className="gradient-text font-semibold">Generative AI & Agentic AI</span> — designing intelligent agents, RAG pipelines, and LLM-powered applications — while continuing to deliver mobile apps with <strong className="text-foreground">Flutter</strong> and backend systems with <strong className="text-foreground">.NET Core</strong>.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
