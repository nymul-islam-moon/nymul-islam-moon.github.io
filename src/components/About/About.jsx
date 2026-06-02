import { useState, useEffect, useRef } from 'react';
import { skillsData } from '../../data/skillsData';
import { factsData } from '../../data/factsData';

export default function About() {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSkillsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title padd-15">About Me</h2>
        <div className="row">
          <div className="about-img padd-15">
            <div className="about-img-wrapper">
              <img src="/assets/img/professionalPhoto.png" alt="Nymul Islam Moon - Professional Portrait" />
            </div>
          </div>

          <div className="about-content padd-15">
            <div className="rounded">
              <div className="row">
                <div className="about-text padd-15">
                  <p>I'm an Applied AI & Backend Engineer from Bangladesh with a strong foundation in problem solving, enterprise backend development, and AI-powered systems. My journey began with competitive programming in C/C++, evolved through building large-scale PHP and Laravel-based ERP, HRM, CRM, and E-commerce platforms, and now focuses on Python-first AI engineering. I currently work on designing backend AI systems using OpenAI models, embeddings, Elasticsearch-based semantic search, and Retrieval-Augmented Generation (RAG) to deliver accurate, business-grounded responses. My core interest lies in building scalable, reliable, and trustworthy AI backends that strictly operate on structured internal data, minimizing hallucinations and irrelevant outputs. I enjoy translating complex business requirements into clean API-driven architectures and continuously deepen my expertise in Python, LLM systems, and modern AI infrastructure.</p>
                  <div>
                    <a href="#contact" className="btn btn-default">Download CV</a>
                  </div>
                </div>

                <div className="skills padd-15" ref={skillsRef}>
                  <div className="row">
                    {skillsData.map((skill) => (
                      <div key={skill.name} className={`skill-item ${skill.className}`}>
                        <h4>{skill.name}</h4>
                        <div className="progress">
                          <div className="progress-in" style={{ width: isSkillsVisible ? `${skill.percent}%` : '0%' }}></div>
                          <div className="skill-percent">{skill.percent}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {factsData.map(fact => (
            <div key={fact.id} className="fact-item padd-15">
              <i className={`lni ${fact.icon}`}></i>
              <div className="details">
                <h3>{fact.number}</h3>
                <p>{fact.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
