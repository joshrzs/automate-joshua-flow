
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-muted-foreground">
          © {currentYear} Joshua Balando. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
