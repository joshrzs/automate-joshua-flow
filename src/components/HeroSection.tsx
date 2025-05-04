import React, { useRef, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import '../styles/glow.css';  // Correct path
import '../styles/globals.css';  // Correct path



const HeroSection = forwardRef<HTMLElement, {}>((props, ref) => {
  const heroRef = useRef<HTMLElement>(null);

  // You can now use heroRef to interact with the HeroSection DOM, for example:
  // Scroll into view or track visibility
  const handleScrollIntoView = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref || heroRef}  // Attach the ref here to the section element
      className="min-h-screen flex items-center pt-30 pb-10 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-2/3 space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="w-full text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Workflow Automation<br />
                That <span className="text-jorange">Drives</span> Results
              </h1>
              <br />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Automating the boring stuff so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-jorange border-white text-white hover:bg-jorange-dark transform transition-all duration-600 ease-in-out animate-bounce"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Let's Automate <ArrowRight size={16} />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-jgreen border-white text-white hover:bg-jgreen-dark"
              >
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
                <TooltipContent>Automation made simple</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    Make
                  </div>
                </TooltipTrigger>
                <TooltipContent>Advanced workflow automation</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    GHL
                  </div>
                </TooltipTrigger>
                <TooltipContent>High-level marketing automation</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    ChatGPT
                  </div>
                </TooltipTrigger>
                <TooltipContent>AI-powered solutions</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-background/80 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-border/50">
                    Shopify
                  </div>
                </TooltipTrigger>
                <TooltipContent>E-commerce automation</TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Hexagon with glowing effect */}
          <div className="flex items-center justify-center min-h-screen">
  <div className="hexagon-container">
    <img
      src="/lovable-uploads/dp.png"
      alt="Joshua Balando - AI Automation Specialist"
      className="hexagon-img"
    />
  </div>
</div>




        </div>
      </div>
    </section>
  );
});

export default HeroSection;
