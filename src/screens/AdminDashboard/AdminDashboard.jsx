import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Col, Container, Row, Button, Spinner, Badge } from 'react-bootstrap';
import { useEffect } from 'react';
import firebase from '../../utils/firebase';
import { ref, get, child, remove, update } from "firebase/database";
import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { formatDate, resanitizeEmail } from '../../utils/utils';
import useAdminDashboard from '../../hooks/useAdminDashboard';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import NavBarBack from '../../components/NavBarBack/NavBarBack';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "react-datepicker/dist/react-datepicker.css";
import EditModal from '../../components/EditModal/EditModal';
import { NAPOLEON_BROWN_COLOR, NAPOLEON_COMPLEMENT_COLOR } from '../../utils/colors';
import PictureModal from '../../components/PictureModal/PictureModal';

const Add3Months = ({ data }) => {
  const { database } = firebase();
  const { setUpdateData } = useAdminDashboard();

  const onButtonClicked = async () => {
    if(window.confirm('Are you sure to add 3 months?')) {
      const email = data?.email;
      const newMembershipExpiry = addMonths(new Date(data?.membershipExpiry), 3);
  
      const updates = {};
      updates[`/users/${email}`] = 
      { 
        membershipStart: data?.membershipStart, 
        membershipExpiry: newMembershipExpiry.getTime(),
        picture: data?.picture,
        name: data?.name,
        phoneNumber: data?.phoneNumber,
        afterCutDetails: data?.afterCutDetails
      }
      await update(ref(database), updates);
      setUpdateData(true);
    }
  }

  return (
    <Button onClick={onButtonClicked} variant='primary'>Add 3 mth</Button>
  )
}

const Decrease3Months = ({ data }) => {
  const { database } = firebase();
  const { setUpdateData } = useAdminDashboard();

  const onButtonClicked = async () => {
    if(window.confirm('Are you sure to subtract 3 months?')) {
      const email = data?.email;
      const newMembershipExpiry = subMonths(new Date(data?.membershipExpiry), 3);
  
      const updates = {};
      updates[`/users/${email}`] = 
      { 
        membershipStart: data?.membershipStart, 
        membershipExpiry: newMembershipExpiry.getTime(),
        picture: data?.picture,
        name: data?.name,
        phoneNumber: data?.phoneNumber,
        afterCutDetails: data?.afterCutDetails
      }
      await update(ref(database), updates);
      setUpdateData(true);
    }
  }

  return (
    <Button onClick={onButtonClicked} variant='warning'>Subtract 3 mth</Button>
  )
}

const ViewProfilePicture = () => {
  const { setViewProfilePicture } = useAdminDashboard();

  const onButtonClicked = () => {
    setViewProfilePicture(true);
  }

  return (
    <Button onClick={onButtonClicked} variant='primary' style={{backgroundColor: NAPOLEON_BROWN_COLOR, borderColor: NAPOLEON_BROWN_COLOR}}>
      View profile pic
    </Button>
  )
}

const ViewAfterCutPictures = () => {
  const { setViewAfterCutPictures } = useAdminDashboard();

  const onButtonClicked = () => {
    setViewAfterCutPictures(true);
  }

  return (
    <Button onClick={onButtonClicked} variant='primary' style={{backgroundColor: NAPOLEON_COMPLEMENT_COLOR, borderColor: NAPOLEON_COMPLEMENT_COLOR}}>
      View after-cut details
    </Button>
  )
}

const DeleteButton = ({ data }) => {
  const { database } = firebase();
  const { setUpdateData } = useAdminDashboard();

  const onDeleteButtonClicked = async () => {
    const email = data?.email;
    if(window.confirm(`Are you sure you want to delete ${email} account?`)) {
      await remove(ref(database, `users/${email}`));
      setUpdateData(true);
    }
  }

  return (
    <div>
      <Button onClick={onDeleteButtonClicked} variant='danger'>Delete</Button>
    </div>
  )
}

const ActiveInactiveBadge = ({ data }) => {
  const renderBadge = () => {
    if(data?.isMembershipActive) {
      return <Badge style={{padding: '10px 30px'}} bg="success">Active</Badge>
    } else {
      return <Badge style={{padding: '10px 30px'}} bg="danger">Inactive</Badge>
    }
  }
  
  return (
    <div>
      {renderBadge()}
    </div>
  )
}

const MembershipExpiry = ({ data }) => {
  return (
    <span>{formatDate(data?.membershipExpiry)}</span>
  )
}

const MembershipStart = ({ data }) => {
  return (
    <span>{formatDate(data?.membershipStart)}</span>
  )
}

const DatepickerCellEditor = ({ data }) => {
  const [startDate, setStartDate] = useState(data?.membershipExpiry);
  const { database } = firebase();
  const { setUpdateData } = useAdminDashboard();

  const handleDateSelect = async () => {
    if(window.confirm('Are you sure?')) {
      const email = data?.email;
      const newMembershipExpiry = new Date(startDate).getTime();
  
      const updates = {};
      updates[`/users/${email}`] = 
      { 
        membershipStart: data?.membershipStart, 
        membershipExpiry: newMembershipExpiry,
        picture: data?.picture
      }
      await update(ref(database), updates);
      setUpdateData(true);
    }
  }

  return (
    <DatePicker onSelect={handleDateSelect} portalId="root" popperClassName="ag-custom-component-popup" selected={startDate} onChange={(date) => setStartDate(date)} />
  )
}

const AdminDashboard = () => {
  const onNameCellClicked = ({ data }) => {
    setSelectedRow(data);
    setEditMode('name')
  }

  const onPhoneNumberCellClicked = ({ data }) => {
    setSelectedRow(data);
    setEditMode('phoneNumber')
  }

  const onPictureCellClicked = ({ data }) => {
    setSelectedRow(data);
  }
  
  const [columnDefs] = useState([
    {field: 'sanitizedEmail', sortable: true, headerName: 'Email', filter: true},
    {field: 'isMembershipActive', sortable: true, headerName: 'Plan Status', cellRenderer: ActiveInactiveBadge, filter: true},
    {field: 'name', sortable: true, headerName: 'Name', filter: true, onCellClicked: onNameCellClicked},
    {field: 'phoneNumber', sortable: true, headerName: 'Phone Number', filter: true, onCellClicked: onPhoneNumberCellClicked},
    {field: 'membershipStart', sortable: true, cellRenderer: MembershipStart},
    {field: 'membershipExpiry', sortable: true, cellRenderer: MembershipExpiry, editable: true, /*cellEditor: DatepickerCellEditor*/},
    {field: 'Member Profile Picture', cellRenderer: ViewProfilePicture, onCellClicked: onPictureCellClicked},
    {field: 'After-cut Details', cellRenderer: ViewAfterCutPictures, onCellClicked: onPictureCellClicked},
    {field: 'Add 3 months', cellRenderer: Add3Months},
    {field: 'Subtract 3 months', cellRenderer: Decrease3Months},
    // {field: 'Add 6 months', cellRenderer: Add6Months},
    // {field: 'Switch to 6 months', cellRenderer: SwitchTo6Months},
    {field: 'delete', cellRenderer: DeleteButton},
  ]);
  const [editMode, setEditMode] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const { database } = firebase();
  const { 
    apiLoading, 
    setApiLoading, 
    usersData, 
    setUsersData, 
    updateData, 
    setUpdateData, 
    viewProfilePicture, 
    setViewProfilePicture,
    viewAfterCutPictures,
    setViewAfterCutPictures
  } = useAdminDashboard();
  const firstRender = useRef(true);

  useEffect(() => {
    (async () => {
      // Detect if first render AND needs to update data
      if(updateData || firstRender.current) {
        setApiLoading(true);
        const snapshot = await get(child(ref(database), `users`));
        if(snapshot.exists()) {
          const response = snapshot.val();
          const data = Object.keys(response).map((email) => {
            const userAcc = response[email];
            const currentTimeMs = new Date().getTime();
            const isMembershipActive = currentTimeMs >= parseInt(userAcc.membershipStart) && currentTimeMs <= parseInt(userAcc.membershipExpiry)
            return {
              membershipExpiry: userAcc.membershipExpiry,
              membershipStart: userAcc.membershipStart,
              email,
              sanitizedEmail: resanitizeEmail(email),
              picture: userAcc.picture,
              isMembershipActive,
              name: userAcc?.name || '-',
              phoneNumber: userAcc?.phoneNumber || '-',
              afterCutDetails: userAcc?.afterCutDetails
            }
          });
          setUsersData(data);
          setApiLoading(false);
        }
        setUpdateData(false);
        firstRender.current = false;
      }
      // Handle if no users are avail
    }
    )();
  }, [updateData]);

  const handleEditModalClose = () => {
    setEditMode(null);
  }

  const handleViewProfilePictureModalClose = () => {
    setViewProfilePicture(false);
  }

  const handleViewAfterCutPictureModalClose = () => {
    setViewAfterCutPictures(false);
  }

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Row>
        <Col style={{height: 400, width: '100%'}}>
          <NavBarBack route="/profile" />
          <h3 style={{padding: 20, paddingBottom: 0, textAlign: 'center'}}>Admin Dashboard</h3>

          {editMode && <EditModal show={!!editMode} handleClose={handleEditModalClose} field={editMode} data={selectedRow} />}

          {viewProfilePicture && 
            <PictureModal 
              show={viewProfilePicture} 
              handleClose={handleViewProfilePictureModalClose} 
              title="Member Profile Picture"
              pictures={[selectedRow?.picture]}
             />
          }
          {viewAfterCutPictures && 
            <PictureModal 
              show={viewAfterCutPictures} 
              handleClose={handleViewAfterCutPictureModalClose} 
              title="After-cut Details"
              pictures={selectedRow?.afterCutDetails?.afterCutPics}
              capsterName={selectedRow?.afterCutDetails?.capsterName}
             />
          }
          
          {apiLoading ?
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <Spinner animation="border" role="status" style={{width: '4rem', height: '4rem', marginTop: 100}} />
            </div> :
            <div style={{padding: 20, height: '100%'}}>
              <AgGridReact
                className="ag-theme-alpine" 
                rowData={usersData}
                columnDefs={columnDefs}
                rowHeight={50}
                suppressMenuHide
              />
            </div>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default AdminDashboard