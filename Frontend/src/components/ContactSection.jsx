import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your email logic here
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0B0E14] relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Copy */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[#7BA7D4]" />
              <span className="text-[#7BA7D4] text-xs font-bold uppercase tracking-widest">Connect</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-[#FFFFFF] mb-8 leading-tight">
              Let's start a <br/>
              <span className="text-[#7BA7D4] italic">conversation.</span>
            </h2>
            <p className="text-[rgba(221,238,255,0.5)] text-lg mb-10 leading-relaxed max-w-md">
              I'm currently accepting new projects and collaborations. If you have an idea that needs a digital home, let's talk.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest text-[rgba(221,238,255,0.4)] mb-1">Email</p>
                <p className="text-[#DDEEFF] font-serif italic text-2xl hover:text-[#7BA7D4] transition-colors cursor-pointer">hello@yourname.com</p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest text-[rgba(221,238,255,0.4)] mb-1">Social</p>
                <div className="flex gap-6 text-[#DDEEFF] opacity-70">
                  <a href="#" className="hover:text-[#7BA7D4] transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-[#7BA7D4] transition-colors">GitHub</a>
                  <a href="#" className="hover:text-[#7BA7D4] transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-[#0C1220] border border-[rgba(123,167,212,0.1)] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            {/* Subtle glow inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7BA7D4] opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity" />
            
            <form onSubmit={handleSubmit} className="relative space-y-8">
              <div className="group">
                <label className="block text-[0.65rem] uppercase tracking-widest text-[rgba(123,167,212,0.6)] mb-2 font-bold">Your Name</label>
                <input 
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-[rgba(123,167,212,0.15)] py-3 text-[#DDEEFF] outline-none focus:border-[#7BA7D4] transition-colors placeholder:text-[rgba(123,167,212,0.2)]" 
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="group">
                <label className="block text-[0.65rem] uppercase tracking-widest text-[rgba(123,167,212,0.6)] mb-2 font-bold">Email Address</label>
                <input 
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-[rgba(123,167,212,0.15)] py-3 text-[#DDEEFF] outline-none focus:border-[#7BA7D4] transition-colors placeholder:text-[rgba(123,167,212,0.2)]" 
                  placeholder="john@example.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="group">
                <label className="block text-[0.65rem] uppercase tracking-widest text-[rgba(123,167,212,0.6)] mb-2 font-bold">Message</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-[rgba(123,167,212,0.15)] py-3 text-[#DDEEFF] outline-none focus:border-[#7BA7D4] transition-colors placeholder:text-[rgba(123,167,212,0.2)] resize-none" 
                  placeholder="Tell me about your vision..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#7BA7D4] text-[#0B0E14] font-bold rounded-2xl tracking-[0.2em] uppercase text-xs hover:bg-[#FFFFFF] hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}