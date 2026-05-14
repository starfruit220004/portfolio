import { useState, useEffect, useRef } from 'react';
import { SKILLS_LEADGEN, SKILLS_IOT, SKILLS_WEBDEV } from '../data/portfolio';
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
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: hover ? '#FFF' : 'rgba(221,238,255,0.45)',
          fontWeight: hover ? 600 : 400,
          transition: 'all 0.3s ease',
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: "monospace",
          fontSize: '0.75rem',
          color,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease 0.5s'
        }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: '4px',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '0.5px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          height: '100%',
          width: isVisible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}cc, ${color})`,
          borderRadius: '10px',
          boxShadow: hover ? `0 0 12px ${color}44` : 'none',
          transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease',
        }} />
      </div>
    </div>
  );
}

const CATEGORIES = [
  {
    id: 'leadgen',
    label: 'Lead Generation',
    icon: '🎯',
    desc: 'Strategic funnels designed for rapid conversion and pipeline scaling.',
    skillsKey: 'SKILLS_LEADGEN',
    color: '#E8A8C0',
  },
  {
    id: 'iot',
    label: 'IoT & Hardware',
    icon: '🔧',
    desc: 'Bridging physical systems with cloud-native monitoring solutions.',
    skillsKey: 'SKILLS_IOT',
    color: '#7BA7D4',
  },
  {
    id: 'webdev',
    label: 'Web Development',
    icon: '💻',
    desc: 'High-performance full-stack architectures built with modern frameworks.',
    skillsKey: 'SKILLS_WEBDEV',
    color: '#82C9CA',
  },
];

const skillsMap = { SKILLS_LEADGEN, SKILLS_IOT, SKILLS_WEBDEV };

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
        padding: '9rem 2.5rem',
        background: '#0B0E14',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Mesh */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(123,167,212,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader label="Expertise" title="Core Capabilities" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '4rem',
        }}>
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              style={{
                background: 'rgba(18, 22, 33, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '24px',
                padding: '2.5rem',
                backdropFilter: 'blur(12px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.2, 0, 0, 1) ${idx * 0.15}s`,
              }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                border: '0.5px solid rgba(255,255,255,0.1)'
              }}>
                {cat.icon}
              </div>

              <h3 style={{
                fontFamily: "Georgia, serif",
                fontSize: '1.4rem',
                color: '#FFF',
                marginBottom: '0.75rem'
              }}>
                {cat.label}
              </h3>

              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(221,238,255,0.5)',
                lineHeight: '1.6',
                marginBottom: '2rem',
                minHeight: '3rem'
              }}>
                {cat.desc}
              </p>

              <div style={{ marginTop: '2rem' }}>
                {skillsMap[cat.skillsKey].map(s => (
                  <SkillBar 
                    key={s.name} 
                    name={s.name} 
                    level={s.level} 
                    color={cat.color} 
                    isVisible={isVisible}
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