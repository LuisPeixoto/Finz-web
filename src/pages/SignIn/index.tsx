import React from 'react'
import { Container, Content, Background } from './styles'
import logoSVG from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'

const SignIn: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={logoSVG} width="200px" alt="Finz" />
        <form>
          <h1>Mantenha-se conectado</h1>
          <input placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="#">Esqueci a minha senha</a>
        </form>
        <button>
          <FiLogIn />
          Criar conta
        </button>
      </Content>
    </Container>
  </>
)
export default SignIn
