const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center bg-[#0F172A] relative overflow-hidden border-t border-white/5">
      <div className="relative z-10 flex flex-col gap-1 items-center">
        <p className="text-[0.65rem] md:text-[0.7rem] font-black text-white uppercase tracking-[0.3em] opacity-90">
          Built with <span className="text-[#22D3EE]">Passion</span> & <span className="text-[#FFFFFF]">Precision</span>
        </p>

        <p className="text-[0.5rem] md:text-[0.55rem] font-bold text-white/30 uppercase tracking-[0.2em]">
           {new Date().getFullYear()} · At Your Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;