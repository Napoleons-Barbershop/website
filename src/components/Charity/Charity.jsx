import React from 'react';
import Carousel from 'react-multi-carousel';
import FirstImage from '../../assets/charity-image-1.jpg';
import SecondImage from '../../assets/charity-image-2.jpg';
import ThirdImage from '../../assets/charity-image-3.jpg';
import FourthImage from '../../assets/charity-image-4.jpg';

import 'react-multi-carousel/lib/styles.css';
import { CAROUSEL_RESPONSIVE_SIZES_CHARITY } from '../../utils/constants';
import { NAPOELON_CAPTION_BROWN_COLOR, NAPOLEON_BROWN_COLOR, WHITE } from '../../utils/colors';


const Charity = () => {
  return (
    <div id="Charity" style={{padding: '100px 50px 75px 50px', backgroundColor: NAPOLEON_BROWN_COLOR, color: WHITE}}>
      <h3 style={{textAlign: 'center', fontSize: '1.8rem'}}>Charity Work</h3>
      <Carousel responsive={CAROUSEL_RESPONSIVE_SIZES_CHARITY} draggable swipeable infinite /*autoPlay*/ autoPlaySpeed={4000} transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
        <div style={{height: 'inherit', padding: '20px 0px 20px 20px', display: 'flex', flexDirection: 'column'}}>
          <img loading='lazy' src={FirstImage} alt="Carousel Image" style={{height: 300, width: '100%', objectFit: 'cover'}} />
          <caption style={{color: NAPOELON_CAPTION_BROWN_COLOR}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</caption>
        </div>
        <div style={{height: 'inherit', padding: '20px 0px 20px 20px', display: 'flex', flexDirection: 'column'}}>
          <img loading='lazy' src={SecondImage} alt="Carousel Image" style={{height: 300, width: '100%', objectFit: 'cover'}} />
          <caption style={{color: NAPOELON_CAPTION_BROWN_COLOR}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</caption>
        </div>
        <div style={{height: 'inherit', padding: '20px 0px 20px 20px', display: 'flex', flexDirection: 'column'}}>
          <img loading='lazy' src={ThirdImage} alt="Carousel Image" style={{height: 300, width: '100%', objectFit: 'cover'}} />
          <caption style={{color: NAPOELON_CAPTION_BROWN_COLOR}}>Lorem ipsum dolor sit amet</caption>
        </div>
        <div style={{height: 'inherit', padding: '20px 0px 20px 20px', display: 'flex', flexDirection: 'column'}}>
          <img loading='lazy' src={FourthImage} alt="Carousel Image" style={{height: 300, width: '100%', objectFit: 'cover'}} />
          <caption style={{color: NAPOELON_CAPTION_BROWN_COLOR}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</caption>
        </div>
      </Carousel>
    </div>
  )
}

export default Charity