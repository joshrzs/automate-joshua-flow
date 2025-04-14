
import React from 'react';
import { Zap, Database, Bot, FileSpreadsheet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Workflow Automation",
      description: "Connect your tools and automate repetitive tasks with Zapier & Make to save time and reduce errors.",
      icon: <Zap className="text-jorange h-10 w-10" />,
    },
    {
      title: "CRM Integration & Setup",
      description: "Streamline your customer management with GoHighLevel CRM setup, integration, and optimization.",
      icon: <Database className="text-jorange h-10 w-10" />,
    },
    {
      title: "AI-Powered SOP & Task Automation",
      description: "Create efficient standard operating procedures and automate tasks using AI technologies like ChatGPT.",
      icon: <Bot className="text-jorange h-10 w-10" />,
    },
    {
      title: "Data Entry & Management",
      description: "Reliable data entry and management services to keep your information organized and accessible.",
      icon: <FileSpreadsheet className="text-jorange h-10 w-10" />,
    },
  ];

  return (
    <section id="services" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
            My Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solutions I Provide For Your <span className="text-jgreen">Business</span>
          </h2>
          <p className="text-muted-foreground">
            I specialize in creating efficient, automated workflows that save time, reduce errors, and help your business scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale border-t-4 border-t-jgreen">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
