import { SiDiscord, SiOpencollective } from '@icons-pack/react-simple-icons';
import { Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <footer className="bg-navy-950 text-gray-400">
      <div className="container mx-auto py-16 px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/lovable-uploads/c535af6e-c90e-483d-9992-77810cca322f.png"
                alt="OFi Consortium Logo"
                className="h-8 w-auto brightness-0 invert opacity-80"
              />
              <span className="text-base font-semibold text-white/90">OFi Consortium</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm mb-6 leading-relaxed">
              Advancing open finance solutions through collaboration, innovation, and education.
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://www.linkedin.com/company/openfinanceconsortium/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://discord.oficonsortium.org/', icon: SiDiscord, label: 'Discord' },
                { href: 'https://opencollective.com/ofico', icon: SiOpencollective, label: 'Open Collective' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms of Service', path: '/terms-of-service' },
                { label: 'Bylaws', path: '/bylaws' },
              ].map(item => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Open Finance Consortium Inc. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">Non-Profit 501(c)(6) Organization</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
