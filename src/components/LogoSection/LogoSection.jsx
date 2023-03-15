import React from 'react';
import Carousel from 'react-multi-carousel';
import FirstImage from '../../assets/about-us-image-1.jpg';
import SecondImage from '../../assets/about-us-image-2.jpg';
import ThirdImage from '../../assets/about-us-image-3.jpg';
import FourthImage from '../../assets/logo.jpg';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const LogoSection = () => {
  return (
    <div id="Home" style={{marginTop: 90}}>
      <Carousel responsive={responsive} draggable swipeable infinite autoPlay autoPlaySpeed={4000} transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
        <div style={{height: 'inherit'}}>
          <img src={FirstImage} alt="Carousel Image" style={{height: 700, width: '100%', objectFit: 'cover'}} />
        </div>
        <div style={{height: 'inherit'}}>
          <img src={SecondImage} alt="Carousel Image" style={{height: 700, width: '100%', objectFit: 'cover'}} />
        </div>
        <div style={{height: 'inherit'}}>
          <img src={ThirdImage} alt="Carousel Image" style={{height: 700, width: '100%', objectFit: 'cover'}} />
        </div>
        <div style={{height: 'inherit'}}>
          <img src={FourthImage} alt="Carousel Image" style={{height: 700, width: '100%', objectFit: 'cover'}} />
        </div>
      </Carousel>
    </div>
  )
}

export default LogoSection