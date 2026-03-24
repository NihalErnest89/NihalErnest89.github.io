import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HudOverlay from './components/HudOverlay';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Section reveal — scan line + staggered item boot + status label
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(#home)');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');

          // Stagger delays for header + cards
          e.target.querySelectorAll('.section-header, .hud-card').forEach((el, i) => {
            el.style.animationDelay = `${0.18 + i * 0.13}s`;
          });

          // Inject status label
          const old = e.target.querySelector('.hud-sector-label');
          if (old) old.remove();
          const label = document.createElement('div');
          label.className = 'hud-sector-label scanning';
          label.textContent = '[ SCANNING... ]';
          e.target.appendChild(label);

          const t1 = setTimeout(() => {
            if (label.isConnected) {
              label.className = 'hud-sector-label online';
              label.textContent = '[ ONLINE ]';
            }
          }, 750);
          const t2 = setTimeout(() => label.remove(), 2400);
          e.target._timers = [t1, t2];

        } else {
          e.target.classList.remove('in-view');

          // Clean up label + timers
          (e.target._timers || []).forEach(clearTimeout);
          const label = e.target.querySelector('.hud-sector-label');
          if (label) label.remove();

          // Reset delays so stagger replays next entry
          e.target.querySelectorAll('.section-header, .hud-card').forEach(el => {
            el.style.animationDelay = '';
          });
        }
      });
    }, { threshold: 0.08 });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="scroll-progress" style={{ height: `${scrollPct}%` }} />
      <HudOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
