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
      </div>
    </section>
  );
}
