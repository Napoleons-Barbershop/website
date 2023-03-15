import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiTwotoneCrown } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { TbHeartHandshake } from 'react-icons/tb'
import { GrPlan } from 'react-icons/gr'
import { AboutUsCardWrapper, AboutUsTitle } from './AboutUs.styled';


const AboutUs = () => {
  return (
    <Container fluid style={{padding: '165px 50px'}} id="About Us">
      <Row>
        <Col md={3}>
          <AboutUsCardWrapper>
            <div style={{paddingBottom: 20}}>
              <AiTwotoneCrown size={25} />
            </div>
            <AboutUsTitle><b>1. Premium Barbershop</b></AboutUsTitle>
            <span style={{textAlign: 'justify'}}>We are comitted to ensure that our barber services are up to the premium standard. If you are unsatisfied with your haircut, talk to us for a full refund!</span>
          </AboutUsCardWrapper>
        </Col>
        <Col md={3}>
          <AboutUsCardWrapper>
            <div style={{paddingBottom: 20}}>
              <FaUserTie size={25} />
            </div>
            <AboutUsTitle><b>2. Flexible membership plans</b></AboutUsTitle>
            <span style={{textAlign: 'justify'}}>We provide a 3-month and 6-month membership to ease you! Get our membership, earn our access for our all-you-can-cut membership, and just cut-and-go with no hassle.</span>
          </AboutUsCardWrapper>
        </Col>
        <Col md={3}>
          <AboutUsCardWrapper>
            <div style={{paddingBottom: 20}}>
              <TbHeartHandshake size={25} />
            </div>
            <AboutUsTitle><b>3. Personalisation</b></AboutUsTitle>
            <span style={{textAlign: 'justify'}}>Ever find it hard to recall what your last cut looked like? Just log in to our website and see your history with us!</span>
          </AboutUsCardWrapper>
        </Col>
        <Col md={3}>
          <AboutUsCardWrapper>
            <div style={{paddingBottom: 20}}>
              <GrPlan size={25} />
            </div>
            <AboutUsTitle><b>4. A barbershop with social awareness</b></AboutUsTitle>
            <span style={{textAlign: 'justify'}}>We have decided to also be accountable for the society in need. Hence, part of our earnings will be donated to respective parties. See our social journey on our website!</span>
          </AboutUsCardWrapper>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;