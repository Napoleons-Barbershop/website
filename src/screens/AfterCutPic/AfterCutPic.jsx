import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import NavBarBack from '../../components/NavBarBack/NavBarBack';
import { AiFillCamera } from 'react-icons/ai'
import CameraModal from '../../components/CameraModal/CameraModal';
import useLogin from '../../hooks/useLogin';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import firebase from '../../utils/firebase';
import { NAPOLEON_BROWN_COLOR } from '../../utils/colors';

const AfterCutPic = () => {
  const [capsterName, setCapsterName] = useState(null);
  const [pictureMode, setPictureMode] = useState(false);
  const [firstAfterCutPic, setFirstAfterCutPic] = useState(null);
  const [secondAfterCutPic, setSecondAfterCutPic] = useState(null);
  const [thirdAfterCutPic, setThirdAfterCutPic] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const { setUser } = useLogin();
  const navigate = useNavigate();
  const { auth } = firebase();

  const isPictureModeNo1 = pictureMode === 1;
  const isPictureModeNo2 = pictureMode === 2;
  const isPictureModeNo3 = pictureMode === 3;

  const onSubmitAfterCutPic = () => {
    console.log('on submit');
  }

  const onTakePictureClick = (picNumber) => {
    setPictureMode(picNumber);
  }

  const handleCloseCameraModal = () => setPictureMode(false);

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
    <div>
      <NavBarBack route="/admin-dashboard" />
      <Container fluid style={{padding: 20, maxWidth: 400}}>
        <Row>
          <Col>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
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
                  <Form.Label>Email address</Form.Label>
                  <Form.Control value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="Enter email" />
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