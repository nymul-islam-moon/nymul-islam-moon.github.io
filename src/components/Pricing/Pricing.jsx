import { pricingData } from '../../data/pricingData';

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <h2 className="section-title padd-15">Pricing Plans</h2>
        <div className="row">
          {pricingData.map(plan => (
            <div key={plan.id} className="prices padd-15">
              <div className={`price-item ${plan.isBest ? 'best' : ''}`}>
                {plan.isBest && <span className="badge">{plan.badge}</span>}
                <img src={plan.image} alt={`${plan.plan} Plan`} />
                <h3 className="plan">{plan.plan}</h3>
                <p>{plan.description}</p>
                <p>{plan.support}</p>
                <h3 className="price"><em>$</em>{plan.price}<span>Month</span></h3>
                <a href="#contact" className="btn btn-default">Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
