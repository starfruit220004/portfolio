/**
 * SectionHeader
 * Props:
 *   label {string} — small uppercase eyebrow text
 *   title {string} — large serif heading
 */
export default function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <p style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        fontSize: '0.72rem', fontWeight: 500,
        color: '#7BA7D4',
        textTransform: 'uppercase', letterSpacing: '0.22em',
        margin: '0 0 0.9rem',
      }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: '#E8A8C0' }} />
        {label}
      </p>
      <h2 style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 'clamp(2rem, 4vw, 2.6rem)',
        fontWeight: 300,
        color: '#DDEEFF',
        lineHeight: 1.15,
        margin: 0,
      }}>
        {title}
      </h2>
    </div>
  );
}