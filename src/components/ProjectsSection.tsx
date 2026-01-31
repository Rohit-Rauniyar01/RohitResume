import { Lock, Wifi, FileKey, Bug, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Caesar Cipher Tool",
    description: "A Python-based encryption and decryption tool implementing the classic Caesar cipher algorithm. Demonstrates understanding of cryptography basics and secure coding practices.",
    icon: Lock,
    tags: ["Python", "Cryptography", "CLI"],
    highlights: [
      "Implements encryption and decryption logic",
      "Handles edge cases and input validation",
      "Clean, readable code structure",
    ],
  },
  {
    title: "Network Sniffer",
    description: "Python network packet capture and analysis tool. Monitors network traffic to demonstrate understanding of protocols and traffic analysis techniques.",
    icon: Wifi,
    tags: ["Python", "Networking", "Security"],
    highlights: [
      "Captures and analyzes network packets",
      "Protocol identification (TCP, UDP, ICMP)",
      "Traffic monitoring and logging",
    ],
  },
  {
    title: "Secure File Transfer System",
    description: "A file transfer application with focus on secure data handling. Implements basic security principles for safe file transmission.",
    icon: FileKey,
    tags: ["Python", "Security", "File Handling"],
    highlights: [
      "Secure data handling mechanisms",
      "Basic encryption implementation",
      "Error handling and validation",
    ],
  },
  {
    title: "Bug Bounty Practice & Reports",
    description: "Practical experience analyzing real-world web applications for security vulnerabilities. Demonstrates understanding of responsible disclosure and security impact analysis.",
    icon: Bug,
    tags: ["Web Security", "OWASP", "Analysis"],
    highlights: [
      "Web application security testing",
      "Vulnerability documentation",
      "Responsible disclosure practices",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="font-capriola text-3xl sm:text-4xl text-foreground mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Hands-on security projects demonstrating practical skills and understanding
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-capriola text-xl text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
