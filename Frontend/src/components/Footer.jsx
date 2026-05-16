const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center bg-[#020202] relative overflow-hidden border-t border-white/5">
      <div className="relative z-10 flex flex-col gap-1 items-center">
        <p className="text-[0.65rem] md:text-[0.7rem] font-black text-white uppercase tracking-[0.3em] opacity-90">
          Built with <span className="text-[#ff00c8]">Passion</span> & <span className="text-[#00f2ff]">Precision</span>
        </p>

        <p className="text-[0.5rem] md:text-[0.55rem] font-bold text-white/30 uppercase tracking-[0.2em]">
           {new Date().getFullYear()} · At Your Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;