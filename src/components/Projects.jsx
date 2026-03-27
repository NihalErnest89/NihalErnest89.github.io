import { resumeData } from '../data/resumeData';
import './Projects.css';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-header">
          <h2>PROJECTS</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card hud-card ${p.link ? 'project-card--linked' : ''}`}
              onClick={() => p.link && window.open(p.link, '_blank', 'noreferrer')}
            >
              <div className="project-header">
                <span className="project-index">// {String(i + 1).padStart(2, '0')}</span>
                <div className="project-header-right">
                  {p.link && <span className="project-link-hint">↗</span>}
                  <span className="project-period">{p.period}</span>
                </div>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="project-bullets">
                {p.bullets.map((b, j) => (
                  <li key={j}>
                    <span className="bullet-arrow">›</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {p.link && <div className="project-view-hint">VIEW PROJECT ↗</div>}
            </div>
          ))}
        </div>

        <div className="projects-github hud-reveal">
          <a
            href={resumeData.github}
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            VIEW GITHUB PROFILE ↗
          </a>
        </div>
      </div>
    </section>
  );
}
