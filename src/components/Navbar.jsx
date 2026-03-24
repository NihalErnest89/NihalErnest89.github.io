import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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
            onClick={() => setActive(l.href)}
          >
            <span className="nav-link-index">0{i+1}</span>
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav-status">
        <span className="nav-status-dot" />
        <span className="nav-status-text">AVAILABLE FOR HIRE</span>
      </div>
    </nav>
  );
}
