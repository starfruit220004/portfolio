const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 2.5rem',
      textAlign: 'center',
      background: '#0C1220',
      borderTop: '0.5px solid rgba(123, 167, 212, 0.12)',
    }}>
      <p style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: '1rem',
        color: 'rgba(221, 238, 255, 0.4)',
        margin: '0 0 0.4rem',
      }}>
        Star<span style={{ color: '#E8A8C0' }}>.</span> — Built with curiosity &amp; coffee ☕
      </p>
      <p style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        fontSize: '0.7rem',
        color: 'rgba(123, 167, 212, 0.35)',
        letterSpacing: '0.1em',
        margin: 0,
      }}>
        Philippines · {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;