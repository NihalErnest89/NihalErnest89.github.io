import { resumeData } from '../data/resumeData';
import './About.css';

export default function About() {
  const { education } = resumeData;

  return (
    <section id="about">
      <div className="section-container">
        <div className="section-header">
          <h2>ABOUT</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio hud-card">
            <p>
              ‘I’m a software engineer and recent graduate from the UC Santa Cruz M.S. Computer Science program. 
              I like building apps, especially when I get to use
              interesting technologies to fuel my passion or solve everyday problems.
            </p>
            <p>
              I've been into Formula One for years, so I built a prediction app with PyTorch
              and React trained on real telemetry data. I go fishing a lot, so I'm building a
              platform for my group to log catches, visualize them on maps, and get suggestions
              for future trips.
            </p>
            <p>
              I carry this passion and energy into my professional work. Across three
              internships, I've deployed LLM-integrated web apps, built automation pipelines
              that informed multi-million dollar decisions, and deployed full-stack systems on
              Azure and AWS, end-to-end.
            </p>
            <p>
              I'm looking for full-time software engineering roles, especially on teams
              building AI-powered products where I can take real ownership.
            </p>
          </div>

          <div className="about-edu">
            <p className="about-edu-label">// EDUCATION</p>
            {education.map((ed) => (
              <div key={ed.degree} className="edu-card hud-card">
                <div className="edu-degree">{ed.degree}</div>
                <div className="edu-school">{ed.school}</div>
                <div className="edu-meta">
                  <span className="edu-period">{ed.period}</span>
                  <span className="edu-gpa">GPA {ed.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
