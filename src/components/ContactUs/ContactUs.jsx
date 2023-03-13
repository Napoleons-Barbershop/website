import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BLACK, MAIN_COLOR, MAROON, WHITE } from '../../utils/colors';
import {MdLocationOn} from 'react-icons/md';
import {AiFillPhone, AiTwotoneMail} from 'react-icons/ai';
import { BARBERSHOP_EMAIL, BARBERSHOP_MOBILE_NO } from '../../utils/constants';

const ContactUs = () => {
  return (
    <Container id="Contact Us" fluid style={{backgroundColor: WHITE, color: BLACK, padding: '165px 50px'}}>
      <Row>
        <Col>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2 style={{paddingBottom: 50, color: MAROON}}>
              Contact Us
            </h2>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <MdLocationOn size={20} />
              </div>
              <address style={{fontSize: '0.75rem', fontStyle: 'normal', width: 285, color: MAIN_COLOR}}>
                Sentra Niaga Puri Indah Blok T6 no 31, <br /> 
                Jl. Puri Indah Raya No.32, RT.1/RW.2, <br /> 
                South Kembangan, Kembangan, West Jakarta City, <br />
                Jakarta 11610
              </address>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiFillPhone size={20} />
              </div>
              <a href={`tel:${BARBERSHOP_MOBILE_NO}`} style={{fontSize: '0.75rem', fontStyle: 'normal', textDecoration: 'none', width: 285, color: MAIN_COLOR}}>
                {BARBERSHOP_MOBILE_NO}
              </a>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: 30, height: 30, alignSelf: 'start'}}>
                <AiTwotoneMail size={20} />
              </div>
              <a href={`mailto:${BARBERSHOP_EMAIL}`} style={{fontSize: '0.75rem', fontStyle: 'normal', textDecoration: 'none', width: 285, color: MAIN_COLOR}}>
                {BARBERSHOP_EMAIL}
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactUs;