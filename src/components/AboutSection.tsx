
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
