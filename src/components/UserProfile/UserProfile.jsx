import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import PLACEHOLDER_IMAGE from '../../assets/about-us-image-1.jpg'
import { ProfileImage } from './UserProfile.styled';
import firebase from '../../utils/firebase';
import { signOut } from "firebase/auth";
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { ref, get, child, set } from "firebase/database";
import { useEffect } from 'react';
import { formatDate, sanitizeEmail } from '../../utils/utils';
import { useState } from 'react';

const UserProfile = () => {
  const { auth, database } = firebase();
  const { user, setUser } = useLogin();
  const navigate = useNavigate();

  const [userProfileData, setUserProfileData] = useState(null);

  useEffect(() => {
    (async () => {
      const sanitizedEmail = sanitizeEmail(user?.email);
      if(sanitizeEmail) {
        const snapshot = await get(child(ref(database), `users/${sanitizedEmail}`));
        if(snapshot.exists()) {
          setUserProfileData(snapshot.val());
        } else {
          console.error('No data available');
          setUserProfileData(null);
        }
      }
    }
    )();
  }, [])

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
            <ProfileImage src={userProfileData && userProfileData.picture} alt="Placeholder" />
            <div style={{paddingTop: 50}}>
              <p>{`Email: ${userProfileData && user?.email}`}</p>
              <p>{`Membership starts: ${formatDate(userProfileData?.membershipStart)}`}</p>
              <p>{`Membership ends: ${formatDate(userProfileData?.membershipExpiry)}`}</p>
            </div>
            <Button variant="danger" onClick={onSignoutClick}>Sign out</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfile