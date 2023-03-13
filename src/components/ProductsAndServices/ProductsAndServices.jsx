import React from 'react';
import { BLACK, MAIN_COLOR, WHITE } from '../../utils/colors';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductsAndServices = () => {
  return (
    <Container id='Products & Services' fluid style={{backgroundColor: BLACK, color: WHITE, padding: '165px 50px 75px 50px'}}>
      <h3 style={{textAlign: 'center', paddingBottom: 50}}>Produk Kami</h3>
        <Row>
          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: MAIN_COLOR}}>Haircut</h4>
              <span style={{color: MAIN_COLOR, fontSize: '1.5rem'}}>70k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </Col>
          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: MAIN_COLOR}}>Shave</h4>
              <span style={{color: MAIN_COLOR, fontSize: '1.5rem'}}>50k</span>
            </div>
          <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          </Col>

          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: MAIN_COLOR}}>Cut & Wash</h4>
              <span style={{color: MAIN_COLOR, fontSize: '1.5rem'}}>80k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
          </Col>
          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: MAIN_COLOR}}>Perm</h4>
              <span style={{color: MAIN_COLOR, fontSize: '1.5rem'}}>1000k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </Col>

          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: MAIN_COLOR}}>Membership</h4>
              <span style={{color: MAIN_COLOR, fontSize: '1.5rem'}}>2500k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur</p>
          </Col>
          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: MAIN_COLOR}}>Colouring</h4>
              <span style={{color: MAIN_COLOR, fontSize: '1.5rem'}}>700k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </Col>
        </Row>
    </Container>
  )
}

export default ProductsAndServices