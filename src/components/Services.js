import React from 'react';
import Slider from 'react-slick';
import '../styles/Services.css'; // Import your CSS file

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // This makes the slider vertical
    autoplay: true, // Slides will change automatically
    autoplaySpeed: 7000, // Time between slides in milliseconds
    arrows: false, // Disable navigation arrows
    pauseOnHover: false // Disable pause on hover
  };

  return (
    <section className="intro_section">
      <div className="slider-container">
        <Slider {...settings}>
          {/* Slide 1 - About Agency */}
          <div className="slide">
            <div className="slide-content">
              <div className="slide-image">
                <img style={{objectFit:"100%", height:'100%'}} src="images/slide01.png" alt="About Agency" />
              </div>
              <div className="slide-text">
                <div className="slide_description">
                  <h2 className="big">About Agency</h2>
                  <h2 className="muellerhoff">Something You Need to Know</h2>
                  <p className="entry-excerpt">
                    Nonumy eirmod tempor invidunt ut labore dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                  </p>
                  <a href="about.html" className="theme_button">About us</a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 - Our Services */}
          <div className="slide">
            <div className="slide-content">
              <div className="slide-image">
                <img src="images/slide02.png" alt="Our Services" />
              </div>
              <img src="images/slide02.png" alt="Our Services" />\
              
             
              <div className="slide-text">
                <div className="slide_description">
                  <h2 className="big">Our Services</h2>
                  <h2 className="muellerhoff">Something You Need to Know</h2>
                  <div className="media">
                    <div className="media-left">
                      <div className="service-media" />
                    </div>
                    <div className="media-body">
                      <h4>
                        <a href="#">Fashion Shows</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      </p>
                    </div>
                  </div>
                  {/* Add additional media sections as needed */}
                </div>
              </div>
            </div>
          </div>
          {/* Add additional slides as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
