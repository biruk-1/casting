import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Testimony.css'; // Custom styles, if needed
import BannerSlider from './Banner'; // Import the BannerSlider component

const testimonials = [
  { text: 'At vero eos et accusam...', img: 'images/team/01.jpg', name: 'Carl Johnson', position: 'Manager' },
  { text: 'At vero eos et accusamus...', img: 'images/team/02.jpg', name: 'Jane Doe', position: 'Designer' },
  { text: 'Et harum quidem rerum...', img: 'images/team/03.jpg', name: 'John Smith', position: 'Developer' },
  { text: 'Temporibus autem quibusdam...', img: 'images/team/04.jpg', name: 'Alice Johnson', position: 'Marketing' },
  { text: 'Sed ut perspiciatis unde...', img: 'images/team/05.jpg', name: 'Michael Lee', position: 'Sales' },
];

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <section style = {{margin:"20px 20px 20px 20px"}} className="ds page_testimonials">
      <div className="container">
        <BannerSlider /> {/* Include the BannerSlider component here */}
        <div style = {{padding:"-20px 0"}} className="row topmargin_40 bottommargin_40">
          <div className="col-sm-12 text-center">
            <h2>
              <span className="big">Our Agency</span>
              <br />
              <span className="highlight muellerhoff">
                Testimonials &amp; Quotes
              </span>
            </h2>
            <div className="testimonials-body">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className={`blockquote-big ${currentIndex === index ? 'active' : ''}`}
                >
                  {testimonial.text}
                </blockquote>
              ))}
            </div>
            <Slider {...sliderSettings} className="testimonials-carousel">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`testimonial ${currentIndex === index ? 'active' : ''}`}>
                  <div className="author-photo">
                    <img src={testimonial.img} alt={testimonial.name} />
                  </div>
                  {/* <h1>photoName</h1> */}
                  {/* <div className="author-meta"> */}
                  <div>
                    <span className="bold highlight">{testimonial.name}</span>
                    <br /> {testimonial.position}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
