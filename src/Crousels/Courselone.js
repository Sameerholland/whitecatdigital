import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Carousel.css";
import { useNavigate } from "react-router-dom";

import DownloadApp from "../Components/Subcomponents/DownloadApp";
import Services from "../Components/Subcomponents/Services";
import Portfolio from "../Components/Subcomponents/Portfolio";
import OurWorks from "../Components/Subcomponents/OurWorks";

const CarouselOne = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current) => setActiveSlide(current), // Update active slide
  };
  const handleClick = () => {
    navigate("/payment?id1=123&id2=456");
  };

  return (
    <div className="carousel our-works">
      <Slider {...settings}>
        <div className="slide2">
          <div className="header">
            <p className="SlideFirstContanier-slogen">We Build Business!</p>
            <p className="SlideFirstContanier-description">
              WhiteCat Digital offers expert website and app development
              services to bring your digital ideas to life. We specialize in
              creating modern, user-friendly designs with cutting-edge
              technology, ensuring seamless functionality across all platforms.
              From startups to established businesses, trust WhiteCat Digital to
              deliver customized solutions that elevate your brand's online
              presence.
            </p>
            <button
              className="SlideFirstContanier-button"
              onClick={() =>
                window.open("https://wa.me/917970515036", "_blank")
              }
            >
              Contact Now
            </button>
          </div>
        </div>
        <div className="slide">
          <DownloadApp />
        </div>
        <div className="slide">
          <Services />
        </div>
        <div className="slide1">
          <Portfolio isActive={activeSlide === 3} />
        </div>
        <div className="slide">
          <OurWorks/>
          </div>
      </Slider>
    </div>
  );
};

export default CarouselOne;
