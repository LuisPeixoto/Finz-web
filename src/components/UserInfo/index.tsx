import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Container, Content, CareerAndCity, Follow } from './styles'

const UserInfo: React.FunctionComponent = () => {
  return (
    <Container>
      <Content>
        <img
          src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <strong>
          Jones Stones, <span>22</span>
        </strong>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Seguidores</span>
          </li>
          <li>
            <strong>352</strong>
            <span>Seguindo</span>
          </li>

          <li>
            <strong>135</strong>
            <span>Posts</span>
          </li>

          <li>
            <strong>158</strong>
            <span>Likes</span>
          </li>
        </ul>

        <CareerAndCity>
          <strong>Cientista da Computação</strong>
          <span>Campos, Rj</span>
        </CareerAndCity>
        <Follow>
          <FiPlus size={30} />
        </Follow>
      </Content>
    </Container>
  )
}

export default UserInfo
