import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-capriola text-3xl sm:text-4xl text-foreground mt-2">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm actively seeking entry-level cybersecurity opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Email Card */}
            <motion.a
              variants={cardVariants}
              href="mailto:rohit.rauniyar@example.com"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">rohit.rauniyar@example.com</p>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              variants={cardVariants}
              className="p-6 rounded-xl bg-card border border-border flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">Nepal 🇳🇵</p>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.a
              variants={cardVariants}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/rohit-rauniyar</p>
              </div>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              variants={cardVariants}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/rohit-rauniyar</p>
              </div>
            </motion.a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:rohit.rauniyar@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity group"
            >
              <Send className="w-5 h-5" />
              Send a Message
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
