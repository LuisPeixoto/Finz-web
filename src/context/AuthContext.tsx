import React, { createContext, useCallback } from 'react'

interface AuthContextData {
  name: string
  signIn(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signin')
  }, [])

  return (
    <AuthContext.Provider value={{ name: 'Luis', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
