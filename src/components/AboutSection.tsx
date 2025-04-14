
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const skills = [
    "Zapier & Make Expert",
    "GoHighLevel CRM Specialist",
    "ChatGPT & AI Integration",
    "Shopify Integration",
    "Process Optimization",
    "No-Code/Low-Code Solutions"
  ];

  return (
    <section id="about" className="relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-jgreen/20 to-jorange/20 rounded-2xl"></div>
                <img 
                  src="/lovable-uploads/32373d5d-df60-4058-befb-1db1e7b0a1c6.png" 
                  alt="Joshua Balando" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background shadow-lg rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-jgreen/10 text-jgreen p-3 md:p-4 rounded-full">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="text-xl md:text-2xl font-bold">4+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who's Behind All This <span className="text-jgreen">Great Work?</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              I'm Joshua Balando, an AI Automation Specialist who transitioned from a data entry role to become
              an expert in business automation. With over 4 years of experience, I've dedicated my career to helping businesses
              eliminate repetitive tasks and create streamlined processes.
            </p>
            
            <p className="text-muted-foreground mb-8">
              My focus is efficiency through no-code/low-code tools like Zapier, Make, and GoHighLevel, combined with
              the power of AI. I believe that well-designed automated systems are the key to scaling businesses
              without proportionally increasing workload.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-jgreen h-5 w-5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-jgreen hover:bg-jgreen-dark">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
