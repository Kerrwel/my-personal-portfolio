import { Card } from "@/components/ui/card";
import { GraduationCap, FileDown } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image Section */}
          <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="sticky top-24">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-surface p-3 shadow-glow-primary">
                  <img
                    src={
                      theme === "dark"
                        ? "/image-uploads/profile-dark.png"
                        : "/image-uploads/profile-light.png"
                    }
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
              <Card className="p-4 bg-gradient-surface border-2 border-neon-blue/20 text-center mt-6 space-y-3">
                {/* Location */}
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-1">📍 Based in Philippines</h3>
                  <p className="text-sm text-muted-foreground">
                    Passionate about QA, web development, and continuous learning.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-1">🎓 Education</h3>
                  <p className="text-sm text-muted-foreground">
                    BSIT Graduate – (2021-2022)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Magna Cum Laude
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {/* Bio */}
            <Card className="p-8 bg-gradient-surface border-2 border-neon-cyan/20 shadow-card hover:shadow-glow-primary transition-all duration-500">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                With <span className="text-neon-cyan font-semibold">2.5 years of QA experience</span> at
                <span className="text-neon-blue font-semibold"> Denso Makati (AWS)</span>, I’ve honed a
                <span className="text-neon-cyan font-semibold"> systematic approach to testing</span> that ensures
                software reliability and quality. My role involved thorough manual and static testing, collaborating
                in Agile teams, and contributing to projects where precision and efficiency were critical.
              </p>

              <p className="text-lg leading-relaxed text-foreground mb-6">
                My journey began with an <span className="text-neon-purple font-semibold">internship as a full-stack developer</span>,
                where I built applications while gaining insight into testing from the developer’s perspective.
                This dual background helps me write cleaner code and anticipate issues early in the development cycle.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                Today, I also work as a <span className="text-neon-cyan font-semibold">freelance WordPress developer</span>,
                creating <span className="text-neon-blue font-semibold">custom, responsive websites</span> that help businesses
                strengthen their online presence. Whether ensuring product quality or delivering functional web solutions,
                I’m passionate about building technology that works seamlessly and adds real value.
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

            {/* Resume Download Button */}
            <div className="text-center mt-8">
              <a
                href="public/resume/Kerrwel Nor -Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-background rounded-xl shadow-glow-primary hover:scale-105 transition-transform"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
