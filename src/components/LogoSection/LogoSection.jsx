import React from 'react';
import Carousel from 'react-multi-carousel';
import FirstImage from '../../assets/logo.jpg';
import SecondImage from '../../assets/about-us-image-2.jpg';
import ThirdImage from '../../assets/about-us-image-3.jpg';
import FourthImage from '../../assets/about-us-image-1.jpg';
import { CAROUSEL_RESPONSIVE_SIZES_LOGO } from '../../utils/constants';
import { CarouselImage } from './LogoSection.styled';

import 'react-multi-carousel/lib/styles.css';

const LogoSection = () => {
  return (
    <div id="Home" style={{marginTop: 90}}>
      <Carousel responsive={CAROUSEL_RESPONSIVE_SIZES_LOGO} draggable swipeable infinite autoPlay autoPlaySpeed={4000} transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
        <div style={{height: 'inherit'}}>
          <CarouselImage loading='lazy' src={FirstImage} alt="Carousel Image" />
        </div>
        <div style={{height: 'inherit'}}>
          <CarouselImage loading='lazy' src={SecondImage} alt="Carousel Image" />
        </div>
        <div style={{height: 'inherit'}}>
          <CarouselImage loading='lazy' src={ThirdImage} alt="Carousel Image" />
        </div>
        <div style={{height: 'inherit'}}>
          <CarouselImage loading='lazy' src={FourthImage} alt="Carousel Image" />
        </div>
      </Carousel>
    </div>
  )
}

export default LogoSection