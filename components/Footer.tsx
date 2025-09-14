
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-green-500 mb-2">V go Green</h3>
            <p className="text-gray-400">Sustainable Software Solutions for a Better World.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Green Tech Ave,</li>
              <li>Innovation City, 12345</li>
              <li className="pt-2"><a href="mailto:contact@vgogreen.com" className="hover:text-green-400">contact@vgogreen.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-green-400">+1 (234) 567-890</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            {/* Social media icons can be added here */}
            <p className="text-gray-400">Connect with us on social media.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} V go Green Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
