import React from 'react'

import { AuthProvider } from './auth'
import { ToastProvider } from './toast'

export const AppProvider: React.FunctionComponent = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
)
