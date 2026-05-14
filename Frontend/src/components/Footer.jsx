const Footer = () => {
  const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

  return (
    <footer style={{
      padding: '4rem 2.5rem',
      textAlign: 'center',
      background: '#020202', // Depth Black
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    }}>
      
      {/* Subtle bottom glow to match the Hero aesthetic */}
      <div style={{
        absolute: 'absolute',
        bottom: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '100px',
        background: 'linear-gradient(90deg, #00f2ff, #ff00c8)',
        filter: 'blur(80px)',
        opacity: 0.1,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: SANS,
          fontSize: '0.85rem',
          fontWeight: 900,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.4em',
          margin: '0 0 1rem',
          opacity: 0.9
        }}>
          Built with <span style={{ color: '#ff00c8' }}>Passion</span> & <span style={{ color: '#00f2ff' }}>Precision</span>
        </p>

        <div style={{
          height: '1px',
          width: '40px',
          background: 'linear-gradient(90deg, #00f2ff, #ff00c8)',
          margin: '1.5rem auto',
          opacity: 0.5
        }} />

        <p style={{
          fontFamily: SANS,
          fontSize: '0.65rem',
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