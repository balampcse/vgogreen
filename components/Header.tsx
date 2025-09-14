
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-green-700">
          V go Green
        </a>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-green-700 font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all duration-300 font-semibold shadow-sm">
          Get a Quote
        </a>
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;
