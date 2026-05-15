const Footer = () => {
  const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

  return (
    <footer style={{
      padding: '1.5rem 1.5rem',
      textAlign: 'center',
      background: '#020202', // Depth Black
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    }}>
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
        <p style={{
          fontFamily: SANS,
          fontSize: '0.7rem',
          fontWeight: 900,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          margin: 0,
          opacity: 0.9
        }}>
          Built with <span style={{ color: '#ff00c8' }}>Passion</span> & <span style={{ color: '#00f2ff' }}>Precision</span>
        </p>

        <p style={{
          fontFamily: SANS,
          fontSize: '0.55rem',
          fontWeight: 700,
          color: 'rgba(255, 255, 255, 0.3)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          margin: 0,
        }}>
           {new Date().getFullYear()} · At Your Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;