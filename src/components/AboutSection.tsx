import React from 'react';
import { CheckCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoSlider from '@/components/ui/LogoSlider';


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
        <div className="mb-8">
          {/* Heading Section - Always on Top */}
          <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who's Behind All This <span className="text-jorange">Great Work?</span>
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-start gap-12">
          {/* Text Content Section */}
          <div className="w-full lg:w-3/5">
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

            <br />
            <br />
            <br />

            <div className="mb-8">
  <p className="text-3xl md:text-4xl font-bold mb-6">Tools I <span className="text-jorange">Work With</span>
  </p>
  <LogoSlider />
</div>
    
          </div>

          {/* Right Column: Image + Education */}
          <div className="lg:w-2/5 w-full flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            {/* Image Section */}
            <div className="w-full max-w-[340px] mb-6">

              <img
                src="/lovable-uploads/aboutsec.png"
                alt="Joshua Balando - AI Automation Specialist"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Education Section */}
            <div className="w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;





