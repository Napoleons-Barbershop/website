import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PLACEHOLDER_IMAGE from '../../assets/about-us-image-1.jpg'
import { ProfileImage } from './UserProfile.styled';


const UserProfile = () => {
  return (
    <Container fluid style={{padding: 20, maxWidth: 400}}>
      <Row>
        <Col>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <ProfileImage src={PLACEHOLDER_IMAGE} alt="Placeholder" />
            <div style={{paddingTop: 50}}>
              <p>{`Name: Test User`}</p>
              <p>{`Membership starts: 23/03/2023`}</p>
              <p>{`Membership ends: 23/6/2023`}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfile