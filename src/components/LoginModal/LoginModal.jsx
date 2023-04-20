import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useLogin from '../../hooks/useLogin';
import { GoogleLoginButton, YahooLoginButton, MicrosoftLoginButton } from "react-social-login-buttons";
import { signInWithPopup, GoogleAuthProvider, OAuthProvider, } from "firebase/auth";
import firebase from '../../utils/firebase';

const LoginModal = () => {
  const { setOpenLoginModal, openLoginModal, setUser, setLoginLoading } = useLogin();
  const { auth } = firebase();

  const handleClose = () => {
    setOpenLoginModal(false);
  }

  const onGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoginLoading(true);
    const userCred = await signInWithPopup(auth, provider);
    setLoginLoading(false);
    handleClose();
    if(userCred?.user) {
      const { user } = userCred;
      setUser(user);

      const { stsTokenManager, displayName, email } = user;
      localStorage.setItem('user', JSON.stringify({
        accessToken: stsTokenManager.accessToken,
        refreshToken: stsTokenManager.refreshToken,
        displayName,
        email
      }))
    }
  }

  const onYahooSignIn = async () => {
    const provider = new OAuthProvider('yahoo.com');
    const userCred = await signInWithPopup(auth, provider);
    setLoginLoading(false);
    handleClose();
    if(userCred?.user) {
      const { user } = userCred;
      setUser(user);

      const { stsTokenManager, displayName, email } = user;
      localStorage.setItem('user', JSON.stringify({
        accessToken: stsTokenManager.accessToken,
        refreshToken: stsTokenManager.refreshToken,
        displayName,
        email
      }))
    }
  }

  const onMicrosoftSignIn = async () => {
    const provider = new OAuthProvider('microsoft.com');
    const userCred = await signInWithPopup(auth, provider);
    setLoginLoading(false);
    handleClose();
    if(userCred?.user) {
      const { user } = userCred;
      setUser(user);

      const { stsTokenManager, displayName, email } = user;
      localStorage.setItem('user', JSON.stringify({
        accessToken: stsTokenManager.accessToken,
        refreshToken: stsTokenManager.refreshToken,
        displayName,
        email
      }))
    }
  }

  return (
    <>
      <Modal
        show={openLoginModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <GoogleLoginButton
              onClick={onGoogleSignIn}
              style={{
                borderRadius: 8,
                border: '3px solid #000000',
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
                fontSize: 16,
                marginBottom: 20
              }} 
              text='Continue with Google'
             />
            <YahooLoginButton
              onClick={onYahooSignIn}
              style={{
                borderRadius: 8,
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
                fontSize: 16,
                marginBottom: 20
              }} 
              text='Continue with Yahoo'
             />
            <MicrosoftLoginButton
              onClick={onMicrosoftSignIn}
              style={{
                borderRadius: 8,
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
                fontSize: 16
              }} 
              text='Continue with Microsoft'
            />            
          </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;