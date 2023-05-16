import React from 'react';
import { Modal } from 'react-bootstrap';

const PictureModal = ({ show, handleClose, pictures, capsterName, title }) => {

  const renderPictures = () => {
    if(pictures) {
      return pictures.map((picture, i) => {
        return (
          <img style={{ width: '95%', margin: 10 }} src={picture} alt={`Picture ${i + 1}`} />
        )
      })
    } else {
      return 'No details to show'
    }
  }

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 30}}>
          {renderPictures()}
          {capsterName && <span style={{ fontSize: 18, paddingTop: 10 }}>Capster Name: <b>{capsterName}</b></span>}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PictureModal;