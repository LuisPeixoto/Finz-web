import React from 'react'

import { Content, Container } from './styles'
import Header from '../../components/Header'
import Feed from '../../components/Feed'
import UserInfo from '../../components/UserInfo'

const User: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <UserInfo />
          <Feed />
        </Content>
      </Container>
    </>
  )
}

export default User
