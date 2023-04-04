import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import useLogin from '../../hooks/useLogin';
import { PASSWORD_REGEX } from '../../utils/constants';
import useFirebaseConfig from '../../hooks/firebase';
import { GoogleLoginButton, YahooLoginButton, MicrosoftLoginButton } from "react-social-login-buttons";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../../utils/firebase';

const LoginModal = () => {
  const { setOpenLoginModal, openLoginModal, user, setUser, setLoginLoading } = useLogin();
  // const { auth } = useFirebaseConfig();
  // const [show, setShow] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  const [mode, setMode] = useState('login');
  const [validated, setValidated] = useState(false);
  const auth = firebase();

  const handleClose = () => {
    setOpenLoginModal(false);
    setMode('login')
  }

  const onLogin = () => {
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const onSignUp = () => {
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // to switch between login/sign up
  const onToggleLogin = () => {
    if(mode === 'login') {
      setMode('sign-up');
    } else {
      setMode('login');
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  const onYahooSignIn = () => {
    const provider = new OAuthProvider('yahoo.com');
    signInWithRedirect(auth, provider);
    // signInWithPopup(auth, provider)
    // .then((result) => {
    //   // IdP data available in result.additionalUserInfo.profile
    //   // ...
    //   console.log('abcabc', result)
    //   // Yahoo OAuth access token and ID token can be retrieved by calling:
    //   const credential = OAuthProvider.credentialFromResult(result);
    //   const accessToken = credential.accessToken;
    //   const idToken = credential.idToken;
    // })
    // .catch((error) => {
    //   // Handle error.
    // });
  }

  const onMicrosoftSignIn = () => {
    const provider = new OAuthProvider('microsoft.com');
    signInWithRedirect(auth, provider);
    // const auth = getAuth();
    // signInWithPopup(auth, provider)
    // .then((result) => {
    //   // User is signed in.
    //   // IdP data available in result.additionalUserInfo.profile.
    //   console.log('abcabc', result)
    //   // Get the OAuth access token and ID Token
    //   const credential = OAuthProvider.credentialFromResult(result);
    //   const accessToken = credential.accessToken;
    //   const idToken = credential.idToken;
    // })
    // .catch((error) => {
    //   // Handle error.
    // });
  }

  useEffect(() => {
    setLoginLoading(true);
    getRedirectResult(auth).then((result) => {
      setLoginLoading(false);
      if(result?.user) {
        const { user, stsTokenManager, displayName, email } = result;
        setUser(user);
        localStorage.setItem('user', JSON.stringify({
          accessToken: stsTokenManager.accessToken,
          refreshToken: stsTokenManager.refreshToken,
          displayName,
          email
        }))
      }
    })
  }, [])

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
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
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
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control pattern={PASSWORD_REGEX} required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              {(password !== rePassword) && (!!rePassword) && <Form.Control.Feedback type="invalid">
                Password does not match
              </Form.Control.Feedback>}
            </Form.Group>

            {mode === 'sign-up' && <Form.Group className="mb-3" controlId="formBasicRePassword">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control required type="password" placeholder="Re-enter Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
              {(password !== rePassword) && (!!rePassword) && <Form.Control.Feedback type="invalid">
                Password does not match
              </Form.Control.Feedback>}
            </Form.Group>}
            
            {mode === 'login' && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <span style={{fontSize: '0.75rem', paddingBottom: 10}}>Or alternatively,</span>
              <Button variant="primary" onClick={onToggleLogin}>
                {mode === 'login' ? 'Sign up' : 'Login'}
              </Button>
            </div>} */}
            
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {mode === 'login' ? 'Login' : 'Create Account'}
            </Button>
          </Modal.Footer> */}
        {/* </Form> */}
      </Modal>
    </>
  );
}

export default LoginModal;