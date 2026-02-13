import { motion } from "framer-motion";
import { Brain, Smartphone, Server, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    category: "AI",
    icon: Brain,
    title: "AI Agent Assistant",
    description: "Agentic AI system with multi-tool orchestration, RAG-based knowledge retrieval, and autonomous task execution using LangChain.",
    tags: ["Python", "LangChain", "RAG", "LLMs"],
    status: "In Progress",
  },
  {
    category: "AI",
    icon: Brain,
    title: "Generative AI Content Pipeline",
    description: "Automated content generation pipeline leveraging GPT models with fine-tuned prompts and quality filters.",
    tags: ["Python", "OpenAI", "Prompt Engineering"],
    status: "In Progress",
  },
  {
    category: "Mobile",
    icon: Smartphone,
    title: "Habibi App",
    description: "Full-featured social app with real-time chat, Google Maps integration, push notifications, and media sharing. Built with Flutter & Clean Architecture.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps", "BLoC"],
    links: { github: "https://github.com/ahmsaied" },
  },
  {
    category: ".NET",
    icon: Server,
    title: ".NET Microservices Platform",
    description: "Scalable backend built with .NET Core, Docker containers, Azure deployment, and CI/CD pipelines.",
    tags: [".NET Core", "C#", "Docker", "Azure", "SQL Server"],
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="glass border-border/50 hover:glow-border transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">{p.category}</Badge>
                  {p.status && <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">{p.status}</Badge>}
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <p.icon size={20} className="text-primary" />
                  {p.title}
                </CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>
                {p.links && (
                  <div className="flex gap-3">
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
