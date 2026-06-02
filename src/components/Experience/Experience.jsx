import { educationData, workExperienceData } from '../../data/experienceData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title padd-15">Experience</h2>
        <div className="row">
          <div className="education padd-15">
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  {educationData.map(edu => (
                    <div key={edu.id} className="timeline-item">
                      <i className={`lni ${edu.icon} timeline-icon`}></i>
                      <h3 className="timeline-date">
                        <i className="lni lni-calendar"></i> {edu.period}
                      </h3>
                      <h3 className="timeline-title">{edu.title}</h3>
                      <p className="timeline-text">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="experience padd-15">
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  {workExperienceData.map(exp => (
                    <div key={exp.id} className="timeline-item">
                      <i className={`lni ${exp.icon} timeline-icon`}></i>
                      <h3 className="timeline-date">
                        <i className="lni lni-calendar"></i> {exp.period}
                      </h3>
                      <h3 className="timeline-title">{exp.title}</h3>
                      <p className="timeline-text">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
