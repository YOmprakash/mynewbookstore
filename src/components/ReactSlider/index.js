import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const ReactSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    dotsClass: "slick-dots",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://www.crossword.in/cdn/shop/files/Half-Price-banner_1512x@2x.jpg?v=1688742864"
            alt="nad"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://www.crossword.in/cdn/shop/files/Superpower_of_Play_Web_1512x@2x.jpg?v=1700809122"
            alt="nad"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://www.crossword.in/cdn/shop/files/Festive_eGiftCard_Desktop_8016d639-0683-48cf-b80c-caffd5812d9f_1512x@2x.png?v=1699550206"
            alt="nad"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://www.crossword.in/cdn/shop/files/Tweak_India_Welcome_To_Paradise_Website_Banner_Desktop_1512x@2x.jpg?v=1701409901"
            alt="nad"
            className="slider-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlider;
