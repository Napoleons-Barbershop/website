import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import PLACEHOLDER_IMAGE from '../../assets/about-us-image-1.jpg'
import { ProfileImage } from './UserProfile.styled';
import firebase from '../../utils/firebase';
import { signOut } from "firebase/auth";
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const auth = firebase();
  const { setUser } = useLogin();
  const navigate = useNavigate();

  const onSignoutClick = () => {
    setUser(null);
    signOut(auth).then(() => {
      localStorage.removeItem('user');
      navigate('/')
    }).catch(() => {
      console.error('Trouble signing out')
    })
  }

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
            <Button variant="danger" onClick={onSignoutClick}>Sign out</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfile