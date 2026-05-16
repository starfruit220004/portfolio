import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { WORKS } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import { 
  ClipboardList, 
  Notebook, 
  Cloud, 
  Palette, 
  Mail, 
  Bot, 
  Monitor,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

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
  const [leadGenIndex, setLeadGenIndex] = useState(0);
  const [webDevIndex, setWebDevIndex] = useState(0);
  const [leadIndex, setLeadIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const w = WORKS[0]; // Using first work for some metadata if needed

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadGenIndex((prev) => (prev + 1) % LEAD_GEN_IMAGES.length);
      setWebDevIndex((prev) => (prev + 1) % WEB_DEV_IMAGES.length);
      setLeadIndex((prev) => (prev + 1) % LEAD_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImg]);

  const getThemeColor = () => '#00f2ff'; // Primary Electric Cyan

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-20 bg-[#020202] relative overflow-hidden transition-all duration-700">
      
      {/* --- VIBRANT DYNAMIC CYAN GLOW --- */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08] blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${getThemeColor()} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader label="Portfolio" title="Digital Architecture" />

        <div className="mt-20 flex flex-col gap-24">
          
          {/* SECTION 1: Strategic Lead Generation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center reveal-on-scroll opacity-0">
            {/* LEFT SIDE: PREVIEW IMAGES */}
            <div className="flex flex-col gap-8 order-2 lg:order-1 group/master">
              {/* LEAD GEN IMAGE CARD */}
              <div className="p-6 bg-[#0a0a0f] border-2 border-[#00f2ff]/30 group-hover/master:border-[#00f2ff] transition-all duration-700 rounded-[2.5rem] shadow-[0_0_30px_rgba(0,242,255,0.15),0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/5 to-transparent pointer-events-none" />
                <div 
                  className="relative group/preview rounded-[1.5rem] overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center aspect-video shadow-inner cursor-zoom-in"
                  onClick={() => setSelectedImg(LEAD_GEN_IMAGES[leadGenIndex])}
                >
                  {LEAD_GEN_IMAGES.map((img, idx) => (
                    <div
                      key={img}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === leadGenIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Lead Gen ${idx}`} 
                        className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover/preview:scale-105" 
                      />
                    </div>
                  ))}
                  
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/preview:opacity-100 transition-opacity pointer-events-none">
                    <button onClick={(e) => { e.stopPropagation(); setLeadGenIndex(prev => (prev - 1 + LEAD_GEN_IMAGES.length) % LEAD_GEN_IMAGES.length); }} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all pointer-events-auto"><ChevronLeft size={20} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setLeadGenIndex(prev => (prev + 1) % LEAD_GEN_IMAGES.length); }} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all pointer-events-auto"><ChevronRight size={20} /></button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {LEAD_GEN_IMAGES.map((img, idx) => (
                    <button key={idx} onClick={() => setLeadGenIndex(idx)} className={`relative w-16 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === leadGenIndex ? 'border-[#00f2ff] scale-105' : 'border-black/5 opacity-40 hover:opacity-100'}`}>
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* CAMPAIGN ASSETS CARD */}
              <div className="p-8 bg-[#0a0a0f] border-2 border-[#00f2ff]/30 group-hover/master:border-[#ff00c8]/50 transition-all duration-700 rounded-[2.5rem] shadow-[0_0_30px_rgba(0,242,255,0.15),0_20px_60px_rgba(0,0,0,0.6)] relative group/assetcard overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00c8]/5 to-transparent pointer-events-none" />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#ff00c8] shadow-[0_0_8px_#ff00c8]" />
                     <span className="text-white text-[0.65rem] uppercase tracking-[0.4em] font-black">Campaign Assets</span>
                  </div>
                </div>

                <div 
                  className="relative group/leadpreview rounded-2xl overflow-hidden border border-white/5 bg-black/40 shadow-inner aspect-video z-10 cursor-zoom-in"
                  onClick={() => setSelectedImg(LEAD_IMAGES[leadIndex])}
                >
                  {LEAD_IMAGES.map((img, idx) => (
                    <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === leadIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <img 
                        src={img} 
                        className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover/leadpreview:scale-105" 
                      />
                    </div>
                  ))}
                  
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/leadpreview:opacity-100 transition-opacity pointer-events-none">
                    <button onClick={(e) => { e.stopPropagation(); setLeadIndex(prev => (prev - 1 + LEAD_IMAGES.length) % LEAD_IMAGES.length); }} className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff00c8] transition-all text-sm pointer-events-auto"><ChevronLeft size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setLeadIndex(prev => (prev + 1) % LEAD_IMAGES.length); }} className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff00c8] transition-all text-sm pointer-events-auto"><ChevronRight size={16} /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: DESCRIPTION - High-Gloss White Card */}
            <div className="bg-white border border-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.4)] h-full flex flex-col justify-center order-1 lg:order-2 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00f2ff] opacity-5 blur-3xl animate-float" />
              <span className="text-black text-[0.75rem] uppercase tracking-[0.4em] font-black" style={{ textShadow: '0 0 10px rgba(0, 242, 255, 0.5)' }}>Performance Marketing</span>
              <h3 className="text-5xl md:text-6xl font-black text-black mt-4 mb-6 tracking-tighter" style={{ textShadow: '0 0 15px rgba(0, 242, 255, 0.3)' }}>Growth Strategy</h3>
              <p className="text-black/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium">
                Engineering conversion engines. I build automated funnels that bridge the gap between complex software and <span className="text-black font-black underline decoration-[#00f2ff] decoration-2 underline-offset-4" style={{ textShadow: '0 0 8px rgba(0, 242, 255, 0.6)' }}>high-intent</span> global clients.
              </p>

              {/* OPERATIONAL STACK */}
              <div className="mb-10">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-black mb-4 font-black" style={{ textShadow: '0 0 8px rgba(0, 242, 255, 0.4)' }}>Operational Stack</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'Trello', icon: <ClipboardList size={14} /> },
                    { name: 'Notion', icon: <Notebook size={14} /> },
                    { name: 'Google Workspace', icon: <Cloud size={14} /> },
                    { name: 'Canva', icon: <Palette size={14} /> },
                    { name: 'Email Management', icon: <Mail size={14} /> },
                    { name: 'CRM Automation', icon: <Bot size={14} /> }
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl hover:border-[#00f2ff]/40 transition-colors group/tool">
                      <span className="text-[#00f2ff]">{tool.icon}</span>
                      <span className="text-[0.7rem] text-black font-bold group-hover/tool:text-black transition-colors">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {['Direct Response', 'B2B Strategy', 'Lead Funnels', 'Growth Hacking'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-xs text-black uppercase tracking-widest hover:border-[#00f2ff] hover:shadow-[0_0_10px_rgba(0,242,255,0.2)] transition-all cursor-default font-black">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 2: Web Solutions & Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center reveal-on-scroll opacity-0">
            {/* LEFT SIDE: PREVIEW IMAGES */}
            <div className="order-2 lg:order-1 group/master">
              <div className="p-6 bg-[#0a0a0f] border-2 border-[#00f2ff]/30 group-hover/master:border-[#00f2ff] transition-all duration-700 rounded-[2.5rem] shadow-[0_0_30px_rgba(0,242,255,0.15),0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/5 to-transparent pointer-events-none" />
                <div 
                  className="relative group/webdev rounded-[1.5rem] overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center aspect-[16/10] shadow-inner cursor-zoom-in"
                  onClick={() => setSelectedImg(WEB_DEV_IMAGES[webDevIndex])}
                >
                  {WEB_DEV_IMAGES.map((img, idx) => (
                    <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === webDevIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <img 
                        src={img} 
                        alt={`Web Dev ${idx}`} 
                        className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover/webdev:scale-105" 
                      />
                    </div>
                  ))}
                  
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/webdev:opacity-100 transition-opacity pointer-events-none">
                    <button onClick={(e) => { e.stopPropagation(); setWebDevIndex(prev => (prev - 1 + WEB_DEV_IMAGES.length) % WEB_DEV_IMAGES.length); }} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all pointer-events-auto"><ChevronLeft size={20} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setWebDevIndex(prev => (prev + 1) % WEB_DEV_IMAGES.length); }} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] transition-all pointer-events-auto"><ChevronRight size={20} /></button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {WEB_DEV_IMAGES.map((img, idx) => (
                    <button key={idx} onClick={() => setWebDevIndex(idx)} className={`relative w-16 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === webDevIndex ? 'border-[#00f2ff] scale-105' : 'border-black/5 opacity-40 hover:opacity-100'}`}>
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: DESCRIPTION - High-Gloss White Card */}
            <div className="bg-white border border-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.4)] h-full flex flex-col justify-center order-1 lg:order-2 relative overflow-hidden group">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00f2ff] opacity-5 blur-3xl animate-float" />
              <div className="mb-8 flex items-center gap-3">
                 <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#0a0a0f] border border-[#00f2ff]/30 shadow-[0_12px_30px_rgba(0,242,255,0.15)] transition-transform duration-500 group-hover:scale-110">
                    <Monitor size={40} className="text-[#00f2ff]" />
                 </div>
                 <div>
                    <span className="inline-block px-4 py-1 rounded-full text-[0.7rem] font-black uppercase tracking-widest mb-2 bg-black/5 text-black border border-black/10" style={{ textShadow: '0 0 8px rgba(0, 242, 255, 0.4)' }}>
                      {w.category}
                    </span>
                    <h4 className="text-5xl font-black text-black tracking-tighter" style={{ textShadow: '0 0 15px rgba(0, 242, 255, 0.3)' }}>Web Solutions</h4>
                 </div>
              </div>

              <p className="text-black/80 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                Scalable. Secure. Seamless. I build high-performance <span className="text-black font-black underline decoration-[#00f2ff] decoration-2 underline-offset-4" style={{ textShadow: '0 0 8px rgba(0, 242, 255, 0.6)' }}>full-stack engines</span>. From React interfaces to Node.js backends, every module is optimized for massive throughput and zero-latency UX.
              </p>

              {/* TECH SPECS GRID */}
              <div className="grid grid-cols-2 gap-4">
                  {[
                      { label: 'Latency', val: '< 100ms', color: '#00f2ff' },
                      { label: 'Uptime', val: '99.9%', color: '#00f2ff' },
                      { label: 'Tech Stack', val: 'MERN / Next.js', color: '#00f2ff' },
                      { label: 'Architecture', val: 'Cloud Native', color: '#00f2ff' }
                  ].map((spec, i) => (
                      <div key={i} className="p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-[#00f2ff]/30 transition-all duration-300">
                          <p className="text-[0.6rem] text-gray-500 uppercase font-black mb-1">{spec.label}</p>
                          <p className="text-sm text-black font-mono font-black" style={{ color: spec.color, textShadow: `0 0 8px ${spec.color}44` }}>{spec.val}</p>
                      </div>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SCROLLABLE MODAL (Using Portal to bypass parent transforms/overflow) --- */}
      {selectedImg && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImg(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        >
          {/* Modal Content Box */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0f] rounded-[2rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-y-auto scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - Positioned inside the container, top right */}
            <button 
              className="absolute top-6 right-6 z-[10001] w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#00f2ff] hover:text-black transition-all group active:scale-95 shadow-xl"
              onClick={() => setSelectedImg(null)}
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <img 
              src={selectedImg} 
              alt="Work Detail" 
              className="w-full h-auto block"
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

