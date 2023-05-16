import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import NavBarBack from '../../components/NavBarBack/NavBarBack';
import { AiFillCamera } from 'react-icons/ai'
import CameraModal from '../../components/CameraModal/CameraModal';
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import firebase from '../../utils/firebase';
import { ref, get, child, update } from "firebase/database";

const AfterCutPic = () => {
  const [capsterName, setCapsterName] = useState(null);
  const [pictureMode, setPictureMode] = useState(false);
  const [firstAfterCutPic, setFirstAfterCutPic] = useState(null);
  const [secondAfterCutPic, setSecondAfterCutPic] = useState(null);
  const [thirdAfterCutPic, setThirdAfterCutPic] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [alertVariant, setAlertVariant] = useState(null);

  const { setUser } = useLogin();
  const navigate = useNavigate();
  const { auth, database } = firebase();

  const isPictureModeNo1 = pictureMode === 1;
  const isPictureModeNo2 = pictureMode === 2;
  const isPictureModeNo3 = pictureMode === 3;

  const onSubmitAfterCutPic = async (evt) => {
    evt.preventDefault();
    if(phoneNumber && firstAfterCutPic && capsterName) {
      // Get all data for users
      const snapshot = await get(child(ref(database), `users`));

      const allUsersData = snapshot.val();
      const cutDate = new Date().getTime();
      const afterCutPics = [firstAfterCutPic];
      if(secondAfterCutPic) {
        afterCutPics.push(secondAfterCutPic)
      }

      if(thirdAfterCutPic) {
        afterCutPics.push(thirdAfterCutPic);
      }
      const afterCutDetails = {
        capsterName,
        date: cutDate,
        afterCutPics
      }

      Object.keys(allUsersData).forEach(async (email) => {
        const user = allUsersData[email];
        if(phoneNumber === user?.phoneNumber) {
          const updates = {};
          updates[`/users/${email}`] = 
          { 
            ...user,
            afterCutDetails
          }

          try {
            await update(ref(database), updates);
            window.scrollTo(0, 0);
            showAlert('success');
            setTimeout(() => {
              navigate('/');
            }, 3000);
          } catch(err) {
            window.scrollTo(0, 0);
            console.error(err);
            showAlert('danger')
          }
        } else {
          window.scrollTo(0, 0);
          showAlert('warning')
        }
      })
    } else {
      alert("Please fill capster name, email and at least take 1 picture");
    }
  }

  const showAlert = (variant) => {
    setAlertVariant(variant);
    setTimeout(() => {
      setAlertVariant(null);
    }, 3000)
  }

  const onTakePictureClick = (picNumber) => {
    setPictureMode(picNumber);
  }

  const handleCloseCameraModal = () => setPictureMode(false);

  const renderAlert = () => {
    if(alertVariant === 'success') {
      return (
        <Alert variant="success" style={{width: '100%'}}>
          {`After cut details are updated to ${phoneNumber}`}
        </Alert>
      )
    } else if(alertVariant === 'danger') {
      return (
        <Alert variant="danger" style={{width: '100%'}}>
          Something is wrong
        </Alert>
      )
    } else if(alertVariant === 'warning') {
      return (
        <Alert variant="danger" style={{width: '100%'}}>
          Phone number does not exist in member database
        </Alert>
      )
    }
  }

  return (
    <div>
      <NavBarBack route="/profile" />
      <Container fluid style={{padding: 20, maxWidth: 400}}>
        <Row>
          <Col>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            {renderAlert()}
            <h3 style={{paddingBottom: 50}}>After-cut pic</h3>
              <Form style={{width: '75%'}} onSubmit={onSubmitAfterCutPic}>
                <Form.Group style={{paddingBottom: 20}}>
                  <Form.Label>Capster name</Form.Label>
                  <Form.Control required value={capsterName} onChange={(e) => setCapsterName(e.target.value)} type="text" placeholder="Enter capster name" />
                </Form.Group>

                <Button style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} variant="primary" onClick={() => onTakePictureClick(1)}>
                  <AiFillCamera size={25} style={{marginRight: 10}} />
                  Take 1st picture *
                </Button>
                <p style={{ color: 'red', fontSize: 12, marginBottom: 10 }}>
                  * Required
                </p>

                <Button style={{marginBottom: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} variant="primary" onClick={() => onTakePictureClick(2)}>
                  <AiFillCamera size={25} style={{marginRight: 10}} />
                  Take 2nd picture
                </Button>

                <Button style={{marginBottom: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} variant="primary" onClick={() => onTakePictureClick(3)}>
                  <AiFillCamera size={25} style={{marginRight: 10}} />
                  Take 3rd picture
                </Button>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 30}}>
                  { firstAfterCutPic && <img style={{height: 150, margin: 10}} src={firstAfterCutPic} alt="First cut pic" /> }
                  { secondAfterCutPic && <img style={{height: 150, margin: 10}} src={secondAfterCutPic} alt="Second cut pic" /> }
                  { thirdAfterCutPic && <img style={{height: 150, margin: 10}} src={thirdAfterCutPic} alt="Third cut pic"  /> }
                </div>
                
                {isPictureModeNo1 && <CameraModal memberPicture={firstAfterCutPic} setMemberPicture={setFirstAfterCutPic} show={isPictureModeNo1} handleClose={handleCloseCameraModal} />}
                {isPictureModeNo2 && <CameraModal memberPicture={secondAfterCutPic} setMemberPicture={setSecondAfterCutPic} show={isPictureModeNo2} handleClose={handleCloseCameraModal} />}
                {isPictureModeNo3 && <CameraModal memberPicture={thirdAfterCutPic} setMemberPicture={setThirdAfterCutPic} show={isPictureModeNo3} handleClose={handleCloseCameraModal} />}


                <Form.Group style={{paddingBottom: 20}}>
                  <Form.Label>Phone number (021... or 08...)</Form.Label>
                  <Form.Control required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="(\()?(\+62|62|0)(\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}" placeholder="Enter phone number" />
                </Form.Group>

                <Button style={{width: '100%', marginBottom: 10}} variant="success" type="submit">
                  Submit
                </Button>
                {/* <Button style={{width: '100%'}} variant="danger" onClick={onSignoutClick}>Sign out</Button> */}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AfterCutPic;