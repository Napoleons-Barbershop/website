import { useContext } from 'react'
import { AdminDashboardContext } from '../contexts/adminDashboardContext'

// Custom hook to get the shared state and setters
const useAdminDashboard = () => {
  const context = useContext(AdminDashboardContext)

  if (context === undefined) {
    throw new Error('useAdminDashboard must be used within a AdminDashboardProvider')
  }
  return context
}

export default useAdminDashboard;
