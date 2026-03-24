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
            <p className="about-intro">
              I'm Nihal — a recent M.S. Computer Science graduate from UC Santa Cruz.
            </p>
            <p>
              Across three software engineering internships building AI-powered products on
              Azure and AWS, I've found what I enjoy most: owning things end-to-end, from
              backend logic to user-facing experience.
            </p>
            <p>
              That instinct doesn't switch off outside of work. I've followed Formula One
              for years, and eventually I had to ask — can I actually predict race outcomes?
              That turned into a full-stack ML application trained on real F1 telemetry data.
              Same with fishing — my friends and I kept hitting the same frustration: there's
              no platform that lets you log catches the way you actually want to. So I'm
              building one.
            </p>
            <p>
              I'm drawn to AI, systems, and products that solve real problems.
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
