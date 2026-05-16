import { useState, useEffect, useRef } from 'react';
// Assuming these are your updated data imports
import { SKILLS_WEBDEV, SKILLS_LEADGEN, SKILLS_BACKEND } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import { Sparkles, Cpu, Target } from 'lucide-react';

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
    icon: <Sparkles size={32} />,
    desc: 'Crafting immersive, high-performance user interfaces with React and modern CSS.',
    skillsKey: 'SKILLS_WEBDEV',
    color: '#00f2ff', // Electric Cyan
  },
  {
    id: 'backend',
    label: 'Backend & Systems',
    icon: <Cpu size={32} />,
    desc: 'Scalable server-side logic and database architectures using Node.js and Django.',
    skillsKey: 'SKILLS_BACKEND', // New category to replace IoT
    color: '#bc13fe', // Neon Purple
  },
  {
    id: 'leadgen',
    label: 'Lead Gen & Strategy',
    icon: <Target size={32} />,
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="reveal-on-scroll opacity-0 py-20 md:py-32 px-6 md:px-10 bg-[#050505] relative overflow-hidden"
    >
      {/* Background Neon Auroras */}
      <div className="animate-float absolute top-[20%] left-[-10%] w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(0,242,255,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Expertise" title="Technical Mastery" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-20">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className={`reveal-on-scroll opacity-0 delay-${(idx + 1) * 100} bg-white border border-white border-b-[6px] rounded-[2rem] p-8 md:p-12 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,242,255,0.05)] hover:-translate-y-2`}
              style={{ borderBottomColor: cat.color }}
            >
              <div 
                className="w-16 h-16 bg-[#0a0a0f] rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-lg"
                style={{ color: cat.color }}
              >
                {cat.icon}
              </div>

              <h3 className="font-serif text-2xl text-black mb-4 font-black flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
                {cat.label}
              </h3>

              <p className="text-sm md:text-base text-black/80 font-bold leading-relaxed mb-8 min-h-[4rem]">
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
