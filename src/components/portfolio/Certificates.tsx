import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SpotlightCard } from "./SpotlightCard";
import { Button } from "@/components/ui/button";

const certsData = [
  {
    title: "Android Developer Nanodegree",
    issuer: "Udacity",
    date: "Certified",
    file: "/assets/certificates/udacity-android.pdf",
    description: "Comprehensive Android application development program covering Java, Jetpack, SQLite, Architecture Components, and REST networking.",
  },
  {
    title: "Russian Cultural Center Certificate",
    issuer: "Russian Cultural Center",
    date: "Certified",
    file: "/assets/certificates/russian-cultural-center.pdf",
    description: "Professional technical accreditation awarded by the Russian Cultural Center in Cairo.",
  },
  {
    title: "DevRel / TOT Egypt Attendance",
    issuer: "TOT Egypt",
    date: "Certified",
    file: "/assets/certificates/devrel-tot-egypt.pdf",
    description: "Developer Relations & Technical Training of Trainers program certificate.",
  },
];

export const Certificates = () => {
  const [selected, setSelected] = useState<typeof certsData[0] | null>(null);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
            // 06. CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Accreditations & <span className="gradient-text-blue-cyan">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard
                onClick={() => setSelected(cert)}
                className="p-7 h-full flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-5 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                    <Award size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">{cert.issuer}</p>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono group-hover:text-cyan-300">
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Certificate Dialog Modal */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-xl bg-[#0d111a]/95 border border-cyan-500/30 backdrop-blur-2xl text-white">
            <DialogHeader>
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-3">
                <ShieldCheck size={28} />
              </div>
              <DialogTitle className="text-xl font-bold text-white">
                {selected?.title}
              </DialogTitle>
              <DialogDescription className="text-sm font-mono text-cyan-400 pt-1">
                Issued by {selected?.issuer}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4 text-slate-300 text-sm leading-relaxed">
              <p>{selected?.description}</p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <Button
                variant="outline"
                onClick={() => setSelected(null)}
                className="border-white/10 text-slate-300 hover:text-white"
              >
                Close
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-400/30"
              >
                <a
                  href={selected?.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates;
