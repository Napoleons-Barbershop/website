import { createContext } from 'react'

// Initial context state
export const initialAdminDashboardContext = {
  usersData: [],
  setUsersData: () => {},
  apiLoading: false,
  setApiLoading: () => {},
  updateData: false,
  setUpdateData: () => {}
}

// Create the Context object
export const AdminDashboardContext = createContext(initialAdminDashboardContext)
