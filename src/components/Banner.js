import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/BannerSlider.css"; // Import the above CSS styles

const BannerSlider = () => {
  const settings = {
    dots: false, // Dots can be enabled if needed
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <Slider {...settings} className="banner-slider">
          <div className="gradient_bg_goriz">
            <div className="bg_overlay" />
            <img src="images/banner_slide_01.jpg" alt="Ad 1" />
            <div className="media-links">
              <a className="abs-link" href="#" />
            </div>
          </div>
          <div className="gradient_bg_goriz">
            <div className="bg_overlay" />
            <img src="images/banner_slide_02.jpg" alt="Ad 2" />
            <div className="media-links">
              <a className="abs-link" href="#" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
