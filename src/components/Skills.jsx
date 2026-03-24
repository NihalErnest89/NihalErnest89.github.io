import { resumeData } from '../data/resumeData';
import './Skills.css';

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-header">
          <h2>TECHNICAL SKILLS</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-group hud-card">
              <div className="skill-category">{category}</div>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item} className="tag skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
