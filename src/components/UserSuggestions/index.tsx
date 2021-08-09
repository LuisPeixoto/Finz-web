import React from 'react'

import {
  Container,
  UserInfo,
  Content,
  TitleCard,
  Users,
  Follow,
} from './styles'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

const UserSuggestions: React.FunctionComponent = () => {
  return (
    <Container>
      <TitleCard>
        <strong>Sugestões para seguir</strong>
      </TitleCard>
      <Users>
        <Content>
          <Link to="#">
            <img
              src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="University Entrance Exam Energy"
            />
            <UserInfo>
              <strong>Jones Stone</strong>
              <p>Cientista</p>
            </UserInfo>
          </Link>
          <Follow>
            <FiPlus />
          </Follow>
        </Content>

        <Content>
          <Link to="#">
            <img
              src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="University Entrance Exam Energy"
            />
            <UserInfo>
              <strong>Jones Stone</strong>
              <p>Cientista</p>
            </UserInfo>
          </Link>
          <Follow>
            <FiPlus />
          </Follow>
        </Content>

        <Content>
          <Link to="#">
            <img
              src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="University Entrance Exam Energy"
            />
            <UserInfo>
              <strong>Jones Stone</strong>
              <p>Cientista</p>
            </UserInfo>
          </Link>
          <Follow>
            <FiPlus />
          </Follow>
        </Content>

        <Content>
          <Link to="#">
            <img
              src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="University Entrance Exam Energy"
            />
            <UserInfo>
              <strong>Jones Stone</strong>
              <p>Cientista</p>
            </UserInfo>
          </Link>
          <Follow>
            <FiPlus />
          </Follow>
        </Content>

        <Content>
          <Link to="#">
            <img
              src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="University Entrance Exam Energy"
            />
            <UserInfo>
              <strong>Jones Stone</strong>
              <p>Cientista</p>
            </UserInfo>
          </Link>
          <Follow>
            <FiPlus />
          </Follow>
        </Content>

        <Content>
          <Link to="#">
            <img
              src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="University Entrance Exam Energy"
            />
            <UserInfo>
              <strong>Jones Stone</strong>
              <p>Cientista</p>
            </UserInfo>
          </Link>
          <Follow>
            <FiPlus />
          </Follow>
        </Content>
      </Users>
    </Container>
  )
}

export default UserSuggestions
