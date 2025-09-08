import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image Section */}
          <div className="lg:col-span-1 animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="sticky top-24">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-surface p-3 shadow-glow-primary">
                  <img 
                    src="/image-uploads/9e80dc0d-4bac-47bf-8f45-2ea23bd4d8d2.png"
                    alt="Kerrwel Nor - Graduation Photo"
                    className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-xl" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-primary p-3 rounded-full shadow-glow-hover animate-float">
                  <GraduationCap className="w-6 h-6 text-background" />
                </div>
              </div>
              
              {/* Location Card */}
              <Card className="p-4 bg-gradient-surface border-2 border-neon-blue/20 text-center mt-6">
                <h3 className="text-lg font-semibold text-neon-blue mb-2">Based in Philippines</h3>
                <p className="text-sm text-muted-foreground">
                  Working with international teams across different time zones.
                </p>
              </Card>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <Card className="p-8 bg-gradient-surface border-2 border-neon-cyan/20 shadow-card hover:shadow-glow-primary transition-all duration-500">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                With <span className="text-neon-cyan font-semibold">2.5 years of QA experience</span> at 
                <span className="text-neon-blue font-semibold"> Denso Makati (AWS)</span>, I've developed a keen eye 
                for detail and a systematic approach to ensuring software quality.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mb-6">
                My journey began with an <span className="text-neon-purple font-semibold">internship as a full-stack developer</span>, 
                where I discovered my passion for both building and testing robust applications. This dual perspective 
                allows me to create better code and identify potential issues before they reach production.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Currently, I also work as a <span className="text-neon-cyan font-semibold">freelance WordPress developer</span>, 
                helping businesses establish their online presence with custom, responsive websites that deliver 
                exceptional user experiences.
              </p>
            </Card>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 bg-surface border border-neon-cyan/30 text-center hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-neon-cyan mb-1">2.5+</div>
                <div className="text-xs text-muted-foreground">Years QA</div>
              </Card>
              
              <Card className="p-4 bg-surface border border-neon-blue/30 text-center hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-neon-blue mb-1">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </Card>
              
              <Card className="p-4 bg-surface border border-neon-purple/30 text-center hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-neon-purple mb-1">15+</div>
                <div className="text-xs text-muted-foreground">WordPress</div>
              </Card>
              
              <Card className="p-4 bg-surface border border-neon-cyan/30 text-center hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-neon-cyan mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;