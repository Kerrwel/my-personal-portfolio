import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, Wrench, Code, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "QA Testing",
      icon: <TestTube className="w-6 h-6 text-neon-cyan" />,
      skills: ["Manual Testing", "Static Testing", "Exhaustive Testing", "Regression Testing", "Boundary Value Analysis", "Decision Tables", "MCDC Testing", "Exploratory Testing"],
      color: "neon-cyan"
    },
    {
      title: "Testing Tools",
      icon: <Wrench className="w-6 h-6 text-neon-blue" />,
      skills: ["MATLAB", "winAMS", "AMUT", "Jenkins", "JIRA", "Postman", "Selenium", "Git/GitHub", "Cypress"],
      color: "neon-blue"
    },
    {
      title: "Development",
      icon: <Code className="w-6 h-6 text-neon-purple" />,
      skills: ["ASP.NET", "VB.NET", "C#", "MS SQL", "MySQL", "MongoDB", "HTML", "CSS", "JavaScript", "React", "Node.js", "Typescript", "PHP", "Next.js", "TailwindCSS"],
      color: "neon-purple"
    },
    {
      title: "Other Skills",
      icon: <Zap className="w-6 h-6 text-neon-cyan" />,
      skills: ["Agile/Scrum", "API Testing", "WordPress", "SDLC / STLC Knowledge", "Bug Tracking & Reporting", "Continuous Integration (CI/CD)", "Root Cause Analysis"],
      color: "neon-cyan"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for quality assurance and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-8 bg-gradient-surface border-2 border-transparent hover:border-neon-cyan/30 shadow-card hover:shadow-glow-primary transition-all duration-500 hover:scale-105 animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-surface rounded-lg shadow-glow-primary animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                   <Badge 
                    key={skill}
                    variant="secondary"
                    className={`
                      px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-110 hover-lift cursor-default
                      ${category.color === 'neon-cyan' ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/20' : ''}
                      ${category.color === 'neon-blue' ? 'bg-neon-blue/10 text-neon-blue border-neon-blue/30 hover:bg-neon-blue/20' : ''}
                      ${category.color === 'neon-purple' ? 'bg-neon-purple/10 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/20' : ''}
                    `}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;