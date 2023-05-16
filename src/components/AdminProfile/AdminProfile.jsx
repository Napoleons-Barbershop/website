import React, { useState } from 'react';
import { Col, Container, Row, Form, Dropdown, Button, Alert } from 'react-bootstrap';
import { NAPOLEON_BROWN_COLOR } from '../../utils/colors';
import { ADMIN_EMAIL, MEMBERSHIP_PLANS  } from '../../utils/constants';
import { AiFillCamera } from 'react-icons/ai'
import CameraModal from '../CameraModal/CameraModal';
import firebase from '../../utils/firebase';
import { ref, set, get, child } from "firebase/database";
import { sanitizeEmail } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import useLogin from '../../hooks/useLogin';
import { addMonths } from 'date-fns'
import { useEffect } from 'react';
import NavBarBack from '../NavBarBack/NavBarBack';

const AdminProfile = () => {

  const { auth, database } = firebase();
  const navigate = useNavigate();
  const { setUser, user } = useLogin();
  const isAdmin = user?.email === ADMIN_EMAIL

  const [selectedMembershipOption, setSelectedMembershipOption] = useState('3');
  const [pictureMode, setPictureMode] = useState(false);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [name, setName] = useState(null);
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
    if(email && memberPicture && selectedMembershipOption && phoneNumber && name) {
      const sanitizedEmail = sanitizeEmail(email);
      let membershipStart = new Date().getTime();
      let membershipExpiry;

      if(selectedMembershipOption == '6') {
        membershipExpiry = addMonths(new Date(membershipStart), 6);
      } else if (selectedMembershipOption == '3') {
        membershipExpiry = addMonths(new Date(membershipStart), 3);
      }

      const payload = {
        picture: memberPicture,
        membershipStart,
        membershipExpiry: membershipExpiry.getTime(),
        phoneNumber,
        name
      }
      try {
        const snapshot = await get(child(ref(database), `users/${sanitizedEmail}`));
        if(snapshot.exists()) {
          showAlert('warning');
        } else {
          setAlertVariant(null);
          await set(ref(database, `users/${sanitizedEmail}`), payload);
          window.scrollTo(0, 0);
          showAlert('success');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        }
      } catch(err) {
        console.error(err);
        showAlert('danger')
      }
    } else {
      alert("Please fill email, name, phone number and picture");
    }
  }

  const showAlert = (variant) => {
    setAlertVariant(variant);
    setTimeout(() => {
      setAlertVariant(null);
    }, 3000)
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
    } else if(alertVariant === 'warning') {
      return (
        <Alert variant="warning" style={{width: '100%'}}>
          {`User ${email} already exists`}
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

  const onAdminDashboardClick = () => {
    navigate('/admin-dashboard');
  }

  const onAfterCutPic = () => {
    navigate('/after-cut-pic');
  }

  useEffect(() => {
    if(!user || !isAdmin) {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <NavBarBack route="/" />
      <Container fluid style={{padding: 20, maxWidth: 400}}>
      <Row>
        <Col>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Button onClick={onAdminDashboardClick} style={{marginBottom: 10, color: '#fff'}} variant="secondary">Admin Dashboard</Button>
            <Button onClick={onAfterCutPic} style={{ marginBottom: 10, color: '#fff'}} variant="secondary">After-cut pic</Button>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            {renderAlert()}
            <h3 style={{paddingBottom: 50}}>Enter new membership plan</h3>
            <Form style={{width: '75%'}} onSubmit={onSubmitMembershipPlan}>
              <Form.Group style={{paddingBottom: 20}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group style={{paddingBottom: 20}}>
                <Form.Label>Name</Form.Label>
                <Form.Control required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group style={{paddingBottom: 20}}>
                <Form.Label>Phone number (021... or 08...)</Form.Label>
                <Form.Control required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="(\()?(\+62|62|0)(\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}" placeholder="Enter phone number" />
              </Form.Group>

              <Button style={{marginBottom: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} variant="primary" onClick={onTakePictureClick}>
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
    </div>
  )
}

export default AdminProfile;