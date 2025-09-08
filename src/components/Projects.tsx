import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TestTube, Code, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Test Suite Implementation",
      category: "QA Testing",
      description: "Developed comprehensive test coverage strategy and implemented automated workflows using Jenkins for continuous integration at Denso Makati.",
      technologies: ["Jenkins", "JIRA", "MATLAB", "Regression Testing"],
      icon: <TestTube className="w-6 h-6 text-neon-cyan" />,
      type: "qa",
      highlights: ["95% test coverage", "40% faster deployment", "Zero critical bugs in production"]
    },
    {
      title: "E-commerce Platform Testing",
      category: "QA Testing", 
      description: "Led manual testing initiatives for a high-traffic e-commerce platform, implementing boundary value analysis and decision table testing methodologies.",
      technologies: ["Manual Testing", "API Testing", "Decision Tables", "Agile"],
      icon: <TestTube className="w-6 h-6 text-neon-blue" />,
      type: "qa",
      highlights: ["500+ test cases executed", "Cross-browser compatibility", "Performance optimization"]
    },
    {
      title: "Full-Stack Portfolio Website",
      category: "Web Development",
      description: "Built a responsive portfolio website using modern web technologies with focus on performance and user experience.",
      technologies: ["React", "Next.js", "TailwindCSS", "MongoDB"],
      icon: <Code className="w-6 h-6 text-neon-purple" />,
      type: "development",
      highlights: ["100% Lighthouse score", "Responsive design", "SEO optimized"]
    },
    {
      title: "WordPress Business Sites",
      category: "Web Development",
      description: "Created custom WordPress solutions for multiple clients, focusing on responsive design and conversion optimization.",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      icon: <Globe className="w-6 h-6 text-neon-cyan" />,
      type: "development",
      highlights: ["15+ live websites", "Custom themes", "Client satisfaction"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of quality assurance excellence and full-stack development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group p-8 bg-gradient-surface border-2 border-transparent hover:border-neon-cyan/30 shadow-card hover:shadow-glow-primary transition-all duration-500 hover:scale-105 animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4 mb-6">
               <div className="p-3 bg-surface rounded-lg shadow-glow-primary hover-lift">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <Badge 
                    variant="secondary" 
                    className={`mb-2 ${
                      project.type === 'qa' 
                        ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30' 
                        : 'bg-neon-purple/10 text-neon-purple border-neon-purple/30'
                    }`}
                  >
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-neon-blue mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-neon-cyan rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                     <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs bg-surface-light border-neon-blue/20 text-neon-blue hover:bg-neon-blue/10 hover-scale"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  size="sm"
                  className="bg-gradient-primary hover:shadow-glow-hover transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                {project.type === 'development' && (
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;