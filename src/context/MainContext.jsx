import { createContext, useContext, useReducer } from 'react'

export const MainContext = createContext(null)
export const MainDispatchContext = createContext(null)

export function MainProvider ({ children }) {
  const [main, dispatch] = useReducer(
    mainReducer,
    data
  )

  return (
    <MainContext.Provider value={main}>
      <MainDispatchContext.Provider value={dispatch}>
        {children}
      </MainDispatchContext.Provider>
    </MainContext.Provider>
  )
}

export function useMainData () {
  return useContext(MainContext)
}

export function useMainDispatch () {
  return useContext(MainDispatchContext)
}

function mainReducer (data, action) {
  switch (action.type) {
    case 'news': {
      console.log(action)
      return {
        ...data,
        news: action.data.slice(0)
      }
    }
    case 'toast': {
      return {
        ...data,
        showToast: action
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const data = {
  showToast: false,
  news: []
}
