import { Shield, Terminal, Network, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Cybersecurity & Security Concepts",
    icon: Shield,
    skills: [
      "Network Security",
      "Web Security",
      "API Security",
      "OWASP Top 10",
      "Access Control & IAM",
      "Vulnerability Assessment",
      "Security Testing",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: [
      "Wireshark",
      "TCPDump",
      "Nmap",
      "Burp Suite",
      "Splunk (SIEM)",
      "Kali Linux",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      "CCNA-level Knowledge",
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Packet Analysis",
      "Network Protocols",
    ],
  },
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: [
      "Python",
      "Security Scripts",
      "C#",
      "Basic Java",
      "React",
      "Logic Building",
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            Expertise
          </span>
          <h2 className="font-capriola text-3xl sm:text-4xl text-foreground mt-2">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A comprehensive toolkit for identifying vulnerabilities and securing systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <category.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-capriola text-lg text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
