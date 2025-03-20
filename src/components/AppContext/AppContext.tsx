import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../../services/storage"

interface AppContextProps {
  user: string
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as AppContextProps)
export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storage = getAllLocalStorage()
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login);
    }
  }, [])

  const user = 'Admin'

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}