
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#platform', label: 'Platform' },
  { href: '/#members', label: 'Members' },
  { href: '/#team', label: 'Directors' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="/lovable-uploads/c535af6e-c90e-483d-9992-77810cca322f.png"
              alt="OFi Consortium Logo"
              className="h-9 w-auto"
            />
            <span className="text-lg font-semibold text-navy-800 tracking-tight">
              OFi Consortium
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy-700 rounded-lg hover:bg-gray-50/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-navy-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
