import React from 'react'
import { Container, Content, Background } from './styles'
import logoSVG from '../../assets/logo.svg'
import { Form } from '@unform/web'
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiLock,
  FiBriefcase,
  FiMapPin,
  FiCalendar,
} from 'react-icons/fi'

import Input from '../../components/Input'
import MainButton from '../../components/Button/mainButton'

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

  return (
    <>
      <Container>
        <Content>
          <img src={logoSVG} width="200px" alt="Finz" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="birth"
              icon={FiCalendar}
              placeholder="Data de nascimento"
            />
            <Input name="work" icon={FiBriefcase} placeholder="Profissão" />
            <Input name="city" icon={FiMapPin} placeholder="Cidade" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <MainButton type="submit">Cadastrar</MainButton>
          </Form>
          <a href="/">
            <FiArrowLeft /> Voltar
          </a>
        </Content>
        <Background />
      </Container>
    </>
  )
}
export default SignUp
