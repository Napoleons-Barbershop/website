import { useContext } from 'react'
import { LoginContext } from '../contexts/loginContext'

// Custom hook to get the shared state and setters
const useLogin = () => {
  const context = useContext(LoginContext)

  // This is to prevent and give an error whenever it is being accessed out of the TasksProvider
  if (context === undefined) {
    throw new Error('useLogin must be used within a LoginProvider')
  }
  return context
}

export default useLogin;
