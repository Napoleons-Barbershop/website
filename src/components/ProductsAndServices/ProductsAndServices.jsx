import React from 'react';
import { BLACK, MAIN_COLOR, NAPOLEON_BG, NAPOLEON_TEXT_COLOR, WHITE } from '../../utils/colors';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductsAndServicesContainer, ProductsAndServicesContainerTitle, ProductsAndServicesProductWrapper, ProductsAndServicesProductTitle, ProductsAndServicesProductPrice, ProductsAndServicesProductDescription } from './ProductsAndServices.styled';

const ProductsAndServices = () => {
  return (
    <ProductsAndServicesContainer id='Products & Services' fluid>
      <ProductsAndServicesContainerTitle>Our Products</ProductsAndServicesContainerTitle>
        <Row>
          <Col md={6} style={{paddingBottom: 40}}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>3 Month Membership</ProductsAndServicesProductTitle>
              <ProductsAndServicesProductPrice>280k</ProductsAndServicesProductPrice>
            </ProductsAndServicesProductWrapper>
            <ProductsAndServicesProductDescription>An all-you-can-cut 3 month membership for the period to accomodate your busy schedule.</ProductsAndServicesProductDescription>
          </Col>
          <Col md={6} style={{paddingBottom: 40}}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>Standard Men's Package</ProductsAndServicesProductTitle>
              <ProductsAndServicesProductPrice>99k</ProductsAndServicesProductPrice>
            </ProductsAndServicesProductWrapper>
          <ProductsAndServicesProductDescription>Experience our complete starter pack for a clean and sleek haircut, just as you expected.</ProductsAndServicesProductDescription>
          </Col>

          <Col md={6} style={{paddingBottom: 40}}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>6 Month Membership</ProductsAndServicesProductTitle>
              <ProductsAndServicesProductPrice>555k</ProductsAndServicesProductPrice>
            </ProductsAndServicesProductWrapper>
            <ProductsAndServicesProductDescription>An all-you-can-cut 6 month membership for the period to accomodate your busy schedule.</ProductsAndServicesProductDescription>
          </Col>
          {/* <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: NAPOLEON_TEXT_COLOR}}>Perm</h4>
              <span style={{color: NAPOLEON_TEXT_COLOR, fontSize: '1.5rem'}}>1000k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </Col>

          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: NAPOLEON_TEXT_COLOR}}>Membership</h4>
              <span style={{color: NAPOLEON_TEXT_COLOR, fontSize: '1.5rem'}}>2500k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur</p>
          </Col>
          <Col md={6}>
            <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
              <h4 style={{color: NAPOLEON_TEXT_COLOR}}>Colouring</h4>
              <span style={{color: NAPOLEON_TEXT_COLOR, fontSize: '1.5rem'}}>700k</span>
            </div>
            <p style={{fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </Col> */}
        </Row>
    </ProductsAndServicesContainer>
  )
}

export default ProductsAndServices