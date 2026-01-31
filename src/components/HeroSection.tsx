import { Shield, ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-sm text-muted-foreground">Open to Opportunities</span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-[2px] animate-glow-pulse"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-capriola text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight"
          >
            Rohit <span className="gradient-text">Rauniyar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Cybersecurity Student | Aspiring Security Analyst
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            From Nepal 🇳🇵 — Passionate about securing systems, networks, and digital assets
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
