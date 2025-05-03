import React, { forwardRef } from 'react';
import { BrainCircuit, BrainCog, BrainCogIcon, BrainIcon, CheckCircle, CloudCog, CogIcon, GraduationCap, Heading1, LucideWrench, PenOffIcon, PenSquare, PenToolIcon, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoSliderCards from '@/components/ui/LogoSliderCards';

// Forward ref to AboutSection component
const AboutSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const skills = [
    "GoHighLevel CRM Workflows",
    "Zapier & Make Automation",
    "API & Webhook Integrations",
    "CRM Data Management",
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
      degree: "Inventory Clerk",
      institution: "Sonic Steel Industries",
      period: "2020-2022"
    },
    {
      degree: "Data Entry Specialist",
      institution: "Victory Group 88",
      period: "2023-2024"
    }
  ];

  return (
    <section id="about" className="relative border-t border-border" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who's Behind All This <span className="text-jorange">Great Work?</span>
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-start gap-12">
          <div className="w-full lg:w-3/5">
            <div className="p-8 rounded-lg shadow-lg mb-8">
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
            </div>

            <div className="mb-8 mt-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
                <PenSquare className="text-jorange h-7 w-7" />
              Skills & <span className="text-jorange">Expertise</span>
              </h3>
              <ul className="list-none pl-0 space-y-4">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start text-foreground font-bold">
                    <CheckCircle className="text-jgreen mr-3 h-5 w-5 mt-1" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 mt-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
                <Wrench className="text-jorange h-7 w-7" />
                Tools I <span className="text-jorange">Work With</span>
              </h3>
              <LogoSliderCards />
            </div>
          </div>

          <div className="lg:w-2/5 w-full flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <div className="w-full max-w-[340px] mb-6">
              <img
                src="/lovable-uploads/aboutsec.png"
                alt="Joshua Balando - AI Automation Specialist"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-jorange h-5 w-5" />
                <h3 className="text-lg font-medium">Education & <span className="text-jorange">Job Experience</span></h3>
              </div>
              <ul className="list-none pl-0 space-y-4">
                {education.map((item, index) => (
                  <li key={index} className="flex items-start text-foreground font-bold">
                    <CheckCircle className="text-jgreen mr-3 h-5 w-5 mt-1" />
                    <div>
                      <p className="font-bold">{item.degree}</p>
                      <p className="text-sm text-muted-foreground font-normal">
                        {item.institution} | {item.period}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// Give the component a display name for debugging
AboutSection.displayName = 'AboutSection';

export default AboutSection;
