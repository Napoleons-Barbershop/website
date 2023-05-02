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

  return (
    <AdminDashboardContext.Provider
      value={{ ...adminDashboardData, setUsersData, setApiLoading, setUpdateData }}
    >
      {children}
    </AdminDashboardContext.Provider>
  )
}

export default AdminDashboardProvider;
