import React from 'react'
import { FiCamera } from 'react-icons/fi'

import { Container, Form, Toolbar, Content } from './styles'

const SharedBoxFeed: React.FunctionComponent = () => {
  return (
    <Container>
      <Form>
        <Content>
          <img
            src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <input type="text" placeholder="Quais são as novidades, Jones?" />
        </Content>
        <Toolbar>
          <FiCamera size={20} />
          <button>Postar</button>
        </Toolbar>
      </Form>
    </Container>
  )
}

export default SharedBoxFeed
