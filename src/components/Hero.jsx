import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { resumeData } from '../data/resumeData';
import './Hero.css';

// ── Typing hooks ─────────────────────────────────────────────
function useTypingOnce(text, speed, run, onDone) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    if (!run) return;
    if (display.length === text.length) { onDone?.(); return; }
    const t = setTimeout(() => setDisplay(text.slice(0, display.length + 1)),
      display.length === 0 ? 0 : speed);
    return () => clearTimeout(t);
  }, [run, display, text, speed, onDone]);
  return display;
}

function useCyclingTyping(texts, speed = 75) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) { setDisplay(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }
        else { setTimeout(() => setDeleting(true), 2200); }
      } else {
        if (charIdx > 0) { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }
        else { setDeleting(false); setIdx(i => (i + 1) % texts.length); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, idx, texts, speed]);
  return display;
}

// ── Reboot overlay ────────────────────────────────────────────
function RebootOverlay({ onReboot, onDone }) {
  const [stage, setStage] = useState(0);
  // 0=flash, 1=black, 2=overload text, 3=rebooting text, 4=fade out

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2800),
      setTimeout(() => setStage(4), 4200),
      setTimeout(onReboot, 4200), // restart HeroContent as overlay fades
      setTimeout(onDone,   5000), // remove overlay after fade completes
    ];
    return () => timers.forEach(clearTimeout);
  }, [onReboot, onDone]);

  return createPortal(
    <div className={`reboot-overlay reboot-stage-${stage}`}>
      {stage >= 2 && <p className="reboot-overload-text">⚡ SYSTEM OVERLOAD</p>}
      {stage >= 3 && <p className="reboot-booting-text">// REBOOTING...</p>}
    </div>,
    document.body
  );
}

// ── Arc Reactor ───────────────────────────────────────────────
function HudOrb({ power, onClick }) {
  const bladeRef = useRef(null);
  const sweepRef = useRef(null);
  const innerRef = useRef(null);
  const powerRef = useRef(power);
  powerRef.current = power;

  const state = useRef({
    blade: { angle: 0, speed: 0.7  },
    sweep: { angle: 0, speed: -0.15 },
    inner: { angle: 0, speed: -0.4  },
  });

  useEffect(() => {
    let rafId;
    const loop = () => {
      const t = powerRef.current / 100;
      const s = state.current;

      // Target speeds in deg/frame — lerp smoothly toward them
      s.blade.speed += ((0.7  + t * 5.8)  - s.blade.speed) * 0.05;
      s.sweep.speed += ((-0.15 - t * 1.5) - s.sweep.speed) * 0.05;
      s.inner.speed += ((-0.4  - t * 2.0) - s.inner.speed) * 0.05;

      s.blade.angle += s.blade.speed;
      s.sweep.angle += s.sweep.speed;
      s.inner.angle += s.inner.speed;

      if (bladeRef.current) bladeRef.current.style.transform = `rotate(${s.blade.angle}deg)`;
      if (sweepRef.current) sweepRef.current.style.transform = `rotate(${s.sweep.angle}deg)`;
      if (innerRef.current) innerRef.current.style.transform = `rotate(${s.inner.angle}deg)`;

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const t = power / 100;

  const outer1Speed = '55s';
  const outer2Speed = '20s';
  const dashed1Speed = '28s';

  const coreColor = power > 70
    ? `rgba(255, ${Math.round(220 - (power - 70) / 30 * 180)}, ${Math.round(100 - (power - 70) / 30 * 100)}, 0.98)`
    : 'rgba(220,248,255,0.98)';

  const glowFilter = power > 70
    ? `drop-shadow(0 0 10px rgba(255,100,0,0.9)) drop-shadow(0 0 25px rgba(255,50,0,0.5))`
    : `drop-shadow(0 0 8px #00d4ff) drop-shadow(0 0 20px rgba(0,212,255,0.7))`;

  const pwrColor = power > 80 ? `rgba(255,${Math.round(68 + (100-power)/20*150)},68,0.9)` : 'rgba(0,212,255,0.75)';

  // Outer SVG filter scales with power
  const svgGlow = power > 70
    ? `drop-shadow(0 0 ${16 + t * 28}px rgba(255,100,0,${0.4 + t * 0.5})) drop-shadow(0 0 ${40 + t * 50}px rgba(255,50,0,${0.2 + t * 0.3}))`
    : `drop-shadow(0 0 ${16 + t * 14}px rgba(0,212,255,${0.4 + t * 0.4})) drop-shadow(0 0 ${40 + t * 30}px rgba(0,150,255,${0.2 + t * 0.3}))`;

  // Orb glow div scales with power
  const orbGlowStyle = {
    background: power > 70
      ? `radial-gradient(circle, rgba(255,100,0,${0.08 + t * 0.18}) 0%, rgba(255,50,0,${0.04 + t * 0.1}) 40%, transparent 70%)`
      : `radial-gradient(circle, rgba(0,212,255,${0.07 + t * 0.18}) 0%, rgba(0,100,255,${0.04 + t * 0.1}) 40%, transparent 70%)`,
  };

  return (
    <div className="hud-orb-wrap" onClick={onClick} style={{ cursor: 'pointer' }}>
      <svg className="hud-orb-svg" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"
        style={{ filter: svgGlow }}>
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={power > 70 ? 'rgba(255,180,80,0.9)' : 'rgba(200,245,255,0.95)'} />
            <stop offset="25%"  stopColor={power > 70 ? 'rgba(255,100,0,0.5)'  : 'rgba(0,212,255,0.6)'}    />
            <stop offset="65%"  stopColor="rgba(0,150,255,0.12)" />
            <stop offset="100%" stopColor="rgba(0,100,255,0)"    />
          </radialGradient>
          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={`rgba(0,212,255,${0.07 + t * 0.1})`} />
            <stop offset="100%" stopColor="rgba(0,212,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="160" cy="160" r="148" fill="url(#ambientGlow)" />

        {/* Outer housing */}
        <circle cx="160" cy="160" r="148"
          fill="none" stroke="rgba(0,212,255,0.18)" strokeWidth="1" strokeDasharray="2 6"
          style={{ animation: `rotate-cw ${outer1Speed} linear infinite`, transformOrigin: '160px 160px' }} />
        <circle cx="160" cy="160" r="130"
          fill="none" stroke={`rgba(0,212,255,${0.45 + t*0.3})`} strokeWidth="1.5" strokeDasharray="89 45"
          style={{ animation: `rotate-ccw ${outer2Speed} linear infinite`, transformOrigin: '160px 160px' }} />
        <circle cx="160" cy="160" r="110"
          fill="none" stroke="rgba(0,212,255,0.28)" strokeWidth="1" strokeDasharray="170 57"
          style={{ animation: `rotate-cw ${dashed1Speed} linear infinite`, transformOrigin: '160px 160px' }} />

        {/* Tick marks */}
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 - 90) * Math.PI / 180;
          return (
            <line key={i}
              x1={160 + 122*Math.cos(a)} y1={160 + 122*Math.sin(a)}
              x2={160 + 138*Math.cos(a)} y2={160 + 138*Math.sin(a)}
              stroke="rgba(0,212,255,0.45)" strokeWidth={i % 3 === 0 ? 2 : 1} />
          );
        })}

        {/* 270° energy sweep — RAF controlled */}
        <circle ref={sweepRef} cx="160" cy="160" r="92"
          fill="none" stroke={`rgba(${power > 70 ? '255,120,0' : '0,212,255'},${0.75 + t*0.2})`}
          strokeWidth={2.5 + t * 2} strokeDasharray="435 145" strokeLinecap="round"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />

        {/* Reactor body ring */}
        <circle cx="160" cy="160" r="78"
          fill="none" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5" />

        {/* Turbine blades — RAF controlled */}
        <g ref={bladeRef} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
          {[0,45,90,135,180,225,270,315].map(a => (
            <path key={a}
              d="M 156.5,114 L 163.5,114 L 162,132 L 158,132 Z"
              transform={`rotate(${a}, 160, 160)`}
              fill={power > 70 ? `rgba(255,${Math.round(150 - (power-70)/30*150)},0,0.85)` : 'rgba(0,212,255,0.7)'}
              style={{ filter: `drop-shadow(0 0 3px ${power > 70 ? 'rgba(255,100,0,0.9)' : 'rgba(0,212,255,0.9)'})` }} />
          ))}
        </g>

        {/* Containment rings */}
        <circle cx="160" cy="160" r="70"
          fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.55)" strokeWidth="2" />
        <circle cx="160" cy="160" r="54"
          fill="none" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5" />
        {/* Inner dashed ring — RAF controlled */}
        <circle ref={innerRef} cx="160" cy="160" r="44"
          fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="1" strokeDasharray="8 4"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />

        {/* Core rings */}
        <circle cx="160" cy="160" r="32"
          fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.6)" strokeWidth="2" />
        <circle cx="160" cy="160" r="20"
          fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5" />

        {/* Core glow + center */}
        <circle cx="160" cy="160" r="65" fill="url(#coreGlow)" />
        <circle cx="160" cy="160" r="11"
          fill={coreColor}
          style={{ filter: glowFilter }}
          className="orb-center" />

      </svg>
      <div className="orb-glow" style={orbGlowStyle} />
      {power > 0 && (
        <div className="orb-readout">
          {power > 90 && <p className="orb-warning orb-warning--critical">!! OVERLOAD IMMINENT !!</p>}
          {power > 70 && power <= 90 && <p className="orb-warning orb-warning--high">⚠ HIGH POWER DRAW</p>}
          {power > 45 && power <= 70 && <p className="orb-warning orb-warning--elevated">POWER ELEVATED</p>}
          <p className="orb-pwr" style={{ color: pwrColor }}>PWR {Math.round(power)}%</p>
        </div>
      )}
    </div>
  );
}

// ── Hero content (remounted on reboot) ────────────────────────
const PHASES = { LABEL: 0, NAME: 1, CONTENT: 2 };

function HeroContent({ power, onReactorClick }) {
  const [phase, setPhase] = useState(PHASES.LABEL);

  const label = useTypingOnce('// WEBSITE INITIALIZED', 45, phase === PHASES.LABEL,
    useCallback(() => setPhase(PHASES.NAME), []));
  const name  = useTypingOnce(resumeData.name, 55, phase === PHASES.NAME,
    useCallback(() => setPhase(PHASES.CONTENT), []));
  const role  = useCyclingTyping(resumeData.roles, 75);
  const cv    = phase === PHASES.CONTENT;

  return (
    <>
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-label">
            {label}
            {phase === PHASES.LABEL && <span className="hero-cursor">_</span>}
          </p>
          <h1 className="hero-name">
            {name}
            {phase === PHASES.NAME && <span className="hero-cursor">_</span>}
          </h1>
          <div className={`hero-role-wrap ${cv ? 'visible' : ''}`}>
            <span className="hero-role">{cv ? role : ''}</span>
            {cv && <span className="hero-cursor">_</span>}
          </div>
          <p className={`hero-tagline ${cv ? 'visible' : ''}`}>{resumeData.tagline}</p>

          <div className={`hero-ctas ${cv ? 'visible' : ''}`}>
            <a href="#projects" className="btn-primary">VIEW PROJECTS</a>
            <a href="#contact" className="btn-ghost">LINKS</a>
          </div>
        </div>

        <div className="hero-right">
          <HudOrb power={power} onClick={onReactorClick} />
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </>
  );
}

// ── Hero (outer shell) ────────────────────────────────────────
export default function Hero() {
  const [power,      setPower]      = useState(0);
  const [overloading, setOverloading] = useState(false);
  const [rebootKey,  setRebootKey]  = useState(0);

  // Lock scroll during overload/reboot
  useEffect(() => {
    document.body.style.overflow = overloading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [overloading]);

  // Power decay
  useEffect(() => {
    if (power <= 0 || overloading) return;
    const id = setTimeout(() => setPower(p => Math.max(0, p - 2)), 250);
    return () => clearTimeout(id);
  }, [power, overloading]);

  const handleReactorClick = useCallback(() => {
    if (overloading) return;
    setPower(p => {
      const next = Math.min(100, p + 9);
      if (next >= 100) setOverloading(true);
      return next;
    });
  }, [overloading]);

  const handleReboot = useCallback(() => {
    setPower(0);
    setRebootKey(k => k + 1);
  }, []);

  const handleOverlayDone = useCallback(() => {
    setOverloading(false);
  }, []);

  return (
    <section className="hero" id="home">
      {overloading && <RebootOverlay onReboot={handleReboot} onDone={handleOverlayDone} />}
      <HeroContent key={rebootKey} power={power} onReactorClick={handleReactorClick} />
    </section>
  );
}
