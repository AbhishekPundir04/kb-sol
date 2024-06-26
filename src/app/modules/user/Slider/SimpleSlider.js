import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImage1 from '../../../../assets/images/slider-images/SliderImage1.svg'
import SliderImage2 from '../../../../assets/images/slider-images/SliderImage2.svg'
import SliderImage3 from '../../../../assets/images/slider-images/SliderImage3.svg'

import './slider.scss'


const ImageSlider = ({ image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [SliderImage1, SliderImage2, SliderImage3];

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image-container">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
