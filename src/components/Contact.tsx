import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help ensure quality and build amazing solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            <Card className="p-8 bg-gradient-surface border-2 border-neon-cyan/20 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface rounded-lg shadow-glow-primary">
                    <MapPin className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Montalban, Rizal, Philippines</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface rounded-lg shadow-glow-primary">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">xxkerrxx23@email.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neon-cyan/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">Find me online</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-surface border border-neon-blue/30 text-center hover:shadow-glow-primary transition-all duration-300">
                <div className="text-2xl font-bold text-neon-blue mb-1">24h</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </Card>
              <Card className="p-4 bg-surface border border-neon-cyan/30 text-center hover:shadow-glow-primary transition-all duration-300">
                <div className="text-2xl font-bold text-neon-cyan mb-1">GMT+8</div>
                <div className="text-xs text-muted-foreground">Time Zone</div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{animationDelay: '0.4s'}}>
            <Card className="p-8 bg-gradient-surface border-2 border-neon-blue/20 shadow-card hover:shadow-glow-primary transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-surface border-neon-cyan/30 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:ring-neon-cyan"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-surface border-neon-cyan/30 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:ring-neon-cyan"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={6}
                    className="bg-surface border-neon-cyan/30 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:ring-neon-cyan resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow-hover transition-all duration-300 transform hover:scale-105 py-3 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;