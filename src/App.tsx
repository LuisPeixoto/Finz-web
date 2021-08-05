import React from 'react'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn/'

import { AppProvider } from './hooks'

const App: React.FunctionComponent = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
)

export default App
