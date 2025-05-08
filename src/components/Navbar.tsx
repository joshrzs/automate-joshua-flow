import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import "../styles/glow.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 md:fixed md:top-0 md:left-0 w-full z-50 navbar-glow transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="w-10"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-10 text-base md:text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-foreground hover:text-jorange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-foreground focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 glowing-lines">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background py-4 px-6">
          <ul className="space-y-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-foreground hover:text-jorange transition-colors duration-300"
                  onClick={handleLinkClick} // Close the menu when a link is clicked
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
