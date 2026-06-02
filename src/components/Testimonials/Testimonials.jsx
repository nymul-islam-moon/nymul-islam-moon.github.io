import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialsData } from '../../data/testimonialsData';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title padd-15">Professional Testimonials</h2>
        <div className="swiper testimonial-wrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
          >
            {testimonialsData.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-item">
                  <div className="thumb">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h3>{testimonial.name}</h3>
                  <span className="subtitle">{testimonial.subtitle}</span>
                  <div className="comment">{testimonial.comment}</div>
                  {testimonial.links && testimonial.links.length > 0 && (
                    <div className="testimonial-links">
                      {testimonial.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="review-link"
                          title={link.type}
                        >
                          <i className={`lni ${link.icon}`}></i>
                          {link.type}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
