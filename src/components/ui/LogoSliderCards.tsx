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

const LogoSliderCards = () => {
  return (
    <div className="relative overflow-hidden w-full py-8">
      <div className="animate-slide flex w-max gap-0 logo-slider">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="relative group w-28 h-28 -ml-10 first:ml-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md transition-all duration-300 hover:scale-110 hover:z-50 cursor-pointer flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={`Logo ${index}`}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />

            {/* Description Box positioned at the top-right */}
            <div className="absolute top-0 right-0 mt-3 mr-3 px-3 py-1 bg-jorange text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 z-50 whitespace-nowrap">
              {logo.description}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-jorange rotate-45"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Regular <style> tag without jsx */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-slide {
            animation: slide 20s linear infinite;
          }

          .logo-slider:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default LogoSliderCards;
