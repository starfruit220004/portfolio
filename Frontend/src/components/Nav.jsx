import { useState, useEffect } from 'react';

const NAV_LINKS = ['Work', 'Skills', 'Contact'];
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Update Navbar Background
      setScrolled(window.scrollY > 40);

      // 2. Determine Active Section
      let current = '';
      
      // If we are at the very top, no section is active
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      NAV_LINKS.forEach(link => {
        const el = document.getElementById(link.toLowerCase());
        // Using offsetTop - 120 to trigger the "active" state slightly before 
        // the section hits the top of the viewport
        if (el && window.scrollY >= el.offsetTop - 120) {
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
      zIndex: 50,
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 2.5rem',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(11, 14, 20, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '0.5px solid rgba(126,178,221,0.14)' : '0.5px solid transparent',
    }}>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {NAV_LINKS.map(link => {
          const isActive = activeSection === link.toLowerCase();
          
          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: SANS,
                fontSize: '0.72rem',
                fontWeight: 400,
                color: isActive ? '#7EB2DD' : 'rgba(230,230,230,0.5)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                transition: 'all 0.2s ease',
                padding: '0.35rem 0.75rem',
                borderRadius: '4px',
                border: isActive ? '1px solid rgba(126,178,221,0.28)' : '1px solid transparent',
                background: isActive ? 'rgba(126,178,221,0.07)' : 'transparent',
              }}
              onMouseEnter={e => { 
                if (!isActive) e.currentTarget.style.color = '#7EB2DD'; 
              }}
              onMouseLeave={e => { 
                if (!isActive) e.currentTarget.style.color = 'rgba(230,230,230,0.5)'; 
              }}
            >
              {link}
            </a>
          );
        })}
      </div>
    </nav>
  );
}