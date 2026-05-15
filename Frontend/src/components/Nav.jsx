import { useState, useEffect } from 'react';

const NAV_LINKS = ['Work', 'Skills', 'Contact'];
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = '';
      NAV_LINKS.forEach(link => {
        const el = document.getElementById(link.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 150) {
          current = link.toLowerCase();
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2.5rem',
      transition: 'all 0.4s ease',
      background: scrolled
        ? 'linear-gradient(90deg, #6414a0 0%, #b92373 100%)' 
        : 'linear-gradient(90deg, #7828b4 0%, #c83282 100%)',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    }}>
      
      {/* LEFT SIDE: Humorous Phrase ONLY (Removed "Status:") */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#ffffff', 
          boxShadow: '0 0 15px #ffffff',
          animation: 'pulse 2s infinite'
        }} />
        <span style={{
          fontFamily: SANS,
          fontSize: '0.75rem',
          fontWeight: 900, 
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          Powered by Coffee & Ambition
        </span>
      </div>

      {/* RIGHT SIDE: Navigation Links */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {NAV_LINKS.map(link => {
          const isActive = activeSection === link.toLowerCase();
          const highlightColor = '#00f2ff'; 

          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: SANS,
                fontSize: '0.8rem',
                fontWeight: 800,
                color: isActive ? highlightColor : '#ffffff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1.2rem',
                borderRadius: '8px',
                textShadow: isActive ? `0 0 15px ${highlightColor}` : 'none',
                background: isActive ? 'rgba(0, 242, 255, 0.15)' : 'transparent',
                border: isActive ? `1px solid ${highlightColor}` : '1px solid transparent',
              }}
            >
              {link}
            </a>
          );
        })}
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 0 5px #ffffff; }
          50% { transform: scale(1.3); opacity: 0.7; box-shadow: 0 0 20px #ffffff; }
          100% { transform: scale(1); opacity: 1; box-shadow: 0 0 5px #ffffff; }
        }
      `}</style>
    </nav>
  );
}