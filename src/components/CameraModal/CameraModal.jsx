import React, { useEffect, useRef, useState } from 'react';
import { Offcanvas, Spinner, Alert } from 'react-bootstrap';
import Webcam from "react-webcam";
import { NAPOLEON_BROWN_COLOR } from '../../utils/colors';
import { CirclePictureButton, PictureButton, RingPictureButton } from './CameraModal.styled';


const CameraModal = ({ show, handleClose, memberPicture, setMemberPicture}) => {

  const webcamRef = useRef(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState(false);
  const [isAbleToUseRearCamera, setIsAbleToUseRearCamera] = useState(true);

  useEffect(() => {
    return () => {
      setCameraReady(false);
      setCameraError(false);
    }
  }, [])

  const handleUserMedia = () => {
    setCameraReady(true)
  }

  const handleUserMediaError = (err) => {
    if(err.constraint === 'facingMode') {
      setIsAbleToUseRearCamera(false);
      setCameraError(false);
    } else {
      setIsAbleToUseRearCamera(true);
      setCameraError(true);
    }
  }

  const onPictureButtonClick = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log('image', imageSrc)
    setMemberPicture(imageSrc);
    handleClose();
  }

  return (
    <Offcanvas placement="bottom" style={{height: '100%'}} show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Take a picture</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Webcam
          ref={webcamRef}
          audio={false}
          // height="100%"
          height="400px"
          width="100%"
          screenshotFormat="image/jpeg"
          onUserMedia={handleUserMedia}
          onUserMediaError={handleUserMediaError}
          hidden={!cameraReady}
          videoConstraints={
            isAbleToUseRearCamera ? { facingMode: { exact: 'environment' } } : { facingMode: 'user' }
          }
        />

        {
          memberPicture && 
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px 0px'}}>
            <img style={{height: 150}} src={memberPicture} alt="Member Profile" />  
          </div>
        }

        <PictureButton onClick={onPictureButtonClick}>
          <CirclePictureButton />
          <RingPictureButton />
        </PictureButton>
        
        {cameraError && <Alert variant="danger">Error trying to load camera</Alert>}
        {!cameraReady && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Spinner animation="border" role="status" style={{width: '4rem', height: '4rem'}} />
        </div>}
        
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default CameraModal;