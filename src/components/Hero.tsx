import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-background to-surface opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Name with gradient text */}
          <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-glow-pulse">
            Kerrwel Nor
          </h1>
          
          {/* Title */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-neon-cyan font-semibold">
              Software QA Tester | Full-Stack Developer
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          {/* Introduction */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I specialize in manual QA testing, web development, and Agile project management. 
            I'm passionate about building efficient systems and ensuring high-quality software.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary text-primary-foreground border-0 px-8 py-3 text-lg font-semibold hover:shadow-glow-hover transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-neon-cyan text-neon-cyan bg-transparent px-8 py-3 text-lg font-semibold hover:bg-neon-cyan hover:text-background transition-all duration-300 transform hover:scale-105 glow-primary"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-neon-cyan opacity-70" />
      </div>
    </section>
  );
};

export default Hero;