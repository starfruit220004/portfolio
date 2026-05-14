import { useState, useCallback } from 'react';
import { WORKS } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function WorkCarousel() {
  const [active, setActive] = useState(0);
  const total = WORKS.length;
  const w = WORKS[active];

  const next = useCallback(() => setActive(a => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total]);

  return (
    <section id="work" className="py-24 px-6 md:px-20 bg-[#0B0E14] relative overflow-hidden">
      {/* Background soft glow to fill space */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7BA7D4] opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader label="Expertise & Portfolio" title="What I Do" />

        {/* MAIN DUAL-CARD CONTAINER */}
        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: The "Business/Lead Gen" Side (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 bg-[#0C1220] border border-[rgba(123,167,212,0.1)] p-8 rounded-3xl backdrop-blur-md relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[#E8A8C0] text-[0.65rem] uppercase tracking-[0.3em] font-bold">Conversion Focus</span>
                <h3 className="text-3xl font-serif text-white mt-4 mb-4">Lead Generation</h3>
                <p className="text-[#DDEEFF]/50 text-sm leading-relaxed mb-6">
                  I don't just build sites; I build funnels. I focus on high-conversion landing pages, automated lead capture, and SEO strategies that turn visitors into clients.
                </p>
                <ul className="space-y-3">
                  {['Automated Email Funnels', 'High-ROAS Landing Pages', 'Lead Scrapers & CRM Integration'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-[#7BA7D4] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A8C0]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Stats Grid to fill space */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0C1220]/50 border border-[rgba(123,167,212,0.05)] p-6 rounded-2xl text-center">
                <div className="text-[#7BA7D4] text-2xl font-serif">15%</div>
                <div className="text-[rgba(221,238,255,0.3)] text-[0.6rem] uppercase tracking-widest mt-1">Avg. Conversion</div>
              </div>
              <div className="bg-[#0C1220]/50 border border-[rgba(123,167,212,0.05)] p-6 rounded-2xl text-center">
                <div className="text-[#E8A8C0] text-2xl font-serif">10k+</div>
                <div className="text-[rgba(221,238,255,0.3)] text-[0.6rem] uppercase tracking-widest mt-1">Leads Managed</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The "Web Dev" Carousel (70%) */}
          <div className="lg:col-span-7 relative">
            <div className="h-full bg-gradient-to-br from-[#192038] to-[#0C1220] border border-[rgba(123,167,212,0.2)] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
              
              {/* Interactive Header */}
              <div className="px-10 pt-10 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8A8C0]/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7BA7D4]/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DDEEFF]/30" />
                </div>
                <span className="text-[rgba(123,167,212,0.6)] font-mono text-[0.6rem] tracking-[0.2em]">CASE_STUDY_0{active + 1}</span>
              </div>

              {/* Dynamic Project Content */}
              <div className="p-10 md:p-16 flex-1 flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-5xl">{w.emoji}</span>
                  <div>
                    <h4 className="text-3xl font-serif text-white leading-tight">{w.title}</h4>
                    <span className="text-[#7BA7D4] text-[0.7rem] uppercase tracking-widest font-semibold">{w.category}</span>
                  </div>
                </div>

                <p className="text-[#DDEEFF]/60 text-lg leading-relaxed mb-10 max-w-xl">
                  {w.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-3">
                  {w.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-[#0B0E14] border border-[rgba(123,167,212,0.1)] text-[#7BA7D4] text-[0.65rem] rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="p-10 border-t border-[rgba(123,167,212,0.1)] bg-[#0B0E14]/30 flex justify-between items-center">
                <div className="flex gap-3">
                  {WORKS.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-[#7BA7D4]' : 'w-2 bg-[rgba(123,167,212,0.2)]'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-[rgba(123,167,212,0.2)] flex items-center justify-center text-[#7BA7D4] hover:bg-[#7BA7D4] hover:text-[#0B0E14] transition-all">←</button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-[rgba(123,167,212,0.2)] flex items-center justify-center text-[#7BA7D4] hover:bg-[#7BA7D4] hover:text-[#0B0E14] transition-all">→</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}