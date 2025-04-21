import React from 'react';
import { CheckCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const skills = [
    "Zapier & Make Automation",
    "GoHighLevel CRM Workflows",
    "ChatGPT & AI Integration",
    "Shopify Integration",
    "Process Optimization",
    "No-Code/Low-Code Solutions"
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Cavite State University",
      period: "2016-2021"
    },
    {
      degree: "Professional Diploma of Virtual Executive Assistant",
      institution: "MTF Institute | Udemy",
      period: "2024"
    }
  ];

  return (
    <section id="about" className="relative border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image Section - Order First on Mobile, Last on Desktop */}
          <div className="order-1 lg:order-2 w-[28rem] sm:w-[36rem] md:w-[46rem] lg:w-[52rem] h-auto overflow-hidden relative mx-auto">
            <img
              src="/lovable-uploads/aboutsec.png"
              alt="Joshua Balando - AI Automation Specialist"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Content Section - Order Last on Mobile, First on Desktop */}
          <div className="order-2 lg:order-1 lg:w-3/5">
            <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who's Behind All This <span className="text-jorange">Great Work?</span>
            </h2>

            <p className="text-muted-foreground mb-6">
              Hi, I’m Joshua Balando - Filipino AI Automation Specialist with a degree in IT
              and years of experience in data entry and administrative support. I started my journey
              handling repetitive, time-consuming tasks — and that’s exactly what sparked my passion
              for automation.
            </p>

            <p className="text-muted-foreground mb-8">
              After seeing firsthand how much time and energy gets wasted on manual work, I made it my mission to help
              businesses streamline their operations through smart, automated systems. I’ve since transitioned into the AI
              automation space, where I now specialize in building efficient workflows using tools like Zapier, Make, and
              GoHighLevel — all without the need for complex coding.
            </p>

            <div className="h-4" />

            <p className="text-muted-foreground mb-4 font-semibold">What I Bring to the Table:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-jgreen h-5 w-5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-jgreen h-5 w-5" />
                <h3 className="text-lg font-medium">Education & Certification</h3>
              </div>
              <div className="space-y-4 pl-7">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-jgreen pl-4 py-1">
                    <p className="font-medium">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.institution} | {item.period}</p>
                  </div>
                ))}
              </div>
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
