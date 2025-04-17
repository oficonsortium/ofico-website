
import React from 'react';
import { Discord, Linkedin } from '@styled-icons/fa-brands';
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Open Finance Consortium Inc</h3>
            <p className="mb-4 text-gray-400 text-sm">
              Advancing open finance solutions through collaboration, innovation, and education.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/openfinanceconsortium/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://discord.oficonsortium.org/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/privacy-policy')}
                  className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/terms-of-service')}
                  className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/bylaws')}
                  className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                >
                  Bylaws
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Open Finance Consortium Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Non-Profit 501(c)(6) Organization
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
