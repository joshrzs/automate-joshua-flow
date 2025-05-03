import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference stored
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className={`${darkMode ? 'text-muted-foreground' : 'text-jorange'}`} />
      <Switch 
        checked={darkMode} 
        onCheckedChange={toggleTheme} 
        className={`${darkMode ? 'bg-jgreen' : 'bg-jorange'} rounded-full`}  // Ensure the switch is rounded and green when dark mode is active
      />
      <Moon size={18} className={`${darkMode ? 'text-jgreen' : 'text-muted-foreground'}`} />
    </div>
  );
};

export default ThemeToggle;
