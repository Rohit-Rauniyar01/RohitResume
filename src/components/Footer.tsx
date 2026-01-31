import { Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-capriola text-foreground">Rohit Rauniyar</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-3 h-3 text-destructive" /> in Nepal
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
