import React, { useRef } from 'react'

import { Container, Content, User } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoHeader.svg'
import Input from '../InputSearch'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { FiSearch } from 'react-icons/fi'

const Header: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)

  function handleSubmit() {
    console.log('ffdsfssdf')
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <img className="logo" src={logo} width="128px" alt="Finz" />
        </Link>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="search"
            icon={FiSearch}
            placeholder="Faça uma pesquisa"
          />
        </Form>

        <User>
          <img
            src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="User"
          />
          <strong>Jones</strong>
        </User>
      </Content>
    </Container>
  )
}

export default Header
