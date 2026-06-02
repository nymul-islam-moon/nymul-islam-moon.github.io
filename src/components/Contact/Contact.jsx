import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getInputClass = (fieldName) => {
    return formData[fieldName] !== '' ? 'has-value' : '';
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title padd-15">Contact With Me</h2>
        <div className="row">
          <div className="contact-box padd-15">
            <div className="contact-data">
              <div className="contact-information">
                <h3 className="contact-subtitle">Connect on LinkedIn</h3>
                <a href="https://www.linkedin.com/in/nymul-islam-moon-5b7622200/" target="_blank" rel="noopener noreferrer" className="btn btn-default" style={{ marginTop: '0.5rem' }}>
                  <i className="fa-brands fa-linkedin"></i> Send Message on LinkedIn
                </a>
              </div>
              <div className="contact-information">
                <h3 className="contact-subtitle">Call me for instant support</h3>
                <span className="contact-description">
                  <i className="fa-solid fa-phone"></i>
                  +880 133 931 5497
                </span>
              </div>
              <div className="contact-information">
                <h3 className="contact-subtitle">Send me a mail</h3>
                <span className="contact-description">
                  <i className="fa-solid fa-envelope"></i>
                  nymulislam.dev@gmail.com
                </span>
              </div>
            </div>
          </div>

          <form className="contact-form padd-15" action="https://formspree.io/f/xgoqjlzd" method="POST">
            <div className="contact-inputs">
              <div className="contact-content">
                <input
                  type="email"
                  className={`contact-input ${getInputClass('email')}`}
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="contact-label">Email</label>
                <span></span>
              </div>

              <div className="contact-content">
                <input
                  type="text"
                  className={`contact-input ${getInputClass('subject')}`}
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject" className="contact-label">Subject</label>
                <span></span>
              </div>

              <div className="contact-content contact-area">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className={`contact-input ${getInputClass('message')}`}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="contact-label">Message</label>
                <span></span>
              </div>
            </div>
            <button type="submit" className="btn btn-default">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
