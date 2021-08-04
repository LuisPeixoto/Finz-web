import React, { useCallback, useContext, useRef } from 'react'
import { Container, Content, Background } from './styles'
import logoSVG from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { AuthContext } from '../../context/AuthContext'
import Input from '../../components/Input'
import MainButton from '../../components/Button/mainButton'
import SecondaryButton from '../../components/Button/secondaryButton'
import getValidationErrors from '../../utils/getValidatonErrors'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useContext(AuthContext)

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório').email(),
          password: Yup.string().min(8, 'Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        signIn({
          email: data.email,
          password: data.password,
        })
      } catch (error) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
      }
    },
    [signIn],
  )
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoSVG} width="200px" alt="Finz" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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
          </Form>
          <SecondaryButton icon={FiLogIn}>Criar conta</SecondaryButton>
        </Content>
      </Container>
    </>
  )
}
export default SignIn
