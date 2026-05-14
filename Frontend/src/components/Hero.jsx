import React, { useState, useEffect } from 'react';

// --- CUSTOM HOOK FOR TYPING ANIMATION ---
function useTypingAnimation(phrases, typingSpeed = 80, deletingSpeed = 50, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        setDisplayed((prev) => currentFullText.slice(0, prev.length + 1));
        if (displayed === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), pause);
        } else {
          timer = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        // Deleting phase
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

// --- HERO COMPONENT ---
const PHRASES = [
  'that users love.',
  'that drive growth.',
  'that scale fast.',
  'that make an impact.'
];

export default function Hero() {
  const typed = useTypingAnimation(PHRASES);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 py-28 overflow-hidden bg-[#0B0E14]">
      {/* Background Aurora Glows (Replaces the Grid) */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#7BA7D4] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#E8A8C0] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* LEFT SIDE: Profile Photo */}
        <div className="flex-shrink-0 relative group animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7BA7D4] to-[#E8A8C0] rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full p-[2px] bg-gradient-to-b from-[rgba(123,167,212,0.4)] to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0E14] border-[6px] border-[#0B0E14]">
              <img
                src="./web profile.jpg" // Replace with your actual path
                alt="Profile"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
          {/* Status Badge */}
          <div className="absolute bottom-10 right-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C1220]/90 border border-[rgba(123,167,212,0.2)] backdrop-blur-md shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse shadow-[0_0_8px_#4ADE80]" />
            <span className="text-[#DDEEFF] text-[0.65rem] uppercase tracking-widest font-bold">Available for hire</span>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="w-10 h-[1px] bg-[#E8A8C0]" />
            <span className="text-[#7BA7D4] text-[0.7rem] uppercase tracking-[0.4em] font-bold">Full Stack Developer</span>
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.8rem)] font-light leading-[1.05] text-[#FFFFFF] mb-8">
            I build things <br />
            <span className="text-[#7BA7D4] italic font-serif">
              {typed}
              <span className="inline-block w-[3px] h-[0.8em] bg-[#E8A8C0] ml-2 align-middle animate-blink" />
            </span>
          </h1>

          <p className="text-[rgba(221,238,255,0.65)] text-[1.15rem] leading-relaxed max-w-[520px] mb-12 font-light">
            Based in the Philippines, I specialize in crafting <span className="text-[#DDEEFF] font-normal">high-performance web systems</span> and scalable digital infrastructure.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#work" className="group relative px-12 py-5 bg-[#7BA7D4] text-[#0B0E14] text-[0.8rem] font-bold tracking-[0.2em] uppercase rounded-full transition-all hover:bg-[#FFFFFF] hover:shadow-[0_0_30px_rgba(123,167,212,0.3)] active:scale-95">
              Explore Projects
            </a>
            <a href="#contact" className="px-12 py-5 bg-transparent text-[#DDEEFF] border border-[rgba(123,167,212,0.3)] text-[0.8rem] font-bold tracking-[0.2em] uppercase rounded-full transition-all hover:border-[#7BA7D4] hover:text-[#7BA7D4]">
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}