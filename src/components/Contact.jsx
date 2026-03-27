import { resumeData } from '../data/resumeData';
import './Contact.css';

export default function Contact() {
  const { email, github, linkedin } = resumeData;

  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2>LINKS</h2>
        </div>

        <div className="contact-wrap">
          <div className="contact-message hud-card">
            <p className="contact-heading">OPEN TO OPPORTUNITIES</p>
            <p className="contact-body">
              Looking for full-time software engineering roles. If you're building something
              interesting in AI, full-stack systems, or anything in between — let's connect.
            </p>
            <a href={`mailto:${email}`} className="btn-primary contact-btn">
              SEND A MESSAGE
            </a>
          </div>

          <div className="contact-links">
            <a href={`mailto:${email}`} className="contact-link hud-card">
              <span className="contact-link-label">// EMAIL</span>
              <span className="contact-link-val">{email}</span>
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="contact-link hud-card">
              <span className="contact-link-label">// GITHUB</span>
              <span className="contact-link-val">NihalErnest89</span>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="contact-link hud-card">
              <span className="contact-link-label">// LINKEDIN</span>
              <span className="contact-link-val">Nihal Ernest</span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="contact-link hud-card">
              <span className="contact-link-label">// RESUME</span>
              <span className="contact-link-val">View / Download PDF</span>
            </a>
          </div>
        </div>

        <div className="footer-bar">
          <span className="footer-text">
            NIHAL ERNEST &nbsp;·&nbsp; {new Date().getFullYear()}
          </span>
          <span className="footer-text">BUILT WITH REACT</span>
        </div>
      </div>
    </section>
  );
}
