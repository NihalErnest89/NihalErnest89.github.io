import { resumeData } from '../data/resumeData';
import './Experience.css';

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience">
      <div className="section-container">
        <div className="section-header">
          <h2>EXPERIENCE</h2>
        </div>

        <div className="exp-timeline">
          {experience.map((job, i) => (
            <div key={i} className="exp-item">
              <div className="exp-line-wrap">
                <div className="exp-dot" />
                {i < experience.length - 1 && <div className="exp-connector" />}
              </div>

              <div className="exp-card hud-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{job.company}</div>
                    <div className="exp-role">{job.role}</div>
                  </div>
                  <div className="exp-period">{job.period}</div>
                </div>

                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="bullet-arrow">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
