import { createContext } from 'react'

// Initial context state
export const initialLoginContext = {
  openLoginModal: false,
  setOpenLoginModal: () => {},
  user: null,
  setUser: () => {},
  loginLoading: false,
  setLoginLoading: () => {}
}

// Create the Context object
export const LoginContext = createContext(initialLoginContext)
