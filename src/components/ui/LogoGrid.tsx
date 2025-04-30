import React from 'react';

const logos = [
  { src: '/logos/zapier.png', description: 'Automate workflows easily' },
  { src: '/logos/make.png', description: 'Visual automation platform' },
  { src: '/logos/ghl.png', description: 'CRM & automation tool' },
  { src: '/logos/chatgpt.png', description: 'AI assistant chatbot' },
  { src: '/logos/shopify.png', description: 'E-commerce platform' },
  { src: '/logos/calendly.png', description: 'Schedule meetings fast' },
  { src: '/logos/mailchimp.png', description: 'Email marketing tool' },
  { src: '/logos/activecampaign.png', description: 'Marketing automation' },
  { src: '/logos/hubspot.png', description: 'CRM & inbound marketing' },
  { src: '/logos/clickfunnels.png', description: 'Sales funnels made easy' },
  { src: '/logos/slack.png', description: 'Team communication' },
  { src: '/logos/discord.png', description: 'Chat for communities' },
  { src: '/logos/typeform.png', description: 'Interactive forms' },
  { src: '/logos/airtable.png', description: 'Database and collaboration' },
  { src: '/logos/notion.png', description: 'Workspace for notes' },
  { src: '/logos/dropbox.png', description: 'Cloud storage' },
  { src: '/logos/workspace.png', description: 'Google Workspace' },
];

const LogoGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative group flex justify-center items-center p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transition-transform hover:scale-105"
        >
          <img
            src={logo.src}
            alt={`Logo ${index}`}
            className="h-12 w-auto object-contain z-10 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />

          <div className="absolute bottom-full mb-3 px-3 py-1 bg-jorange text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 z-20 whitespace-nowrap">
            {logo.description}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-jorange rotate-45"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
