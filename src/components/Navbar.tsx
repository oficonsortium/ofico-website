
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/58d9bd62-3052-413e-b457-9f7fd52abbab.png" 
              alt="OFi Consortium Logo" 
              className="h-8 w-8 mr-2" 
            />
            <span className="text-lg md:text-xl font-bold text-navy-700">OFi Consortium</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm text-gray-700 hover:text-purple-600 font-medium">
              About
            </a>
            <a href="#programs" className="text-sm text-gray-700 hover:text-purple-600 font-medium">
              Programs
            </a>
            <a href="#team" className="text-sm text-gray-700 hover:text-purple-600 font-medium">
              Team
            </a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-purple-600 font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#programs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </a>
            <a
              href="#team"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
