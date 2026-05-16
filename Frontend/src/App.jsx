import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WorkCarousel from './components/WorkCarousel';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05, // Trigger slightly earlier
      rootMargin: '0px 0px -20px 0px' // Minimal margin for better responsiveness
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <div className="overflow-x-hidden">
        <Hero />
        <div className="reveal-on-scroll opacity-0">
          <WorkCarousel />
        </div>
        <div className="reveal-on-scroll opacity-0">
          <SkillsSection />
        </div>
        <div className="reveal-on-scroll opacity-0">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
