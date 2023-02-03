import { createContext, useContext, useReducer } from 'react'

export const AuthContext = createContext(null)
export const AuthDispatchContext = createContext(null)

export function AuthProvider ({ children }) {
  const [auth, dispatch] = useReducer(
    authReducer,
    authData
  )

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}

export function useAuthDispatch () {
  return useContext(AuthDispatchContext)
}

function authReducer (auth, action) {
  switch (action.type) {
    case 'loginAdmin': {
      return {
        tokenAdmin: action.data,
        tokenPaciente: null
      }
    }
    case 'loginPaciente': {
      return {
        tokenAdmin: null,
        tokenPaciente: action.data
      }
    }
    case 'logout': {
      return {
        tokenAdmin: null,
        tokenPaciente: null
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const authData = {
  tokenAdmin: null,
  tokenPaciente: null
}
