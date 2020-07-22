import { useContext } from 'react'
import { AuthContext } from './AuthContext'

/**
 * Auth State Hook
 *
 * @returns - Auth State Function
 */
const useAuth: () => () => TokenInterface = () => {
  const c = useContext(AuthContext)

  return (): TokenInterface => {
    return <TokenInterface>c?.authState
  }
}

export default useAuth
