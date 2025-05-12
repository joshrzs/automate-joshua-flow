import React, { forwardRef } from 'react';
import { Zap, Database, FileSpreadsheet, Layers3Icon, MailCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Forward ref to ServicesSection component
const ServicesSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
      title: "Funnel Design & Website Creation",
      description: "Design visually appealing and conversion-focused funnels and websites using GoHighLevel’s builder—complete with forms, calendars, and automation integrations.",
      icon: <Layers3Icon className="text-jorange h-10 w-10" />,
    },
    {
      title: "Email & SMS Campaign Setup",
      description: "Create and schedule targeted email and SMS campaigns to engage leads, follow up with clients, and boost overall communication using GHL’s built-in tools.",
      icon: <MailCheck className="text-jorange h-10 w-10" />,
    },
  ];

  return (
    <section id="services" ref={ref} className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
            My Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solutions I Provide For Your <span className="text-jorange">Business</span>
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
});




// Give the component a display name for debugging
ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
