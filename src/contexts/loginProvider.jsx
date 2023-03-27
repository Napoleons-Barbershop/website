import { useState } from 'react'
import { initialLoginContext, LoginContext } from './loginContext'

const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(initialLoginContext);

  const setOpenLoginModal = (openLoginModal) => {
    setLoginData((state) => ({
      ...state,
      openLoginModal
    }))
  }

  const setUser = (user) => {
    setLoginData((state) => ({
      ...state,
      user
    }))
  }

  const setLoginLoading = (loginLoading) => {
    setLoginData((state) => ({
      ...state,
      loginLoading
    }))
  }

  return (
    <LoginContext.Provider
      value={{ ...loginData, setOpenLoginModal, setUser, setLoginLoading }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;
