import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'LINKS', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-track active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (s.getBoundingClientRect().top <= 120) current = `#${s.id}`;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const triggerScan = useCallback(() => {
    setScanning(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setScanning(true)));
    setTimeout(() => setScanning(false), 480);
  }, []);

  const closeMenu = (href) => {
    setActive(href);
    setMenuOpen(false);
    triggerScan();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo">
          <span className="nav-logo-bracket" />
          <span className="nav-logo-text">N.E.</span>
          <span className="nav-logo-sub">PORTFOLIO</span>
        </a>

        <div className="nav-links">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`nav-link ${active === l.href ? 'active' : ''}`}
              onClick={() => { setActive(l.href); triggerScan(); }}
            >
              <span className="nav-link-index">0{i+1}</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume-btn">
            RESUME
          </a>
          <div className="nav-status">
            <span className="nav-status-dot" />
            <span className="nav-status-text">AVAILABLE FOR HIRE</span>
          </div>
        </div>

        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span className={`nav-ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`nav-ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`nav-ham-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}>
        <div className="nav-drawer-inner">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-drawer-link"
              onClick={() => closeMenu(l.href)}
            >
              <span className="nav-drawer-index">0{i+1}</span>
              {l.label}
            </a>
          ))}
          <div className="nav-drawer-status">
            <span className="nav-status-dot" />
            <span className="nav-status-text">AVAILABLE FOR HIRE</span>
          </div>
        </div>
      </div>
      {menuOpen && <div className="nav-drawer-backdrop" onClick={() => setMenuOpen(false)} />}
      {scanning && <div className="nav-scan-flash" />}
    </>
  );
}
