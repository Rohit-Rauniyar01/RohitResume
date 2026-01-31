import { Target, BookOpen, Lightbulb, Code } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on becoming a SOC Analyst",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Always expanding my security knowledge",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Analytical approach to security challenges",
  },
  {
    icon: Code,
    title: "Hands-On",
    description: "Practical experience through projects",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="font-capriola text-3xl sm:text-4xl text-foreground mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              I'm a <span className="text-primary font-medium">Cybersecurity Student</span> from Nepal with a strong foundation in 
              networking and security fundamentals. My passion lies in protecting systems, 
              analyzing vulnerabilities, and understanding the ever-evolving threat landscape.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in bug bounty basics, security testing, and network analysis, 
              I bring a practical approach to cybersecurity. I've developed security tools in Python, 
              conducted packet analysis with Wireshark, and explored web application security through 
              platforms like OWASP.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As a motivated fresher, I'm eager to contribute to a security team where I can apply 
              my skills, learn from experienced professionals, and grow as a Security Analyst. 
              My disciplined work ethic and genuine curiosity for ethical hacking drive me to 
              continuously improve and stay current with security trends.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group"
              >
                Let's connect
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
