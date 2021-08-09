import React from 'react'

import {
  Container,
  Title,
  Description,
  Content,
  TitleCard,
  News,
} from './styles'
import { Link } from 'react-router-dom'

const NewsCards: React.FunctionComponent = () => {
  return (
    <Container>
      <TitleCard>
        <strong>Algumas noticias para você</strong>
      </TitleCard>
      <News>
        <Link to="#">
          <Content>
            <img
              src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt="University Entrance Exam Energy"
            />
            <Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </Title>
            <Description>
              Cras vitae porta nisi. Mauris vel risus eget sapien consequat
              mollis et at felis. Aliquam venenatis ante ut tristique aliquet.{' '}
            </Description>
          </Content>
        </Link>

        <Link to="#">
          <Content>
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1113&q=80"
              alt="University Entrance Exam Energy"
            />
            <Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </Title>
            <Description>
              Cras vitae porta nisi. Mauris vel risus eget sapien consequat
              mollis et at felis. Aliquam venenatis ante ut tristique aliquet.{' '}
            </Description>
          </Content>
        </Link>
      </News>
    </Container>
  )
}

export default NewsCards
