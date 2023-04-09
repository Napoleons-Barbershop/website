import React, { useState } from 'react';
import { Col, Container, Row, Form, Dropdown, Button } from 'react-bootstrap';
import { NAPOLEON_BROWN_COLOR } from '../../utils/colors';
import { MEMBERSHIP_PLANS, SIX_MONTHS_IN_MILLISECONDS, THREE_MONTHS_IN_MILLISECONDS } from '../../utils/constants';
import { AiFillCamera } from 'react-icons/ai'
import CameraModal from '../CameraModal/CameraModal';
import firebase from '../../utils/firebase';
import { ref, set } from "firebase/database";
import { sanitizeEmail } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { signOut } from "firebase/auth";
import useLogin from '../../hooks/useLogin';

const AdminProfile = () => {

  const { auth, database } = firebase();
  const navigate = useNavigate();
  const { setUser } = useLogin();

  const [selectedMembershipOption, setSelectedMembershipOption] = useState('3');
  const [pictureMode, setPictureMode] = useState(false);
  const [email, setEmail] = useState(null);
  const [memberPicture, setMemberPicture] = useState(null);
  const [alertVariant, setAlertVariant] = useState(null);

  const renderDropdownToggleText = () => {
    if(selectedMembershipOption === '3') {
      return '3 Month Membership'
    } else if(selectedMembershipOption === '6') {
      return '6 Month Membership'
    }
  }

  const onTakePictureClick = () => {
    setPictureMode(true);
  }

  const handleCloseCameraModal = () => setPictureMode(false);

  const onSubmitMembershipPlan = async (evt) => {
    evt.preventDefault();
    if(email && memberPicture && selectedMembershipOption) {
      const sanitizedEmail = sanitizeEmail(email);
      let membershipStart = new Date().getTime();
      let membershipExpiry;

      if(selectedMembershipOption == '6') {
        membershipExpiry = membershipStart + SIX_MONTHS_IN_MILLISECONDS;
      } else if (selectedMembershipOption == '3') {
        membershipExpiry = membershipStart + THREE_MONTHS_IN_MILLISECONDS;
      }

      const payload = {
        picture: memberPicture,
        membershipStart,
        membershipExpiry
      }

      try {
        await set(ref(database, `users/${sanitizedEmail}`), payload)
        setAlertVariant('success');
        // navigate('/');
      } catch(err) {
        console.error(err);
        setAlertVariant('danger')
      }
    }
  }

  const renderAlert = () => {
    if(alertVariant === 'success') {
      return (
        <Alert variant="success" style={{width: '100%'}}>
          New member created
        </Alert>
      )
    } else if(alertVariant === 'danger') {
      return (
        <Alert variant="danger" style={{width: '100%'}}>
          Something is wrong when creating a new member
        </Alert>
      )
    }
  }

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
            {renderAlert()}
            <h3 style={{paddingBottom: 50}}>Enter new membership plan</h3>
            <Form style={{width: '75%'}} onSubmit={onSubmitMembershipPlan}>
              <Form.Group style={{paddingBottom: 20}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
              </Form.Group>

              <Button style={{marginBottom: 10, width: '100%'}} variant="primary" onClick={onTakePictureClick}>
                <AiFillCamera size={25} style={{marginRight: 10}} />
                Take a picture
              </Button>

              {
                memberPicture && 
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 30}}>
                  <img style={{height: 150}} src={memberPicture} alt="Member Profile" />  
                </div>
              }
              
              {pictureMode && <CameraModal memberPicture={memberPicture} setMemberPicture={setMemberPicture} show={pictureMode} handleClose={handleCloseCameraModal} />}

              <Dropdown style={{paddingBottom: 100, width: '100%'}} onSelect={(evtKey) => setSelectedMembershipOption(evtKey)}>
                <Dropdown.Toggle style={{width: '100%', backgroundColor: NAPOLEON_BROWN_COLOR, borderColor: NAPOLEON_BROWN_COLOR}}>
                  {renderDropdownToggleText()}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {MEMBERSHIP_PLANS.map((plan) => {
                    return (
                      <Dropdown.Item eventKey={plan.eventKey}>{plan.label}</Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown>
              <Button style={{width: '100%', marginBottom: 10}} variant="success" type="submit">
                Submit
              </Button>
              <Button style={{width: '100%'}} variant="danger" onClick={onSignoutClick}>Sign out</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminProfile;