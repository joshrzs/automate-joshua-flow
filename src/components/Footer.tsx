import React from 'react';
import { Briefcase, Globe, Linkedin } from 'lucide-react'; // Lucide React icons for brand logos

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Title and Divider on One Line */}
        <div className="flex items-center justify-between sm:justify-center space-x-4 mb-6">
          <h5 className="text-white font-semibold text-2xl">
            <span className="text-jorange">Connect</span> with Me
          </h5> {/* Increased font size */}
          <span className="text-jorange text-2xl hidden sm:inline">|</span> {/* Divider only visible on larger screens */}

          {/* Social Links on the Same Line */}
          <div className="flex space-x-6 text-muted-foreground text-xl">
            <a
              href="https://www.upwork.com/freelancers/~0174191a59d8f95807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-jorange transition-colors duration-300"
            >
              <Briefcase size={22} className="text-jorange hover:text-jorange" />
              <span className="text-sm mt-2">Upwork</span>
            </a>
            <a
              href="https://www.onlinejobs.ph/jobseekers/info/1101864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-jorange transition-colors duration-300"
            >
              <Globe size={22} className="text-jorange hover:text-jorange" />
              <span className="text-sm mt-2">OLJ</span>
            </a>
            <a
              href="https://www.linkedin.com/in/joshrzs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-jorange transition-colors duration-300"
            >
              <Linkedin size={22} className="text-jorange hover:text-jorange" />
              <span className="text-sm mt-2">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm pt-6 text-center">
          © {currentYear} Joshua Balando. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
