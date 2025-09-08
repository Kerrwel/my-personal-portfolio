import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I’m Kerrwel’s AI assistant. I have limited information for now, but you can ask me about his experience, skills, projects, hobbies, favorite food, where he lives, or even a fun fact. If I can’t answer, I’ll let you know!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // store context for follow-up answers
  const [lastTopic, setLastTopic] = useState<string | null>(null);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes("experience")) {
      setLastTopic("experience");
      return "Kerrwel has 2.5 years of experience as a QA Tester at Denso Makati (AWS), plus internship work as a Full-Stack Developer and freelance WordPress projects.";
    }

    if (message.includes("skills") || message.includes("tech")) {
      setLastTopic("skills");
      return "Kerrwel’s skills include QA Testing (Manual, Static, Regression), Development (ASP.NET, React, Next.js), and tools like MATLAB, Jenkins, and JIRA.";
    }

    if (message.includes("projects") || message.includes("portfolio")) {
      setLastTopic("projects");
      return "Kerrwel has done QA projects focusing on test coverage and automation, plus full-stack web projects and WordPress builds. Check out the Projects section above for more!";
    }

    if (message.includes("hobby") || message.includes("hobbies")) {
      setLastTopic("hobby");
      return "Kerrwel enjoys watching anime in his free time.";
    }

    if (message.includes("food") || message.includes("favorite food")) {
      setLastTopic("food");
      return "Kerrwel’s favorite food is chicken adobo!";
    }

    if (message.includes("live") || message.includes("where") || message.includes("reside")) {
      setLastTopic("location");
      return "Kerrwel currently resides in Montalban, Rizal, but also has ties to Kalayaan Quezon, Lifehomes Pasig, and Makati.";
    }

    if (message.includes("old") || message.includes("age")) {
      setLastTopic("age");
      return "Kerrwel is 28 years old, turning 29 on September 9.";
    }

    if (message.includes("fun fact") || message.includes("fact")) {
      setLastTopic("funfact");
      return "Fun fact: Kerrwel once served as a cross-checker in FL testing, a role usually requiring 3 years of experience, which shows his adaptability and growth!";
    }

    // follow-up handling
    if (
      message.includes("what else") ||
      message.includes("anything more") ||
      message.includes("something else") ||
      message.includes("tell me more") ||
      message.includes("give me another") ||
      message.includes("what other") ||
      message.endsWith("more?") ||
      message.includes("like what") ||
      message.includes("explain more") ||
      message.includes("such as") ||
      message.includes("another")
    ) {
      if (lastTopic === "hobby") {
        return "Aside from anime, Kerrwel also explores tech projects and web development ideas.";
      }
      if (lastTopic === "skills") {
        return "He’s also skilled with Agile/Scrum, MySQL, MongoDB, and full web stack development.";
      }
      if (lastTopic === "projects") {
        return "He also built a futuristic cyberpunk-style portfolio and freelanced on WordPress sites.";
      }
      if (lastTopic === "location") {
        return "He has ties to Kalayaan Quezon, Lifehomes Pasig, and Makati besides Montalban.";
      }
      if (lastTopic === "food") {
        return "He also enjoys other Filipino dishes, but chicken adobo is always his top choice!";
      }
      return "That’s about all I know for now!";
    }


    return "Unfortunately, I have limited information as Kerrwel’s AI assistant. Someday, I’ll be able to share more!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 bg-background/95 backdrop-blur-md border-2 border-neon-cyan/30 shadow-glow-primary z-50 animate-scale-in">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neon-cyan/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Kerrwel's Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.sender === 'user'
                        ? 'bg-neon-cyan text-background'
                        : 'bg-gradient-primary text-background'
                        }`}>
                        {message.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                      </div>
                      <div className={`p-3 rounded-lg ${message.sender === 'user'
                        ? 'bg-neon-cyan text-background'
                        : 'bg-surface border border-neon-cyan/20'
                        }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Bot className="w-3 h-3 text-background" />
                      </div>
                      <div className="bg-surface border border-neon-cyan/20 p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-neon-cyan/20">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="bg-surface border-neon-cyan/30 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:ring-neon-cyan"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-primary hover:shadow-glow-hover"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow-hover transition-all duration-300 transform hover:scale-110 z-50 animate-glow-pulse ${isOpen ? 'rotate-180' : ''
          }`}
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </>
  );
};
