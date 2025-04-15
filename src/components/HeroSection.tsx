
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-2/3 space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Hi, I'm <span className="text-jgreen">Josh</span>
              </h1>
              <Badge variant="secondary" className="text-lg bg-background/50 backdrop-blur-sm">
                Your AI-Powered Partner
              </Badge>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              I help you streamline your workflow through smart, automated systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button asChild size="lg" className="bg-jgreen hover:bg-jgreen-dark">
                <a href="#contact">Let's Automate</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-jgreen text-jgreen hover:bg-jgreen/10">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work <ArrowRight size={16} />
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-start pt-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="bg-background shadow-sm rounded-full px-4 py-2 text-sm font-medium">Zapier</div>
              <div className="bg-background shadow-sm rounded-full px-4 py-2 text-sm font-medium">Make</div>
              <div className="bg-background shadow-sm rounded-full px-4 py-2 text-sm font-medium">GHL</div>
              <div className="bg-background shadow-sm rounded-full px-4 py-2 text-sm font-medium">ChatGPT</div>
              <div className="bg-background shadow-sm rounded-full px-4 py-2 text-sm font-medium">Shopify</div>
            </div>
          </div>
          <div className="lg:w-1/3 relative">
            <div 
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden mx-auto animate-fade-in animate-bounce-slow" 
              style={{ 
                animationDelay: '0.2s',
                animation: 'floating 3s ease-in-out infinite'
              }}
            >
              <style>
                {`
                  @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                  }
                  .animate-bounce-slow {
                    animation: floating 3s ease-in-out infinite;
                  }
                `}
              </style>
              <img 
                src="/lovable-uploads/b5a600a2-8bc4-47d0-98e3-e35daf57a0bb.png" 
                alt="Joshua Balando - AI Automation Specialist" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
