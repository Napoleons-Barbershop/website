import React from 'react';
import Row from 'react-bootstrap/Row';
import { BLACK, MAIN_COLOR, NAPOLEON_BROWN_COLOR, NAPOLEON_BG, NAPOLEON_TEXT_COLOR, WHITE, MAROON } from '../../utils/colors';
import {MdLocationOn} from 'react-icons/md';
import {AiFillPhone, AiTwotoneMail, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';
import { BARBERSHOP_EMAIL, BARBERSHOP_MOBILE_NO, MAPS_LINK, BARBERSHOP_INSTAGRAM, BARBERSHOP_TIKTOK, BARBERSHOP_TWITTER } from '../../utils/constants';
import LocationMapImage from '../../assets/location-map.png';
import { 
  ContactUsContainer,
  ContactUsCol,
  ContactUsSectionWrapper,
  ContactUsSectionTitle,
  ContactUsAddress,
  ContactUsLocationImage,
  ContactUsSectionOpeningHoursTitle
} from './ContactUs.styled';

const ContactUs = () => {
  const onImageClick = () => {
    window.open(MAPS_LINK, '_blank')
  }

  return (
    <ContactUsContainer id="Contact Us">
      <Row>
        <ContactUsCol>
          <ContactUsSectionWrapper>
            <ContactUsSectionTitle>
              Contact Us
            </ContactUsSectionTitle>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiFillInstagram size={20} />
              </div>
              <a href={`https://www.instagram.com/${BARBERSHOP_INSTAGRAM}`} style={{fontSize: '1rem', fontStyle: 'normal', textDecoration: 'none', width: 285, color: NAPOLEON_BROWN_COLOR}}>
                {`@${BARBERSHOP_INSTAGRAM}`}
              </a>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <FaTiktok size={20} />
              </div>
              <a href={`https://www.tiktok.com/${BARBERSHOP_TIKTOK}`} style={{fontSize: '1rem', fontStyle: 'normal', textDecoration: 'none', width: 285, color: NAPOLEON_BROWN_COLOR}}>
                {BARBERSHOP_TIKTOK}
              </a>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiFillTwitterCircle size={20} />
              </div>
              <a href={`https://www.twitter.com/${BARBERSHOP_TWITTER}`} style={{fontSize: '1rem', fontStyle: 'normal', textDecoration: 'none', width: 285, color: NAPOLEON_BROWN_COLOR}}>
                {`@${BARBERSHOP_TWITTER}`}
              </a>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiFillPhone size={20} />
              </div>
              <a href={`tel:${BARBERSHOP_MOBILE_NO}`} style={{fontSize: '1rem', fontStyle: 'normal', textDecoration: 'none', width: 285, color: NAPOLEON_BROWN_COLOR}}>
                {BARBERSHOP_MOBILE_NO}
              </a>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiTwotoneMail size={20} />
              </div>
              <a href={`mailto:${BARBERSHOP_EMAIL}`} style={{fontSize: '1rem', fontStyle: 'normal', textDecoration: 'none', width: 285, color: NAPOLEON_BROWN_COLOR}}>
                {BARBERSHOP_EMAIL}
              </a>
            </div>
            <div>
              <ContactUsSectionOpeningHoursTitle>Opening Hours</ContactUsSectionOpeningHoursTitle>
              <span style={{fontSize: 18, fontStyle: 'normal', textAlign: 'center', color: NAPOLEON_BROWN_COLOR}}>
                Mon - Sun: 10:00 - 21:00
              </span>
            </div>
          </ContactUsSectionWrapper>
        </ContactUsCol>
        <ContactUsCol style={{textAlign: 'center'}}>
          <ContactUsSectionTitle>Address</ContactUsSectionTitle>
          <div>
            <ContactUsLocationImage style={{paddingBottom: 20}} src={LocationMapImage} alt="Napoleon Barbershop Location" onClick={onImageClick} />
          </div>
          <ContactUsAddress>
            <address style={{fontSize: 18, fontStyle: 'normal', textAlign: 'center', color: NAPOLEON_BROWN_COLOR}}>
              Sentra Niaga Puri Indah Blok T6 no 31, <br /> 
              Jl. Puri Indah Raya No.32, RT.1/RW.2, <br /> 
              South Kembangan, Kembangan, West Jakarta City, <br />
              Jakarta 11610
            </address>
          </ContactUsAddress>
        </ContactUsCol>
      </Row>
    </ContactUsContainer>
  )
}

export default ContactUs;