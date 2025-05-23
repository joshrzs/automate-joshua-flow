import React, { forwardRef } from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';
import '../styles/glow.css';  // Correct path
import '../styles/globals.css';  // Correct path

// Forward ref to AboutSection component
const AboutSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
                Hi, I’m Josh - an AI Automation Specialist. With a degree in IT and years of hands-on experience in data entry and administrative support. I started my journey 
                handling repetitive, time-consuming tasks - and that’s exactly what sparked my passion
                for automation.
              </p>

              <p className="text-muted-foreground mb-8">
                After seeing firsthand how much time and energy gets wasted on manual work, I made it my mission to help
                businesses streamline their operations through smart, automated systems. I’ve since transitioned into the AI
                automation space, where I now specialize in building efficient workflows using tools like Zapier, Make, and
                GoHighLevel - all without the need for complex coding.
              </p>
            </div>
          </div>

          <div className="lg:w-2/5 w-full flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <div className="w-full max-w-[340px] mb-6">
              <div className="about-outer-wrapper">
                {/* Hexagon with glowing effect */}
                <div className="flex items-center justify-center py-3">
                  <div className="hexagon-outer-wrapper relative">
                    {/* Background Rectangle Behind */}
                    <div className="hexagon-shadow-bg"></div>

                    {/* Main Glowing Hexagon */}
                    <div className="hexagon-container relative z-10">
                      <div className="hexagon-img-wrapper">
                        <img
                          src="/lovable-uploads/dp.png"
                          alt="Joshua Balando - AI Automation Specialist"
                          className="hexagon-img dp-glow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moved Education & Job Experience section further upward */}
        <div className="lg:w-2/5 w-full mt-0 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-jorange h-9 w-9" />
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              Education & <span className="text-jorange">Job Experience</span>
            </h3>
          </div>
          <ul className="list-none pl-0 space-y-4">
            {education.map((item, index) => (
              <li key={index} className="flex items-start text-foreground font-bold">
                <CheckCircle className="text-jgreen mr-5 h-7 w-7 mt-1" />
                <div>
                  <p className="font-bold">{item.degree}</p>
                  <p className="text-base text-muted-foreground font-normal">
                    {item.institution} | {item.period}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
