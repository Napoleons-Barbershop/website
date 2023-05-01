import { useState } from 'react'
import { initialAdminDashboardContext, AdminDashboardContext } from './adminDashboardContext'

const AdminDashboardProvider = ({ children }) => {
  const [adminDashboardData, setAdminDashboardData] = useState(initialAdminDashboardContext);

  const setApiLoading = (apiLoading) => {
    setAdminDashboardData((state) => ({
      ...state,
      apiLoading
    }))
  }

  return (
    <AdminDashboardContext.Provider
      value={{ ...adminDashboardData, setApiLoading }}
    >
      {children}
    </AdminDashboardContext.Provider>
  )
}

export default AdminDashboardProvider;
