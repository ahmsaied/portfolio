import { motion } from "framer-motion";
import { Brain, Smartphone, Server, Radio } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "AI & Data",
    skills: ["Generative AI", "Agentic AI", "LLMs & RAG", "Python", "LangChain", "Prompt Engineering"],
    color: "from-primary to-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Android (Java)", "Clean Architecture", "BLoC", "Firebase"],
    color: "from-accent to-primary",
  },
  {
    icon: Server,
    title: "Backend & DevOps",
    skills: [".NET Core", "C#", "Docker", "CI/CD", "Azure", "SQL Server", "REST APIs"],
    color: "from-primary to-accent",
  },
  {
    icon: Radio,
    title: "Telecom & Leadership",
    skills: ["Network Infrastructure", "BSS/OSS", "Team Leadership", "Project Management", "Operations"],
    color: "from-accent to-primary",
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Skills & Expertise</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cat.color} mb-4`}>
              <cat.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
