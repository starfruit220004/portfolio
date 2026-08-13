import { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const NAV_LINKS = ['About', 'Work', 'Skills', 'Contact'];
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = '';
      if (window.scrollY < 100) {
        current = NAV_LINKS[0].toLowerCase();
      } else {
        NAV_LINKS.forEach(link => {
          const el = document.getElementById(link.toLowerCase());
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              current = link.toLowerCase();
            }
          }
        });
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? 'h-16 bg-[#0F172A]/90 backdrop-blur-md border-white/10 shadow-lg' 
          : 'h-20 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* LEFT SIDE: Humorous Phrase */}
        <div className="flex items-center gap-3">
          <Coffee size={18} className="text-white animate-pulse" />
          <span className="text-white text-[0.6rem] md:text-[0.7rem] font-black uppercase tracking-[0.2em] hidden sm:block">
            Powered by Coffee & Ambition
          </span>
          <span className="text-white text-[0.7rem] font-black uppercase tracking-[0.2em] sm:hidden">
            Dev
          </span>
        </div>

        {/* RIGHT SIDE: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.toLowerCase();
            const highlightColor = isActive ? '#22D3EE' : '#FFFFFF'; 

            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link px-4 py-2 rounded-lg text-[0.75rem] font-black uppercase tracking-widest transition-all duration-300 relative group"
                style={{
                  color: isActive ? highlightColor : '#FFFFFF',
                  background: isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                  border: isActive ? `1px solid ${highlightColor}44` : '1px solid transparent',
                  textShadow: isActive ? `0 0 10px ${highlightColor}44` : 'none',
                }}
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`absolute top-full left-0 right-0 bg-[#0F172A] border-b border-white/10 transition-all duration-500 overflow-hidden md:hidden ${
          mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white text-lg font-black uppercase tracking-widest hover:text-[#FFFFFF] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          color: #FFFFFF !important;
          background: rgba(255, 255, 255, 0.05) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </nav>
  );
}