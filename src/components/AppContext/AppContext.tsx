import { createContext, useState } from "react"

interface AppContextProps{
  user: string
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as AppContextProps)
export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const user = 'Admin'
  
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}