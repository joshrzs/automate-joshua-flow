
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-60 pb-10 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-2/3 space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Hi, I’m Josh👋<span className="text-jgreen">GHL</span>,<br />
              Workflow & Automation Specialist   
              </h1>    
              <br></br>          
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Automating the boring stuff so you don't have to.
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
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    Zapier
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Automation made simple
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    Make
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Advanced workflow automation
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    GHL
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  High-level marketing automation
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    ChatGPT
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  AI-powered solutions
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    Shopify
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  E-commerce automation
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
         
          <div className="lg:w-1/3 relative">
          <div 
               className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden animate-fade-in relative" 
              style={{ 
                animationDelay: '0.2s',
                animation: 'floating 3s ease-in-out infinite'
              }}
            >
              <div className="absolute inset-0 rounded-full bg-jgreen/20 filter blur-xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/Pfp.png" 
                alt="Joshua Balando - AI Automation Specialist" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
