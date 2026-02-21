import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Services = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Services that we provide
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-8"
      >
        <h3 className="font-bold text-xl md:text-xl mb-2 text-center">
          Full-Spectrum Frontend Development
        </h3>

        <p className="text-center text-muted-foreground mb-8">
          I specialize in building high-performance, pixel-perfect web
          applications using React and Tailwind CSS. My approach combines
          technical logic with aesthetic precision to deliver seamless user
          experiences.
        </p>

        <p className="leading-relaxed">
          <strong>• Custom React Architectures:</strong>
          <p className="text-center text-muted-foreground mb-8">
            {" "}
            Building scalable, state-managed applications with clean, reusable
            patterns.{" "}
          </p>
          <strong>• Responsive UI/UX Implementation:</strong>{" "}
          <p className="text-center text-muted-foreground mb-8">
            {" "}
            Translating designs into lightweight, mobile-first interfaces using
            Tailwind CSS.
          </p>
          <strong>• Optimization & Performance:</strong>{" "}
          <p className="text-center text-muted-foreground mb-8">
            {" "}
            Ensuring lightning-fast load times and SEO-friendly structures
            through modern rendering strategies.
          </p>
        </p>
        <h5 className="text-l md:text-l font-bold mb-2 text-center">
          Let's build a stunning project
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a
            href="mailto:eng.ahm.saied@gmail.com?subject=Build React web page"
            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <Mail size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">eng.ahm.saied@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+2001002652078"
            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <Phone size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">+20 100 265 2078</p>
            </div>
          </a>
        </div>
      </motion.div>
      <div>
        <br />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-8"
      >
        <h3 className="font-bold text-xl md:text-xl mb-2 text-center">
          Cross-Platform Mobile Development
        </h3>

        <p className="text-center text-muted-foreground mb-8">
          I build high-performance, natively compiled applications for iOS and
          Android using Flutter and Dart. My focus is on delivering a
          consistent, "pixel-perfect" user experience across all devices from a
          single codebase.
        </p>

        <p className="leading-relaxed">
          <strong>• Native-Quality Performance:</strong>
          <p className="text-center text-muted-foreground mb-8">
            Developing smooth, high-frame-rate apps using Flutter’s rendering
            engine and Dart for a truly native feel.
          </p>
          <strong>• Custom UI/UX Implementation:</strong>
          <p className="text-center text-muted-foreground mb-8">
            Crafting expressive and flexible interfaces with complex animations
            and adaptive layouts for all screen sizes.
          </p>
          <strong>• Robust App Architecture:</strong>
          <p className="text-center text-muted-foreground mb-8">
            Implementing scalable state management (Bloc, Riverpod, or Provider)
            and seamless API/Firebase integration.
          </p>
        </p>
        <h5 className="text-l md:text-l font-bold mb-2 text-center">
          Let's build a stunning project
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a
            href="mailto:eng.ahm.saied@gmail.com?subject=Build Flutter App"
            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <Mail size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">eng.ahm.saied@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+2001002652078"
            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <Phone size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">+20 100 265 2078</p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Services;
