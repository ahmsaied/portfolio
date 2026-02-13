import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-8"
      >
        <p className="text-center text-muted-foreground mb-8">
          Interested in collaborating on AI, mobile, or backend projects? Let's connect!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a href="mailto:eng.ahm.saied@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <Mail size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">eng.ahm.saied@gmail.com</p>
            </div>
          </a>
          <a href="tel:+2001002652078" className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <Phone size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">+20 100 265 2078</p>
            </div>
          </a>
          <a href="https://github.com/ahmsaied" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <Github size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium">ahmsaied</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ahmsaied/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <Linkedin size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">ahmsaied</p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
