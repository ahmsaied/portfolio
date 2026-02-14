import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        <div className="glass rounded-2xl p-8 space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Over the past decade, </strong>
            my journey into software grew naturally from my work in telecom
            operations, where I was constantly driven to automate processes,
            build internal tools, and improve system reliability. What began as
            curiosity quickly turned into a long-term passion for designing and
            developing scalable digital solutions.
          </p>

          <p>
            As my engineering perspective evolved, I became increasingly focused
            on{" "}
            <strong className="text-foreground">Artificial Intelligence</strong>{" "}
            and its ability to transform how systems operate and how businesses
            make decisions.
          </p>
          <p>
            Today I focus on{" "}
            <span className="gradient-text font-semibold">
              Generative AI & Agentic AI
            </span>{" "}
            — designing intelligent agents, RAG pipelines, and LLM-powered
            applications — while continuing to deliver mobile apps with{" "}
            <strong className="text-foreground">Flutter</strong> and backend
            systems with <strong className="text-foreground">.NET Core</strong>.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
