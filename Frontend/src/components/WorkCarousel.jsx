import { useState, useCallback } from 'react';
import { WORKS } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function WorkCarousel() {
  const [active, setActive] = useState(0);
  const total = WORKS.length;
  const w = WORKS[active];

  // Helper to change colors based on project
  const getThemeColor = () => w.color || '#00f2ff';

  const next = useCallback(() => setActive(a => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total]);

  return (
    <section id="work" className="py-32 px-6 md:px-20 bg-[#050505] relative overflow-hidden transition-colors duration-1000">
      
      {/* --- VIBRANT DYNAMIC BACKGROUND GLOWS --- */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.1] blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${getThemeColor()} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader label="Portfolio" title="Featured Projects" />

        <div className="mt-20 grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: Business/Lead Gen (Static Vibrant) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-[#101015] border border-[#ff00c8]/20 p-10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group shadow-[0_0_40px_rgba(255,0,200,0.1)]">
              {/* Corner Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff00c8] opacity-20 blur-3xl" />
              
              <div className="relative z-10">
                <span className="text-[#ff00c8] text-[0.75rem] uppercase tracking-[0.4em] font-black">Growth Strategy</span>
                <h3 className="text-4xl font-bold text-white mt-4 mb-6">Lead Generation</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Engineered to convert. I build automated funnels that bridge the gap between complex software and high-intent clients.
                </p>
                <ul className="space-y-4">
                  {['Automated CRM Sync', 'High-ROAS Landing Pages', 'Data-Driven Funnels'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-white text-sm font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#ff00c8] shadow-[0_0_10px_#ff00c8]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Neon Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#101015] border border-[#00f2ff]/30 p-8 rounded-3xl text-center shadow-[0_0_20px_rgba(0,242,255,0.05)]">
                <div className="text-[#00f2ff] text-3xl font-black drop-shadow-[0_0_10px_#00f2ff]">15%</div>
                <div className="text-gray-500 text-[0.6rem] uppercase tracking-[0.2em] mt-2 font-bold">Conversion</div>
              </div>
              <div className="bg-[#101015] border border-[#bc13fe]/30 p-8 rounded-3xl text-center shadow-[0_0_20px_rgba(188,19,254,0.05)]">
                <div className="text-[#bc13fe] text-3xl font-black drop-shadow-[0_0_10px_#bc13fe]">10k+</div>
                <div className="text-gray-500 text-[0.6rem] uppercase tracking-[0.2em] mt-2 font-bold">Leads</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Project Carousel */}
          <div className="lg:col-span-8 relative">
            <div 
              className="h-full bg-[#101015] rounded-[3rem] overflow-hidden flex flex-col transition-all duration-500 shadow-2xl"
              style={{ border: `2px solid ${getThemeColor()}44` }}
            >
              
              {/* Browser-style Header */}
              <div className="px-10 pt-8 flex justify-between items-center border-b border-white/5 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="px-6 py-1 bg-black/40 rounded-full border border-white/10">
                   <span className="text-gray-500 font-mono text-[0.65rem] tracking-[0.3em] uppercase">Project_Module: {active + 1}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-10 md:p-20 flex-1 flex flex-col relative">
                {/* Floating Emoji with Glow */}
                <div 
                   className="w-24 h-24 mb-10 flex items-center justify-center text-6xl rounded-3xl bg-black/40 border transition-all duration-700"
                   style={{ borderColor: `${getThemeColor()}88`, boxShadow: `0 0 30px ${getThemeColor()}33` }}
                >
                  {w.emoji}
                </div>

                <div>
                  <span className="inline-block px-4 py-1 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-4 transition-all duration-700"
                    style={{ backgroundColor: `${getThemeColor()}22`, color: getThemeColor(), border: `1px solid ${getThemeColor()}44` }}>
                    {w.category}
                  </span>
                  <h4 className="text-5xl md:text-6xl font-bold text-white leading-none mb-8 tracking-tighter">
                    {w.title}
                  </h4>
                  <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-2xl font-medium">
                    {w.desc}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-auto flex flex-wrap gap-3">
                  {w.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 bg-black/60 border border-white/10 text-white text-[0.7rem] rounded-xl font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="p-8 px-12 border-t border-white/5 bg-black/40 flex justify-between items-center">
                <div className="flex gap-4">
                  {WORKS.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActive(i)}
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: i === active ? '40px' : '10px', 
                        backgroundColor: i === active ? getThemeColor() : 'rgba(255,255,255,0.1)',
                        boxShadow: i === active ? `0 0 15px ${getThemeColor()}` : 'none'
                      }}
                    />
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button onClick={prev} className="group w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:border-[#00f2ff] transition-all duration-300">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  </button>
                  <button onClick={next} className="group w-14 h-14 rounded-2xl flex items-center justify-center text-black font-bold transition-all duration-300"
                    style={{ backgroundColor: getThemeColor() }}>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}