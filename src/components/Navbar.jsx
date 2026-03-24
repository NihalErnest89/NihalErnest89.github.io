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
        <span className="logo-bracket">[</span>
        N.E.
        <span className="logo-bracket">]</span>
      </a>

      <div className="nav-links">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`nav-link ${active === l.href ? 'active' : ''}`}
            onClick={() => setActive(l.href)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
