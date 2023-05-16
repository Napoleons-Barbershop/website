import React from 'react';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ref, update } from "firebase/database";
import firebase from '../../utils/firebase';
import useAdminDashboard from '../../hooks/useAdminDashboard';
import { useEffect } from 'react';

const EditModal = ({ show, handleClose, field, data }) => {

  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const { database } = firebase();
  const { setUpdateData } = useAdminDashboard();

  useEffect(() => {
    if(field === 'name') {
      setName(data?.name)
    } else if(field === 'phoneNumber') {
      setPhoneNumber(data?.phoneNumber)
    }
  }, [])

  
  const renderInputField = () => {
    switch(field) {
      case 'name':
        return (
          <Form.Group style={{paddingBottom: 20}}>
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
          </Form.Group>
        )
      case 'phoneNumber':
        return (
          <Form.Group style={{paddingBottom: 20}}>
            <Form.Label>Phone number (021... or 08...)</Form.Label>
            <Form.Control value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="(\()?(\+62|62|0)(\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}" placeholder="Enter phone number" />
          </Form.Group>
        )
      default:
        return null;
    }
  }

  const onEdit = async () => {
    switch(field) {
      case 'name':
        if(window.confirm('Are you sure?')) {
          const email = data?.email;
      
          const updates = {};
          updates[`/users/${email}`] = 
          { 
            membershipStart: data?.membershipStart, 
            membershipExpiry: data?.membershipExpiry,
            picture: data?.picture,
            name,
            phoneNumber: data?.phoneNumber,
            afterCutDetails: data?.afterCutDetails
          }
          await update(ref(database), updates);
          setUpdateData(true);
          handleClose();
        }
        break;
      case 'phoneNumber':
        if(window.confirm('Are you sure?')) {
          const email = data?.email;
      
          const updates = {};
          updates[`/users/${email}`] = 
          { 
            membershipStart: data?.membershipStart, 
            membershipExpiry: data?.membershipExpiry,
            picture: data?.picture,
            name: data?.name,
            phoneNumber: phoneNumber,
            afterCutDetails: data?.afterCutDetails
          }
          await update(ref(database), updates);
          setUpdateData(true);
          handleClose();
        }
        break;
      default:
        return null;
    }
  }

  const renderTitle = () => {
    switch(field) {
      case 'name':
        return 'Edit Name';
      case 'phoneNumber':
        return 'Edit Phone Number';
      default:
        return null
    }
  }

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{renderTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onEdit}>
          {renderInputField()}
          <Button style={{width: '100%', marginBottom: 10}} variant="warning" type="submit">
            Edit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditModal;