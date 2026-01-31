import { Award, ExternalLink, GraduationCap, BookOpen, FlaskConical, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const certifications = [
  {
    title: "CCNA",
    issuer: "Cisco",
    description: "Networking fundamentals, routing, switching, and network security concepts",
    color: "from-primary to-accent",
  },
  {
    title: "Cybersecurity Analyst",
    issuer: "Forage",
    description: "Virtual experience program covering real-world security analysis tasks",
    color: "from-accent to-primary",
  },
  {
    title: "Introduction to Network Analysis",
    issuer: "Security Blue Team",
    description: "Network traffic analysis and threat detection fundamentals",
    color: "from-primary to-accent",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    description: "Core cybersecurity principles and security operations basics",
    color: "from-accent to-primary",
  },
  {
    title: "Linux Fundamentals",
    issuer: "A Cloud Guru",
    description: "Linux command line, system administration, and security basics",
    color: "from-primary to-accent",
  },
];

const educationDetails = [
  {
    icon: GraduationCap,
    title: "Formal Education",
    description: "Bachelor's degree in Information Technology / Cybersecurity with focus on network security, system administration, and security fundamentals.",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Labs",
    description: "Extensive practice through virtual labs including TryHackMe, HackTheBox, and custom home lab environments for penetration testing and security analysis.",
  },
  {
    icon: Trophy,
    title: "CTF Challenges",
    description: "Active participation in Capture The Flag competitions, developing problem-solving skills and practical security knowledge across web, forensics, and cryptography.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Self-directed learning through online courses, security blogs, podcasts, and documentation. Committed to staying current with emerging threats and technologies.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Credentials
          </span>
          <h2 className="font-capriola text-3xl sm:text-4xl text-foreground mt-2">
            Certifications & Learning
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Continuous learning and professional development in cybersecurity
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient Accent */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-primary" />
              </div>

              <h3 className="font-capriola text-lg text-foreground mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-primary mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="font-capriola text-2xl text-foreground">Education & Training</h3>
            <p className="text-muted-foreground mt-2">
              Building expertise through formal education and practical experience
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-6"
          >
            {educationDetails.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-capriola text-lg text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
