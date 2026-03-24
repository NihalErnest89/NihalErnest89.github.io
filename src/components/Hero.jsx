import { useState, useEffect } from 'react';
import { resumeData } from '../data/resumeData';
import './Hero.css';

function useTyping(texts, speed = 80) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const delay = deleting ? speed / 2 : speed;

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        } else {
          setDeleting(false);
          setIdx((idx + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIdx, deleting, idx, texts, speed]);

  return display;
}

function HudOrb() {
  return (
    <div className="hud-orb-wrap">
      <svg className="hud-orb-svg" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
        {/* Outermost dashed ring */}
        <circle
          cx="160" cy="160" r="148"
          fill="none" stroke="rgba(0,212,255,0.18)" strokeWidth="1"
          strokeDasharray="6 4"
          style={{ animation: 'rotate-cw 30s linear infinite', transformOrigin: '160px 160px' }}
        />
        {/* Outer solid ring with gaps */}
        <circle
          cx="160" cy="160" r="130"
          fill="none" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5"
          strokeDasharray="40 12 8 12"
          style={{ animation: 'rotate-ccw 18s linear infinite', transformOrigin: '160px 160px' }}
        />
        {/* Middle ring */}
        <circle
          cx="160" cy="160" r="108"
          fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1"
        />
        {/* Arc accent on middle ring */}
        <path
          d="M 160 52 A 108 108 0 0 1 268 160"
          fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="2"
          style={{ animation: 'rotate-cw 10s linear infinite', transformOrigin: '160px 160px' }}
        />
        <path
          d="M 160 268 A 108 108 0 0 1 52 160"
          fill="none" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5"
          style={{ animation: 'rotate-cw 10s linear infinite', transformOrigin: '160px 160px' }}
        />
        {/* Inner ring */}
        <circle
          cx="160" cy="160" r="76"
          fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="1"
          strokeDasharray="16 8"
          style={{ animation: 'rotate-ccw 12s linear infinite', transformOrigin: '160px 160px' }}
        />
        {/* Innermost decorative ring */}
        <circle
          cx="160" cy="160" r="48"
          fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth="1"
        />
        {/* Crosshair lines */}
        <line x1="160" y1="80"  x2="160" y2="108" stroke="rgba(0,212,255,0.5)" strokeWidth="1"/>
        <line x1="160" y1="212" x2="160" y2="240" stroke="rgba(0,212,255,0.5)" strokeWidth="1"/>
        <line x1="80"  y1="160" x2="108" y2="160" stroke="rgba(0,212,255,0.5)" strokeWidth="1"/>
        <line x1="212" y1="160" x2="240" y2="160" stroke="rgba(0,212,255,0.5)" strokeWidth="1"/>
        {/* Cardinal tick marks on outer ring */}
        <line x1="160" y1="12"  x2="160" y2="28"  stroke="rgba(0,212,255,0.6)" strokeWidth="2"/>
        <line x1="160" y1="292" x2="160" y2="308" stroke="rgba(0,212,255,0.6)" strokeWidth="2"/>
        <line x1="12"  y1="160" x2="28"  y2="160" stroke="rgba(0,212,255,0.6)" strokeWidth="2"/>
        <line x1="292" y1="160" x2="308" y2="160" stroke="rgba(0,212,255,0.6)" strokeWidth="2"/>
        {/* Data point dots */}
        <circle cx="160" cy="84"  r="3" fill="var(--accent)" opacity="0.8"/>
        <circle cx="236" cy="160" r="3" fill="var(--accent)" opacity="0.8"/>
        <circle cx="160" cy="236" r="3" fill="var(--accent)" opacity="0.6"/>
        <circle cx="84"  cy="160" r="3" fill="var(--accent)" opacity="0.6"/>
        {/* Center pulsing dot */}
        <circle cx="160" cy="160" r="5" fill="var(--accent)" opacity="0.9" className="orb-center"/>
        <circle cx="160" cy="160" r="5" fill="none" stroke="var(--accent)" strokeWidth="1" className="orb-ping"/>
        {/* Diagonal small ticks */}
        <line x1="267" y1="67"  x2="257" y2="77"  stroke="rgba(0,212,255,0.35)" strokeWidth="1"/>
        <line x1="67"  y1="267" x2="77"  y2="257" stroke="rgba(0,212,255,0.35)" strokeWidth="1"/>
        <line x1="267" y1="253" x2="257" y2="243" stroke="rgba(0,212,255,0.35)" strokeWidth="1"/>
        <line x1="67"  y1="53"  x2="77"  y2="63"  stroke="rgba(0,212,255,0.35)" strokeWidth="1"/>
        {/* Status labels */}
        <text x="168" y="56"  fontFamily="Share Tech Mono" fontSize="8" fill="rgba(0,212,255,0.45)" letterSpacing="1">090°</text>
        <text x="168" y="276" fontFamily="Share Tech Mono" fontSize="8" fill="rgba(0,212,255,0.45)" letterSpacing="1">270°</text>
        <text x="20"  y="163" fontFamily="Share Tech Mono" fontSize="8" fill="rgba(0,212,255,0.45)" letterSpacing="1">180°</text>
        <text x="273" y="163" fontFamily="Share Tech Mono" fontSize="8" fill="rgba(0,212,255,0.45)" letterSpacing="1">000°</text>
        {/* Center coord */}
        <text x="135" y="178" fontFamily="Share Tech Mono" fontSize="7" fill="rgba(0,212,255,0.3)" letterSpacing="1">36.9741°N</text>
        <text x="140" y="188" fontFamily="Share Tech Mono" fontSize="7" fill="rgba(0,212,255,0.3)" letterSpacing="1">121.9552°W</text>
      </svg>
      {/* Glow backdrop */}
      <div className="orb-glow" />
    </div>
  );
}

export default function Hero() {
  const role = useTyping(resumeData.roles, 75);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-label">// SYSTEM INITIALIZED</p>
          <h1 className="hero-name">{resumeData.name}</h1>
          <div className="hero-role-wrap">
            <span className="hero-role">{role}</span>
            <span className="hero-cursor">_</span>
          </div>
          <p className="hero-tagline">{resumeData.tagline}</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-val">3.91</span>
              <span className="stat-label">M.S. GPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-val">3+</span>
              <span className="stat-label">INTERNSHIPS</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-val">UCSC</span>
              <span className="stat-label">M.S. CS</span>
            </div>
          </div>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">VIEW PROJECTS</a>
            <a href="#contact" className="btn-ghost">CONTACT</a>
          </div>
        </div>

        <div className="hero-right">
          <HudOrb />
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </section>
  );
}
