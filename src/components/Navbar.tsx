import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', url: 'https://www.regalisrealtymedia.com', target: '_self' },
  { label: 'Portfolio', url: 'https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/', target: '_blank' },
  { label: 'Pricing', url: 'https://pricing.regalisrealtymedia.com', target: '_self' },
  { label: 'Calculator', url: 'https://calculator.regalisrealtymedia.com', target: '_self' },
  { label: 'Catalog', url: 'https://catalog.regalisrealtymedia.com', target: '_self' },
  { label: 'Branding', url: 'https://branding.regalisrealtymedia.com', target: '_self' },
  { label: 'Portal', url: 'https://portal.regalisrealtymedia.com', target: '_self' },
  { label: 'Contact', url: 'https://contact.regalisrealtymedia.com', target: '_self', active: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[70px] bg-black/85 backdrop-blur-md z-[1000] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="https://www.regalisrealtymedia.com" className="flex-shrink-0">
            <img 
              src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" 
              alt="Regalis Realty Media" 
              className="h-[32px] md:h-[38px] w-auto"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.target}
                className={`text-sm font-medium transition-colors duration-200 py-6 ${
                  link.active 
                    ? 'text-[#c9a84c] border-b-2 border-[#c9a84c]' 
                    : 'text-[#D4D4D4] hover:text-white border-b-2 border-transparent'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#D4D4D4] hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[998] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-black/95 backdrop-blur-xl z-[999] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-[70px] border-l border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col py-4 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.target}
              className={`text-[18px] px-6 py-4 border-b border-[#1a1a1a] transition-colors ${
                link.active 
                  ? 'text-[#c9a84c] border-l-4 border-l-[#c9a84c] pl-5' 
                  : 'text-[#D4D4D4] hover:text-white hover:bg-white/5 border-l-4 border-l-transparent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
