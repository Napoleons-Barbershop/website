import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FirstImage from '../../assets/about-us-image-1.jpg';
import SecondImage from '../../assets/about-us-image-2.jpg';
import ThirdImage from '../../assets/about-us-image-3.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const AboutUs = () => {
  return (
    <div id="Home">
      <Carousel responsive={responsive} swipeable infinite /*autoPlay*/ customTransition="all .5" transitionDuration={500}>
        <div style={{height: 'inherit'}}>
          <img src={FirstImage} alt="Carousel Image" style={{height: 700, width: '100%', objectFit: 'cover'}} />
        </div>
        <div style={{height: 'inherit'}}>
          <img src={SecondImage} alt="Carousel Image" style={{height: 700, width: '100%', objectFit: 'cover'}} />
        </div>
        <div style={{height: 'inherit'}}>
          <img src={ThirdImage} alt="Carousel Image" style={{height: 700, width: '100%', objectFit: 'cover'}} />
        </div>
      </Carousel>
    </div>
  )
}

export default AboutUs