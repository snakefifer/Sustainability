import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4 flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <Fish className="w-8 h-8 text-ocean-blue" />
              <span className="font-heading font-bold text-2xl">Sustainable Fishing</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Promoting responsible fishing practices to preserve our oceans for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-2 flex-1">
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-ocean-blue transition-colors">Home</Link>
              <Link to="/problems" className="text-gray-300 hover:text-ocean-blue transition-colors">The Issues</Link>
              <Link to="/solutions" className="text-gray-300 hover:text-ocean-blue transition-colors">Solutions</Link>
              <Link to="/resources" className="text-gray-300 hover:text-ocean-blue transition-colors">Resources</Link>
              <Link to="/pledge" className="text-gray-300 hover:text-ocean-blue transition-colors">Take Action</Link>
            </nav>
          </div>

          {/* Contact + Socials */}
          <div className="flex flex-col items-center md:items-end space-y-4 flex-1">
            <h3 className="font-heading text-lg mb-4">Contact & Follow</h3>
            <p className="text-gray-300">jwf226@lehigh.edu</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ocean-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ocean-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ocean-blue transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          &copy; {currentYear} Sustainable Fishing for the Future. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
