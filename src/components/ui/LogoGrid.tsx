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
    <div className="relative w-full py-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative group flex justify-center items-center p-4 border-2 border-jgreen rounded-lg"
          >
            {/* Logo */}
            <img
              src={logo.src}
              alt={`Logo ${index}`}
              className="h-12 w-auto object-contain transition duration-300 ease-in-out z-10 group-hover:scale-110 group-hover:shadow-lg"
            />

            {/* Tooltip (Pop-out Bubble) */}
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-jorange text-white px-3 py-1 rounded-lg text-xs z-10">
              <p>{logo.description}</p>
              {/* Bubble Tail */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-3 h-3 bg-jorange rotate-45"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
