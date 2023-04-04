import React, { useState } from 'react';
import { Col, Container, Row, Form, Dropdown, Button } from 'react-bootstrap';
import { NAPOLEON_BROWN_COLOR } from '../../utils/colors';
import { MEMBERSHIP_PLANS } from '../../utils/constants';
import Webcam from "react-webcam";
import { AiFillCamera } from 'react-icons/ai'
import CameraModal from '../CameraModal/CameraModal';

const AdminProfile = () => {

  const [selectedMembershipOption, setSelectedMembershipOption] = useState('3');
  const [pictureMode, setPictureMode] = useState(false);
  const [email, setEmail] = useState(null);
  const [memberPicture, setMemberPicture] = useState(null);

  const renderDropdownToggleText = () => {
    console.log('abcabc', selectedMembershipOption)
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

  const onSubmitMembershipPlan = (evt) => {
    evt.preventDefault();
    if(email && memberPicture && selectedMembershipOption) {
      console.log('submit to firebase');
    }
  }

  return (
    <Container fluid style={{padding: 20, maxWidth: 400}}>
      <Row>
        <Col>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
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

              <Dropdown style={{paddingBottom: 50, width: '100%'}} onSelect={(evtKey) => setSelectedMembershipOption(evtKey)}>
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
              <Button style={{width: '100%'}} variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminProfile;