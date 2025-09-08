import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark border-t border-neon-cyan/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Kerrwel Nor</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software QA Tester & Full-Stack Developer passionate about building 
              efficient systems and ensuring high-quality software solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-neon-cyan" />
              Philippines • GMT+8
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-neon-cyan transition-colors duration-300 py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start p-2 text-muted-foreground hover:text-neon-cyan hover:bg-surface transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/kerrwel-nor', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-3" />
                LinkedIn Profile
              </Button>
              
              <Button
                variant="ghost"
                className="w-full justify-start p-2 text-muted-foreground hover:text-neon-purple hover:bg-surface transition-all duration-300"
                onClick={() => window.open('https://github.com/kerrwel-nor', '_blank')}
              >
                <Github className="w-4 h-4 mr-3" />
                GitHub Projects
              </Button>
              
              <Button
                variant="ghost"
                className="w-full justify-start p-2 text-muted-foreground hover:text-neon-blue hover:bg-surface transition-all duration-300"
                onClick={() => window.open('mailto:kerrwel.nor@email.com')}
              >
                <Mail className="w-4 h-4 mr-3" />
                Send Email
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-primary opacity-30" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            All rights reserved Kerr ©{currentYear}
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300 hover:scale-105"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;