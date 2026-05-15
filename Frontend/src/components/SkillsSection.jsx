import { useState, useEffect, useRef } from 'react';
// Assuming these are your updated data imports
import { SKILLS_WEBDEV, SKILLS_LEADGEN, SKILLS_BACKEND } from '../data/portfolio';
import SectionHeader from './SectionHeader';

function SkillBar({ name, level, color, isVisible }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ marginBottom: '1.25rem' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{
          fontFamily: "Inter, sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: hover ? color : '#333',
          fontWeight: 800,
          transition: 'all 0.3s ease',
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: "monospace",
          fontSize: '0.85rem',
          color: '#000',
          fontWeight: 700,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease 0.5s'
        }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: '8px',
        background: 'rgba(0,0,0,0.08)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: isVisible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}aa, ${color})`,
          boxShadow: hover ? `0 0 15px ${color}` : 'none',
          transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease',
        }} />
      </div>
    </div>
  );
}

const CATEGORIES = [
  {
    id: 'webdev',
    label: 'Frontend Development',
    icon: '✨',
    desc: 'Crafting immersive, high-performance user interfaces with React and modern CSS.',
    skillsKey: 'SKILLS_WEBDEV',
    color: '#00f2ff', // Electric Cyan
  },
  {
    id: 'backend',
    label: 'Backend & Systems',
    icon: '⚙️',
    desc: 'Scalable server-side logic and database architectures using Node.js and Django.',
    skillsKey: 'SKILLS_BACKEND', // New category to replace IoT
    color: '#bc13fe', // Neon Purple
  },
  {
    id: 'leadgen',
    label: 'Lead Gen & Strategy',
    icon: '🎯',
    desc: 'Optimizing conversion funnels and digital marketing automation for growth.',
    skillsKey: 'SKILLS_LEADGEN',
    color: '#ff00c8', // Magenta
  },
];

const skillsMap = { SKILLS_WEBDEV, SKILLS_BACKEND, SKILLS_LEADGEN };

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      style={{
        padding: '4rem 2.5rem 8rem 2.5rem',
        background: '#050505',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Neon Auroras */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader label="Expertise" title="Technical Mastery" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginTop: '5rem',
        }}>
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f9f9f9)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderBottom: `6px solid ${cat.color}`,
                borderRadius: '32px',
                padding: '3rem',
                backdropFilter: 'blur(20px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s cubic-bezier(0.2, 0, 0, 1) ${idx * 0.2}s`,
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1), 
                            0 10px 20px ${cat.color}15,
                            inset 0 0 15px rgba(255, 255, 255, 0.5)`,
              }}
            >
              <div style={{ 
                width: '80px', height: '80px', 
                background: '#0a0a0f', 
                borderRadius: '24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.6rem', marginBottom: '2.2rem',
                border: `4px solid ${cat.color}`,
                boxShadow: `0 12px 30px ${cat.color}44`,
                position: 'relative',
                transform: 'translateY(-10px)'
              }}>
                {cat.icon}
              </div>

              <h3 style={{
                fontFamily: 'serif', fontSize: '1.8rem',
                color: '#000000', marginBottom: '1rem',
                fontWeight: 900,
                display: 'flex', alignItems: 'center', gap: '10px'
              }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: cat.color }} />
                {cat.label}
              </h3>

              <p style={{
                fontSize: '1rem', color: '#1a1a1a',
                fontWeight: 600,
                lineHeight: '1.6', marginBottom: '2.5rem', minHeight: '3.5rem'
              }}>
                {cat.desc}
              </p>

              <div>
                {skillsMap[cat.skillsKey].map(s => (
                  <SkillBar 
                    key={s.name} name={s.name} level={s.level} 
                    color={cat.color} isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
