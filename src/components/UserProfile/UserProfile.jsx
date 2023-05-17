import React from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { ProfileImage } from './UserProfile.styled';
import firebase from '../../utils/firebase';
import { signOut } from "firebase/auth";
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { ref, get, child } from "firebase/database";
import { useEffect } from 'react';
import { formatDate, formatDateTime, resanitizeEmail, sanitizeEmail } from '../../utils/utils';
import { useState } from 'react';
import NavBarBack from '../NavBarBack/NavBarBack';

const UserProfile = () => {
  const { auth, database } = firebase();
  const { user, setUser } = useLogin();
  const navigate = useNavigate();

  const [userProfileData, setUserProfileData] = useState(null);
  const [userProfileDataLoading, setUserProfileDataLoading] = useState(false);
  const [profileMode, setProfileMode] = useState('member-profile');

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
      if(profileMode === 'member-profile') {
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
      } else if(profileMode === 'after-cut-profile') {
        if(!!userProfileData && userProfileData.afterCutDetails) {
          return (
            <>
              {userProfileData.afterCutDetails?.afterCutPics && userProfileData.afterCutDetails?.afterCutPics.map((picture, i) => {
                return (
                  <img style={{ margin: 10 }} src={picture} alt={`Picture ${i + 1}`} />
                )
              })}
              {userProfileData.afterCutDetails?.date && <span style={{ fontSize: 18, paddingTop: 10, fontWeight: 'bold' }}>Last cut on: <b>{formatDate(userProfileData.afterCutDetails?.date)}</b></span>}

              {userProfileData.afterCutDetails?.capsterName && <span style={{ fontSize: 18, paddingTop: 10, fontWeight: 'bold' }}>Capster Name: <b>{userProfileData.afterCutDetails?.capsterName}</b></span>}
              
            </>
          )
        }
        
      }
    }
  }

  return (
    <div>
      <NavBarBack />
      <Container fluid style={{padding: 20, maxWidth: 400}}>
        <Row>
          <Col>
            {!!userProfileData && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <Button onClick={() => setProfileMode('member-profile')} style={{marginBottom: 10, color: '#fff'}} variant="secondary">Member Profile</Button>
              <Button onClick={() => setProfileMode('after-cut-profile')} style={{ marginBottom: 10, color: '#fff'}} variant="secondary">Latest cut details</Button>
            </div>}
            <div style={{padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              {renderProfile()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserProfile