import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const certs = [
  {
    title: "Android Developer Nanodegree",
    issuer: "Udacity",
    file: "/assets/certificates/udacity-android.pdf",
  },
  {
    title: "Russian Cultural Center Certificate",
    issuer: "Russian Cultural Center",
    file: "/assets/certificates/russian-cultural-center.pdf",
  },
  {
    title: "DevRel / TOT Egypt Attendance",
    issuer: "TOT Egypt",
    file: "/assets/certificates/devrel-tot-egypt.pdf",
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState<typeof certs[0] | null>(null);

  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Certificates</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.button
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="glass rounded-xl p-6 text-left hover:glow-border transition-all duration-300 group cursor-pointer"
            >
              <Award size={32} className="text-primary mb-4" />
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </motion.button>
          ))}
        </div>

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-3xl glass">
            <DialogHeader>
              <DialogTitle>{selected?.title}</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center">
              <a
                href={selected?.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={16} />
                View Certificate PDF
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates;
