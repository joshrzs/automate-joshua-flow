
import React from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#home" className="text-2xl font-bold flex items-center mb-4">
              <span className="text-jgreen">Port</span>
              <span className="text-jorange">folio</span>
            </a>
            <p className="text-muted-foreground mb-6">
              AI Automation Specialist helping businesses save time and scale through smart, automated systems.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-jgreen transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-jgreen transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-jgreen transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-jgreen transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-jgreen transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-jgreen transition-colors">About Me</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-jgreen transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-jgreen transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Workflow Automation</li>
              <li className="text-muted-foreground">CRM Integration & Setup</li>
              <li className="text-muted-foreground">AI-Powered SOP Automation</li>
              <li className="text-muted-foreground">Data Entry & Management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:joshbalando@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-jgreen transition-colors">
                  <Mail size={18} />
                  <span>joshbalando@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span>Cavite, Philippines</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground">
            © {currentYear} Joshua Balando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
