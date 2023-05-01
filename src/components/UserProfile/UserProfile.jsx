import React from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { ProfileImage } from './UserProfile.styled';
import firebase from '../../utils/firebase';
import { signOut } from "firebase/auth";
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { ref, get, child, set } from "firebase/database";
import { useEffect } from 'react';
import { formatDate, resanitizeEmail, sanitizeEmail } from '../../utils/utils';
import { useState } from 'react';

const UserProfile = () => {
  const { auth, database } = firebase();
  const { user, setUser } = useLogin();
  const navigate = useNavigate();

  const [userProfileData, setUserProfileData] = useState(null);
  const [userProfileDataLoading, setUserProfileDataLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const sanitizedEmail = sanitizeEmail(user?.email);
      setUserProfileDataLoading(true);
      if(sanitizeEmail) {
        const snapshot = await get(child(ref(database), `users/${sanitizedEmail}`));
        if(snapshot.exists()) {
          setUserProfileData(snapshot.val());
        } else {
          console.error('No user available');
          setUserProfileData(null);
        }
        setUserProfileDataLoading(false);
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

  const renderProfile = () => {
    if(userProfileDataLoading) {
      return (
        <Spinner animation="border" role="status" style={{width: '4rem', height: '4rem'}} />
      )
    } else {
      if(!!userProfileData) {
        return (
          <>
            <ProfileImage src={userProfileData && userProfileData.picture} alt="Placeholder" />
            <div style={{paddingTop: 50}}>
              <p>{`Email: ${userProfileData && resanitizeEmail(user?.email)}`}</p>
              <p>{`Membership starts: ${formatDate(userProfileData?.membershipStart)}`}</p>
              <p>{`Membership ends: ${formatDate(userProfileData?.membershipExpiry)}`}</p>
            </div>
            <Button variant="danger" onClick={onSignoutClick}>Sign out</Button>
          </>
          
        )
      } else {
        return (
          <>
            <h2 style={{padding: '50px 0px', textAlign: 'center'}}>Not a member yet</h2>
            <Button variant="danger" onClick={onSignoutClick}>Sign out</Button>
          </>
        )
      }
    }
  }

  return (
    <Container fluid style={{padding: 20, maxWidth: 400}}>
      <Row>
        <Col>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            {renderProfile()}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfile