import React from 'react'

import { Repositories, Container } from './styles'
import Header from '../../components/Header'
import News from '../../components/News'
import UserSuggestions from '../../components/UserSuggestions'
import SharedBoxFeed from '../../components/SharedBoxFeed'
import Feed from '../../components/Feed'

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Container>
        <News />
        <Repositories>
          <SharedBoxFeed />
          <Feed />
        </Repositories>

        <UserSuggestions />
      </Container>
    </>
  )
}

export default Dashboard
