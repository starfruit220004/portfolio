import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your EmailJS or backend logic here
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* --- DYNAMIC BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00f2ff] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#bc13fe] opacity-[0.08] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Catchy Copy */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-gradient-to-r from-[#00f2ff] to-[#bc13fe]" />
              <span className="text-[#00f2ff] text-xs font-black uppercase tracking-[0.4em]">Available for Hire</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              READY TO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#bc13fe] to-[#ff00c8]">
                BUILD THE FUTURE?
              </span>
            </h2>
            
            <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-md font-medium">
              Whether you need a high-performance web system, that actually converts to make it happen.
            </p>
            
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold">Direct Line</p>
                <p className="text-white text-3xl font-bold group-hover:text-[#00f2ff] transition-all duration-300 underline decoration-[#00f2ff]/30 underline-offset-8">
                  hannahjeanbalimbingan@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: High-Gloss White Card */}
          <div className="relative">
            {/* The "Aura" behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00f2ff] via-[#bc13fe] to-[#ff00c8] rounded-[3rem] opacity-20 blur-2xl" />
            
            <div className="bg-white border border-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.4)] relative overflow-hidden">
              
              <h3 className="text-[#0a0a0a] text-3xl font-black mb-10 tracking-tight">Send a briefing.</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-[0.6rem] font-black text-gray-500 tracking-[0.2em] mb-1">NAME</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-2 text-[#0a0a0a] font-bold text-lg outline-none focus:border-[#00f2ff] transition-colors placeholder:text-gray-400" 
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                {/* Email Input */}
                <div className="relative">
                  <label className="block text-[0.6rem] font-black text-gray-500 tracking-[0.2em] mb-1">EMAIL</label>
                  <input 
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-2 text-[#0a0a0a] font-bold text-lg outline-none focus:border-[#bc13fe] transition-colors placeholder:text-gray-400" 
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className="block text-[0.6rem] font-black text-gray-500 tracking-[0.2em] mb-1">MESSAGE</label>
                  <textarea 
                    required
                    rows="3"
                    className="w-full bg-transparent border-b-2 border-gray-200 py-2 text-[#0a0a0a] font-bold text-lg outline-none focus:border-[#ff00c8] transition-colors placeholder:text-gray-400 resize-none" 
                    placeholder="Tell me about the project..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                {/* Submit Button: Hover remains black, Active (click) turns Cyan */}
                <button 
                  type="submit"
                  className="w-full py-6 bg-[#0a0a0a] text-white font-black rounded-2xl tracking-[0.3em] uppercase text-xs 
                             hover:bg-black hover:scale-[1.01] 
                             active:bg-[#00f2ff] active:text-[#0a0a0a] active:scale-95 
                             transition-all duration-150 shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3 group"
                >
                  Deploy Message
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}