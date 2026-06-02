import { servicesData } from '../../data/servicesData';

export default function Services() {
  return (
    <section className="services section">
      <div className="container">
        <h2 className="section-title padd-15">Services</h2>
        <div className="row">
          {servicesData.map(service => (
            <div key={service.id} className={`service-item padd-15 ${service.className}`}>
              <div className="service-item-inner">
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text padd-15">
          <p>Looking for a custom job? <a href="#contact">Click here</a> to contact me!</p>
        </div>
      </div>
    </section>
  );
}
