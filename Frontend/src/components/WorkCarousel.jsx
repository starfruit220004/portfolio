import { useState, useCallback, useEffect } from 'react';
import { WORKS } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const LEAD_GEN_IMAGES = [
  '/leadgen1.png',
  '/leadgen2.png',
  '/leadgen3.png',
  '/leadgen4.png',
  '/leadgen5.png',
];

const WEB_DEV_IMAGES = [
  '/webdev1.png',
  '/webdev2.png',
  '/webdev3.png',
  '/webdev4.png',
];

const LEAD_IMAGES = [
  '/lead1.png',
  '/lead2.png',
  '/lead3.png',
  '/lead4.png',
  '/lead5.png',
];

export default function WorkCarousel() {
  const [active, setActive] = useState(0);
  const [leadGenIndex, setLeadGenIndex] = useState(0);
  const [webDevIndex, setWebDevIndex] = useState(0);
  const [leadIndex, setLeadIndex] = useState(0);
  const total = WORKS.length;
  const w = WORKS[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadGenIndex((prev) => (prev + 1) % LEAD_GEN_IMAGES.length);
      setWebDevIndex((prev) => (prev + 1) % WEB_DEV_IMAGES.length);
      setLeadIndex((prev) => (prev + 1) % LEAD_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getThemeColor = () => '#00f2ff'; // Primary Electric Cyan
  const getAccentColor = () => '#ff00c8'; // Subtle Pink Shade

  const next = useCallback(() => setActive(a => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total]);

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-20 bg-[#020202] relative overflow-hidden transition-colors duration-1000">
      
      {/* --- VIBRANT DYNAMIC CYAN GLOW --- */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08] blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${getThemeColor()} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader label="Portfolio" title="Digital Architecture" />

        <div className="mt-20 flex flex-col gap-10">
          
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* CARD 1: Strategic Lead Generation */}
            <div className="bg-[#0A0A0F] border border-[#00f2ff]/20 p-10 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group shadow-[0_0_40px_rgba(0,242,255,0.05)] flex flex-col">
              {/* Corner Glow - Pink remains visible here */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff00c8] opacity-10 blur-3xl" />
              
              <div className="relative z-10 h-full flex flex-col">
                <span className="text-[#00f2ff] text-[0.75rem] uppercase tracking-[0.4em] font-black">Performance Marketing</span>
                <h3 className="text-5xl font-bold text-white mt-4 mb-6 tracking-tighter">Growth Strategy</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                  Engineering conversion engines. I build automated funnels that bridge the gap between complex software and <span className="text-[#ff00c8]">high-intent</span> global clients.
                </p>

                {/* LEAD GEN PREVIEW IMAGES */}
                <div className="relative group/preview rounded-[2rem] overflow-hidden border border-white/10 bg-black/60 group-hover:border-[#00f2ff]/50 transition-colors shadow-2xl flex items-center justify-center aspect-video">
                  {LEAD_GEN_IMAGES.map((img, idx) => (
                    <div
                      key={img}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === leadGenIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img src={img} alt={`Lead Gen ${idx}`} className="w-full h-full object-contain p-4" />
                    </div>
                  ))}
                  
                  {/* Manual Navigation */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/preview:opacity-100 transition-opacity">
                    <button onClick={() => setLeadGenIndex(prev => (prev - 1 + LEAD_GEN_IMAGES.length) % LEAD_GEN_IMAGES.length)} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all">←</button>
                    <button onClick={() => setLeadGenIndex(prev => (prev + 1) % LEAD_GEN_IMAGES.length)} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all">→</button>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                    {LEAD_GEN_IMAGES.map((_, idx) => (
                      <button key={idx} onClick={() => setLeadGenIndex(idx)} className={`h-1.5 rounded-full transition-all duration-500 ${idx === leadGenIndex ? 'w-5 bg-[#00f2ff]' : 'w-1.5 bg-white/20'}`} />
                    ))}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {LEAD_GEN_IMAGES.map((img, idx) => (
                    <button key={idx} onClick={() => setLeadGenIndex(idx)} className={`relative w-20 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${idx === leadGenIndex ? 'border-[#00f2ff] shadow-[0_0_15px_rgba(0,242,255,0.2)] scale-105' : 'border-white/5 opacity-40 hover:opacity-100'}`}>
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* NESTED ASSET CARD */}
                <div className="mt-12 p-8 bg-black/60 border border-white/10 rounded-[2.5rem] shadow-2xl relative group/assetcard">
                  <div className="absolute inset-0 bg-[#ff00c8]/5 opacity-0 group-hover/assetcard:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#ff00c8] shadow-[0_0_8px_#ff00c8]" />
                       <span className="text-white text-[0.65rem] uppercase tracking-[0.4em] font-black">Campaign Assets</span>
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5">
                      <span className="text-gray-500 font-mono text-[0.5rem] uppercase tracking-widest">Production_Ready</span>
                    </div>
                  </div>

                  <div className="relative group/leadpreview rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl aspect-video z-10">
                    {LEAD_IMAGES.map((img, idx) => (
                      <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === leadIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={img} className="w-full h-full object-contain p-4" />
                      </div>
                    ))}
                    
                    {/* Manual Navigation Overlay */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/leadpreview:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setLeadIndex(prev => (prev - 1 + LEAD_IMAGES.length) % LEAD_IMAGES.length);
                        }}
                        className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff00c8] transition-all text-sm"
                      >
                        ←
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setLeadIndex(prev => (prev + 1) % LEAD_IMAGES.length);
                        }}
                        className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff00c8] transition-all text-sm"
                      >
                        →
                      </button>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                      {LEAD_IMAGES.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setLeadIndex(idx);
                          }}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            idx === leadIndex ? 'w-4 bg-[#ff00c8]' : 'w-1 bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: Web Solutions & Development */}
            <div className="bg-[#0A0A0F] rounded-[3rem] overflow-hidden flex flex-col transition-all duration-500 shadow-2xl relative border border-[#00f2ff]/20">
              {/* Browser-style Header */}
              <div className="px-10 pt-8 flex justify-between items-center border-b border-white/5 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-[#00f2ff]/30" />
                </div>
                <div className="px-6 py-1 bg-black/40 rounded-full border border-[#00f2ff]/30 shadow-[0_0_10px_rgba(0,242,255,0.1)]">
                   <span className="font-mono text-[0.65rem] tracking-[0.3em] uppercase drop-shadow-[0_0_5px_#00f2ff]" style={{ color: '#00f2ff' }}>DYNAMIC FRAMEWORKS</span>
                </div>
              </div>

              <div className="p-10 md:p-14 flex-1 flex flex-col relative">
                {/* Floating Emoji */}
                <div className="w-20 h-20 mb-8 flex items-center justify-center text-5xl rounded-2xl bg-black/40 border border-[#00f2ff]/30 shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                  {w.emoji}
                </div>

                <div>
                  <span className="inline-block px-4 py-1 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-4 bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/20">
                    {w.category}
                  </span>
                  <h4 className="text-5xl font-bold text-white leading-none mb-6 tracking-tighter">Web Solutions</h4>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
                    Scalable. Secure. Seamless. I build high-performance <span className="text-white">full-stack engines</span>. From React interfaces to Node.js backends, every module is optimized for massive throughput and zero-latency UX.
                  </p>
                </div>

                {/* TECH SPECS GRID - Fills the space nicely */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                        { label: 'Latency', val: '< 100ms', color: '#00f2ff' },
                        { label: 'Uptime', val: '99.9%', color: '#00f2ff' },
                        { label: 'Tech Stack', val: 'MERN / Next.js', color: '#ff00c8' },
                        { label: 'Architecture', val: 'Cloud Native', color: '#ff00c8' }
                    ].map((spec, i) => (
                        <div key={i} className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                            <p className="text-[0.6rem] text-gray-500 uppercase font-black mb-1">{spec.label}</p>
                            <p className="text-sm text-white font-mono" style={{ color: spec.color }}>{spec.val}</p>
                        </div>
                    ))}
                </div>

                {/* WEB DEV PREVIEW IMAGES */}
                <div className="relative group/webdev rounded-[2rem] overflow-hidden border border-[#00f2ff]/30 bg-black/60 shadow-2xl aspect-[16/11] mb-10">
                  {WEB_DEV_IMAGES.map((img, idx) => (
                    <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === webDevIndex ? 'opacity-100' : 'opacity-0'}`}>
                      <img src={img} alt={`Web Dev ${idx}`} className="w-full h-full object-contain p-4" />
                    </div>
                  ))}
                  
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/webdev:opacity-100 transition-opacity">
                    <button onClick={() => setWebDevIndex(prev => (prev - 1 + WEB_DEV_IMAGES.length) % WEB_DEV_IMAGES.length)} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all">←</button>
                    <button onClick={() => setWebDevIndex(prev => (prev + 1) % WEB_DEV_IMAGES.length)} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all">→</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}