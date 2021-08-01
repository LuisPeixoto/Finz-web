import React from 'react'
import { Container, Content, Background } from './styles'
import logoSVG from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import Input from '../../components/Input'
import MainButton from '../../components/Button/mainButton'
import SecondaryButton from '../../components/Button/secondaryButton'

const SignIn: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={logoSVG} width="200px" alt="Finz" />
        <form>
          <h1>Mantenha-se conectado</h1>
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <MainButton type="submit">Entrar</MainButton>
          <a href="#">Esqueci a minha senha</a>
        </form>
        <SecondaryButton icon={FiLogIn}>Criar conta</SecondaryButton>
      </Content>
    </Container>
  </>
)
export default SignIn
