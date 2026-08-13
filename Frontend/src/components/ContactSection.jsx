import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your EmailJS or backend logic here
  };

  return (
    <section id="contact" className="pt-16 md:pt-24 pb-16 px-6 bg-[#0F172A] relative overflow-hidden reveal-on-scroll opacity-0">
      
      {/* --- DYNAMIC BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FFFFFF] opacity-[0.08] blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#e0e1dd] opacity-[0.08] blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '-2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Catchy Copy */}
          <div className="reveal-on-scroll opacity-0 delay-100">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-gradient-to-r from-[#FFFFFF] to-[#e0e1dd]" />
              <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-[0.4em]">Available for Hire</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              READY TO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#e0e1dd] to-[#22D3EE]">
                BUILD THE FUTURE?
              </span>
            </h2>
            
            <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-md font-medium">
              Whether you need a high-performance web system, that actually converts to make it happen.
            </p>
            
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold">Direct Line</p>
                <p className="text-white text-2xl md:text-3xl font-bold group-hover:text-[#FFFFFF] transition-all duration-300 underline decoration-[#FFFFFF]/30 underline-offset-8 break-all">
                  hannahjeanbalimbingan@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: High-Gloss White Card */}
          <div className="relative reveal-on-scroll opacity-0 delay-300">
            {/* The "Aura" behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFFFFF] via-[#e0e1dd] to-[#22D3EE] rounded-[3rem] opacity-20 blur-2xl" />
            
            <div className="bg-white border border-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.4)] relative overflow-hidden">
              
              <h3 className="text-[#0F172A] text-3xl font-black mb-10 tracking-tight">Send a briefing.</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-[0.6rem] font-black text-gray-500 tracking-[0.2em] mb-1">NAME</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-2 text-[#0F172A] font-bold text-lg outline-none focus:border-[#FFFFFF] transition-colors placeholder:text-gray-400" 
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
                    className="w-full bg-transparent border-b-2 border-gray-200 py-2 text-[#0F172A] font-bold text-lg outline-none focus:border-[#e0e1dd] transition-colors placeholder:text-gray-400" 
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
                    className="w-full bg-transparent border-b-2 border-gray-200 py-2 text-[#0F172A] font-bold text-lg outline-none focus:border-[#22D3EE] transition-colors placeholder:text-gray-400 resize-none" 
                    placeholder="Tell me about the project..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                {/* Submit Button: Cyan for CTA */}
                <button 
                  type="submit"
                  className="w-full py-6 bg-[#22D3EE] text-[#0F172A] font-black rounded-2xl tracking-[0.3em] uppercase text-xs 
                             hover:bg-[#FFFFFF] hover:text-[#0F172A] hover:scale-[1.01] 
                             active:scale-95 
                             transition-all duration-150 shadow-[0_10px_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-3 group"
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