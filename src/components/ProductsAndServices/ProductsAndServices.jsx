import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductsAndServicesContainer, ProductsAndServicesContainerTitle, ProductsAndServicesProductWrapper, ProductsAndServicesProductTitle, ProductsAndServicesProductPrice, ProductsAndServicesProductDescription, ProductsAndServices6MonthCol, ProductsAndServicesHairSpaCol, ProductsAndServices3MonthCol, ProductsAndServicesStandardCutCol, ProductsAndServicesShavingRow, ProductsAndServicesFaceMaskRow, ProductsAndServicesHairColouringRow, ProductsAndServicesShavingCol, ProductsAndServicesFaceMaskCol, ProductsAndServicesHairColouringCol } from './ProductsAndServices.styled';

const ProductsAndServices = () => {
  return (
    <ProductsAndServicesContainer id='Products & Services' fluid>
      <ProductsAndServicesContainerTitle>Our Products</ProductsAndServicesContainerTitle>
        <Row>
          <ProductsAndServicesStandardCutCol md={6}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>Standard Men's Package</ProductsAndServicesProductTitle>
              <ProductsAndServicesProductPrice>99k</ProductsAndServicesProductPrice>
            </ProductsAndServicesProductWrapper>
            <ProductsAndServicesProductDescription>Experience our complete starter pack for a clean and sleek haircut, just as you expected.</ProductsAndServicesProductDescription>
          </ProductsAndServicesStandardCutCol>

          <ProductsAndServices3MonthCol md={6}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>3 Month Membership</ProductsAndServicesProductTitle>
              <ProductsAndServicesProductPrice>290k</ProductsAndServicesProductPrice>
            </ProductsAndServicesProductWrapper>
            <ProductsAndServicesProductDescription>An all-you-can-cut 3 month membership for the period to accomodate your busy schedule.</ProductsAndServicesProductDescription>
          </ProductsAndServices3MonthCol>

          <ProductsAndServicesHairSpaCol md={6} style={{paddingBottom: 40}}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>Hair Spa</ProductsAndServicesProductTitle>
              <ProductsAndServicesProductPrice>20k</ProductsAndServicesProductPrice>
            </ProductsAndServicesProductWrapper>
            <ProductsAndServicesProductDescription>Guaranteed you'll enjoy this one for a healthy scalp and stress-free head massage.</ProductsAndServicesProductDescription>
          </ProductsAndServicesHairSpaCol>

          <ProductsAndServices6MonthCol md={6}>
            <ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductTitle>6 Month Membership</ProductsAndServicesProductTitle>
              <ProductsAndServicesProductPrice>570k</ProductsAndServicesProductPrice>
            </ProductsAndServicesProductWrapper>
            <ProductsAndServicesProductDescription>An all-you-can-cut 6 month membership for the period to accomodate your busy schedule.</ProductsAndServicesProductDescription>
          </ProductsAndServices6MonthCol>

          <ProductsAndServicesShavingRow>
            <ProductsAndServicesShavingCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Shaving</ProductsAndServicesProductTitle>
                <ProductsAndServicesProductPrice>25k</ProductsAndServicesProductPrice>
              </ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductDescription>The ladies will love your trimmed beard, kings.</ProductsAndServicesProductDescription>
            </ProductsAndServicesShavingCol>
          </ProductsAndServicesShavingRow>
          
          <ProductsAndServicesFaceMaskRow>
            <ProductsAndServicesFaceMaskCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Charcoal Face Mask</ProductsAndServicesProductTitle>
                <ProductsAndServicesProductPrice>50k</ProductsAndServicesProductPrice>
              </ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductDescription>"Charcoal masks work to deep clean your pores, removing excess dirt, oil, and other impurities. They also have some exfoliating properties, so your skin will feel smoother after use." -Google</ProductsAndServicesProductDescription>
            </ProductsAndServicesFaceMaskCol>
          </ProductsAndServicesFaceMaskRow>
          
          <ProductsAndServicesHairColouringRow>
            <ProductsAndServicesHairColouringCol md={6}>
              <ProductsAndServicesProductWrapper>
                <ProductsAndServicesProductTitle>Basic Hair Coloring</ProductsAndServicesProductTitle>
                <ProductsAndServicesProductPrice>200k</ProductsAndServicesProductPrice>
              </ProductsAndServicesProductWrapper>
              <ProductsAndServicesProductDescription>YOLO, right?</ProductsAndServicesProductDescription>
            </ProductsAndServicesHairColouringCol>
          </ProductsAndServicesHairColouringRow>
        </Row>
    </ProductsAndServicesContainer>
  )
}

export default ProductsAndServices