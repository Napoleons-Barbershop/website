import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../../components/UserProfile/UserProfile';
import AdminProfile from '../../components/AdminProfile/AdminProfile';
import useLogin from '../../hooks/useLogin';
import { ADMIN_EMAIL, ADMIN_EMAIL_2 } from '../../utils/constants';


const Profile = () => {

  const { user, setUser } = useLogin();
  const navigate = useNavigate();
  const isAdmin = user?.email === ADMIN_EMAIL || user?.email === ADMIN_EMAIL_2

  // useEffect(() => {
  //   if(!user) {
  //     navigate('/')
  //   }
  // }, [])
  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('user');
    if(!user) {
      if(userFromLocalStorage) {
        const parsedUser = JSON.parse(userFromLocalStorage);
        setUser(parsedUser);
      } else {
        navigate('/')
      }
    }
  }, []);

  return (
    <>
      {isAdmin ? <AdminProfile /> : <UserProfile />}
    </>
  )
}

export default Profile;