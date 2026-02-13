import { motion } from "framer-motion";

const timeline = [
  {
    role: "Telecommunications Engineer",
    company: "WE (Telecom Egypt)",
    period: "2011 – Present",
    description: "Managing network infrastructure, leading technical teams, overseeing BSS/OSS operations for large-scale telecom systems across Egypt.",
  },
  {
    role: "Flutter Developer (Freelance)",
    company: "Stormra Ltd",
    period: "2021 – 2022",
    description: "Built the 'Habibi App' — a social platform with real-time chat, Google Maps, push notifications, and media sharing using Flutter & Clean Architecture.",
  },
  {
    role: "Network Planning Engineer",
    company: "Orange Egypt (Mobinil)",
    period: "2009 – 2011",
    description: "Radio network planning and optimization, KPI analysis, and coverage enhancement for GSM/3G networks.",
  },
];

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Experience</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.company + item.role}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

            <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass rounded-xl p-5">
                <span className="text-xs font-mono text-primary">{item.period}</span>
                <h3 className="text-lg font-semibold mt-1">{item.role}</h3>
                <p className="text-sm text-accent font-medium">{item.company}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
