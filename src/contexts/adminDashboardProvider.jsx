import { useState } from 'react'
import { initialAdminDashboardContext, AdminDashboardContext } from './adminDashboardContext'

const AdminDashboardProvider = ({ children }) => {
  const [adminDashboardData, setAdminDashboardData] = useState(initialAdminDashboardContext);

  const setUsersData = (usersData) => {
    setAdminDashboardData((state) => ({
      ...state,
      usersData
    }))
  }

  const setApiLoading = (apiLoading) => {
    setAdminDashboardData((state) => ({
      ...state,
      apiLoading
    }))
  }

  const setUpdateData = (updateData) => {
    setAdminDashboardData((state) => ({
      ...state,
      updateData
    }))
  }

  const setViewProfilePicture = (viewProfilePicture) => {
    setAdminDashboardData((state) => ({
      ...state,
      viewProfilePicture
    }))
  }

  const setViewAfterCutPictures = (viewAfterCutPictures) => {
    setAdminDashboardData((state) => ({
      ...state,
      viewAfterCutPictures
    }))
  }

  return (
    <AdminDashboardContext.Provider
      value={{ 
        ...adminDashboardData, 
        setUsersData, 
        setApiLoading, 
        setUpdateData, 
        setViewProfilePicture, 
        setViewAfterCutPictures 
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  )
}

export default AdminDashboardProvider;
