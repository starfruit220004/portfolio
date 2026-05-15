import React, { useState, useEffect } from 'react';

// --- TYPING ANIMATION HOOK ---
function useTypingAnimation(phrases, typingSpeed = 80, deletingSpeed = 50, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = phrases[phraseIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayed((prev) => currentFullText.slice(0, prev.length + 1));
        if (displayed === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), pause);
        } else {
          timer = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        setDisplayed((prev) => prev.slice(0, -1));
        if (displayed === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          timer = setTimeout(handleTyping, deletingSpeed);
        }
      }
    };
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);
  return displayed;
}

const PHRASES = ['that users love.', 'that drive growth.', 'that scale fast.'];

export default function Hero() {
  const typed = useTypingAnimation(PHRASES);

  return (
    <section className="relative flex items-center justify-center px-6 md:px-20 py-20 md:py-32 overflow-hidden bg-[#020202]">
      
      {/* --- MINIMIZED BUT VIBRANT GLOWS --- */}
      {/* Cyan: Reduced size/opacity, but kept the vibrant hue */}
      <div className="absolute top-0 left-0 w-[30%] h-[30%] rounded-full bg-[#00f2ff] opacity-[0.1] blur-[120px] pointer-events-none" />
      
      {/* Pink/Purple: Large but deep, providing the "Black & Color" atmosphere */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[#bc13fe] opacity-[0.12] blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* LEFT SIDE: Profile Photo with Neon Ring */}
        <div className="flex-shrink-0 relative group">
          {/* Static Neon Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff] via-[#ff00c8] to-transparent rounded-full blur-2xl opacity-40 transition-opacity duration-500"></div>
          
          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full p-[2px] bg-gradient-to-tr from-[#00f2ff] via-[#ff00c8] to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#020202] border-[6px] border-[#020202]">
              <img
                src="./web profile.jpg" 
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Status Badge - Pure Cyan Accent */}
          <div className="absolute bottom-12 right-12 flex items-center gap-2 px-5 py-2 rounded-full bg-black/90 border border-[#00f2ff]/30 backdrop-blur-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f2ff] shadow-[0_0_12px_#00f2ff]" />
            <span className="text-white text-[0.65rem] uppercase tracking-[0.2em] font-black">Live</span>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <span className="w-12 h-[2px] bg-gradient-to-r from-[#00f2ff] to-[#ff00c8]" />
            <span className="text-[#00f2ff] text-[0.7rem] uppercase tracking-[0.6em] font-black drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">
              Developer & Researcher
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] text-white mb-8 tracking-tighter">
            I build things <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#ff00c8] to-[#bc13fe] italic">
              {typed}
              <span className="inline-block w-[3px] h-[0.9em] bg-[#00f2ff] ml-2 align-middle shadow-[0_0_15px_#00f2ff]" />
            </span>
          </h1>

          <p className="text-gray-400 text-[1.2rem] leading-relaxed max-w-[520px] mb-12 font-medium">
            Based in the Philippines, delivering <span className="text-white border-b-2 border-[#ff00c8]">high-performance systems</span> wrapped in electric digital experiences.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {/* Primary Button: Black core with Neon Border */}
            <a href="#work" className="group relative px-10 py-4 rounded-full transition-all active:scale-95 bg-black border-2 border-[#00f2ff] hover:bg-[#00f2ff] hover:shadow-[0_0_25px_rgba(0,242,255,0.4)]">
               <span className="relative text-[#00f2ff] group-hover:text-black text-[0.8rem] font-black tracking-[0.2em] uppercase transition-colors">Explore Projects</span>
            </a>

            {/* Secondary Button: Pink Glow */}
            <a href="#contact" className="px-10 py-4 bg-transparent text-white border-2 border-[#ff00c8]/50 text-[0.8rem] font-black tracking-[0.2em] uppercase rounded-full transition-all hover:border-[#ff00c8] hover:shadow-[0_0_20px_rgba(255,0,200,0.3)]">
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}