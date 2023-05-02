import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LocationMapImage from '../../assets/location-map.png';
import { MAROON } from '../../utils/colors';
import { MAPS_LINK } from '../../utils/constants';
import { LocationAddress, LocationImage } from './Location.styled';

const Location = () => {
  const onImageClick = () => {
    window.open(MAPS_LINK, '_blank')
  }

  return (
    <Container id="Location" style={{padding: '90px 50px'}}>
      <Row>
        <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', padding: '40px 0px'}}>
          <LocationImage src={LocationMapImage} alt="Napoleon Barbershop Location" onClick={onImageClick} />
          <LocationAddress>
            <h3 style={{color: MAROON, fontSize: 28}}>Alamat</h3>
            <address style={{fontSize: 18, fontStyle: 'normal'}}>
              Sentra Niaga Puri Indah Blok T6 no 31, <br /> 
              Jl. Puri Indah Raya No.32, RT.1/RW.2, <br /> 
              South Kembangan, Kembangan, West Jakarta City, <br />
              Jakarta 11610
            </address>
          </LocationAddress>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Location