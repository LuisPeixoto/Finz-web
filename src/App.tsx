import React from 'react'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn/'
import { AuthProvider } from './hooks/AuthContext'
import ToasContainer from './components/ToastContainer'
// import SignUp from './pages/SignUp/'

const App: React.FunctionComponent = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToasContainer />

    <GlobalStyle />
  </>
)

export default App
