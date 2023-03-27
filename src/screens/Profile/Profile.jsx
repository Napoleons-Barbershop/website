import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../../components/UserProfile/UserProfile';
import useLogin from '../../hooks/useLogin';
import { ADMIN_EMAIL } from '../../utils/constants';


const Profile = () => {

  const { user } = useLogin();
  const navigate = useNavigate();
  const isAdmin = user?.email === ADMIN_EMAIL

  // useEffect(() => {
  //   if(!user) {
  //     navigate('/')
  //   }
  // }, [])

  return (
    <>
      {isAdmin ? <AdminProfile /> : <UserProfile />}
    </>
  )
}

const AdminProfile = () => {
  return (
    <>Admin Profile</>
  )
}

export default Profile;