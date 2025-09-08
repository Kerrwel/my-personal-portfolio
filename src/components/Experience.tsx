import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Code, Laptop } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "QA Tester",
      company: "Denso Makati (AWS)",
      duration: "2.5 years",
      period: "2021 - Present",
      type: "Full-time",
      icon: <Building2 className="w-6 h-6 text-neon-cyan" />,
      description: "Leading quality assurance initiatives for automotive software systems, implementing comprehensive testing strategies and maintaining high standards for safety-critical applications.",
      achievements: [
        "Reduced bug detection time by 60% through systematic testing approaches",
        "Implemented automated test workflows using Jenkins and MATLAB",
        "Maintained 99.9% accuracy in test case execution",
        "Collaborated with international development teams across multiple time zones"
      ],
      technologies: ["MATLAB", "winAMS", "AMUT", "Jenkins", "JIRA", "Agile/Scrum"]
    },
    {
      role: "Full-Stack Developer",
      company: "Internship Program",
      duration: "6 months",
      period: "2021",
      type: "Internship",
      icon: <Code className="w-6 h-6 text-neon-blue" />,
      description: "Gained hands-on experience in full-stack development, working on enterprise applications using modern web technologies and database management systems.",
      achievements: [
        "Developed responsive web applications using ASP.NET and VB.NET",
        "Designed and implemented database schemas using MS SQL",
        "Created RESTful APIs for client-server communication",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["ASP.NET", "VB.NET", "C#", "MS SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      role: "WordPress Developer",
      company: "Freelance",
      duration: "Ongoing",
      period: "2020 - Present",
      type: "Freelance",
      icon: <Laptop className="w-6 h-6 text-neon-purple" />,
      description: "Providing custom WordPress development services to clients worldwide, creating responsive websites and optimizing user experiences for various business verticals.",
      achievements: [
        "Delivered 15+ successful WordPress projects",
        "Achieved 100% client satisfaction rating",
        "Improved website loading speeds by average 40%",
        "Implemented SEO best practices for better search rankings"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "SEO"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A journey through quality assurance excellence and development expertise
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.role + exp.company}
              className="p-8 bg-gradient-surface border-2 border-transparent hover:border-neon-cyan/30 shadow-card hover:shadow-glow-primary transition-all duration-500 hover:scale-[1.02] animate-fade-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left column - Company info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <div className="p-3 bg-surface rounded-lg shadow-glow-primary hover-lift">
                      {exp.icon}
                    </div>
                    <div>
                      <Badge 
                        variant="secondary"
                        className={`mb-2 ${
                          exp.type === 'Full-time' ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30' :
                          exp.type === 'Internship' ? 'bg-neon-blue/10 text-neon-blue border-neon-blue/30' :
                          'bg-neon-purple/10 text-neon-purple border-neon-purple/30'
                        }`}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-neon-blue font-semibold text-lg">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground">
                      {exp.period} • {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Right column - Description and details */}
                <div className="md:col-span-2 space-y-6">
                  <p className="text-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-neon-cyan mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neon-blue mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
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
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;