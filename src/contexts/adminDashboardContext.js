import { createContext } from 'react'

// Initial context state
export const initialAdminDashboardContext = {
  apiLoading: false,
  setApiLoading: () => {},
}

// Create the Context object
export const AdminDashboardContext = createContext(initialAdminDashboardContext)
