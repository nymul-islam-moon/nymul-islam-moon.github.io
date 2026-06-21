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
            <div className="about-img-container">
              <div className="glassmorphism-glow glow-1"></div>
              <div className="glassmorphism-glow glow-2"></div>
              <div className="about-img-wrapper">
                <img src="/assets/img/professionalPhoto.png" alt="Nymul Islam Moon - Professional Portrait" />
              </div>
            </div>
          </div>

          <div className="about-content padd-15">
            <div className="rounded">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>Applied AI & Backend Engineer</h3>
                  <p>I am a production-focused <strong>AI Engineer and Backend Developer based in Bangladesh</strong>, specializing in building scalable, reliable, and trustworthy AI-powered systems.</p>

                  <p>My journey began with competitive programming in C/C++, transitioned into architecting large-scale enterprise platforms (PHP, Laravel ERP/CRM), and has now evolved into <strong>Python-first AI engineering</strong>. Today, I bridge the gap between advanced Large Language Models (LLMs) and stable enterprise architecture.</p>

                  <h4>Core Expertise</h4>
                  <ul className="expertise-list">
                    <li><strong>AI Infrastructure & RAG:</strong> Building production-ready Retrieval-Augmented Generation (RAG) systems using OpenAI models, vector embeddings, and Elasticsearch-based semantic search.</li>
                    <li><strong>Enterprise Backend Systems:</strong> Designing clean, high-performance, API-driven architectures built to handle complex business logic without hallucinations or data leaks.</li>
                    <li><strong>Tech Stack:</strong> Python, FastAPI, PHP, Laravel, Elasticsearch, C/C++, and relational/vector databases.</li>
                  </ul>

                  <p>I focus on translating complex enterprise requirements into secure, structured, and business-grounded AI backends. If you are looking for an experienced AI engineer to build or scale your intelligent data infrastructure, let's connect.</p>

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
