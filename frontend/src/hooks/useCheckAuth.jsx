import { useEffect } from 'react'
import useAuthStore from '../store/authStore'

const useCheckAuth = () => {
  const { isAuthenticated, fetchUser } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated === null) {
      fetchUser()
    }
  }, [isAuthenticated, fetchUser])
}

export default useCheckAuth
