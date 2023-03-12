import React, { startTransition } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LocationMapImage from '../../assets/location-map.png';
import { LIGHT_BROWN } from '../../utils/colors';
import { MAPS_LINK } from '../../utils/constants';

const Location = () => {
  const onImageClick = () => {
    window.open(MAPS_LINK, '_blank')
  }

  return (
    <Container id="Location" style={{padding: '90px 50px'}}>
      <Row>
        <Col style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '40px 0px'}}>
          <img style={{width: 400, objectFit: 'cover', alignSelf: 'start', cursor: 'pointer'}} src={LocationMapImage} alt="1301 Barberstore Location" onClick={onImageClick} />
          <div style={{alignSelf: startTransition}}>
            <h3 style={{color: LIGHT_BROWN, fontSize: 28}}>Alamat</h3>
            <address style={{fontSize: 18, fontStyle: 'normal'}}>
              Sentra Niaga Puri Indah Blok T6 no 31, <br /> 
              Jl. Puri Indah Raya No.32, RT.1/RW.2, <br /> 
              South Kembangan, Kembangan, West Jakarta City, <br />
              Jakarta 11610
            </address>
          </div>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Location