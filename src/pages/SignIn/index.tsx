import React, { useCallback, useRef } from 'react'
import { Container, Content, Background, AnimationContainer } from './styles'
import logoSVG from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'
import Input from '../../components/Input'
import MainButton from '../../components/Button/mainButton'
import SecondaryButton from '../../components/Button/secondaryButton'
import getValidationErrors from '../../utils/getValidatonErrors'
import { Link } from 'react-router-dom'
import singInVector from '../../assets/sign-in-vector.svg'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()

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

        await signIn({
          email: data.email,
          password: data.password,
        })
      } catch (error) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)

        return
      }
      addToast({
        type: 'success',
        title: 'Erro na autenticacão',
        description: 'Ocorreu um erro ao fazer login, cheque as credencias',
      })
    },
    [signIn, addToast],
  )
  return (
    <>
      <Container>
        <Background>
          <img width="60%" src={singInVector} />
        </Background>
        <Content>
          <AnimationContainer>
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
            <Link to="/signup">
              <SecondaryButton icon={FiLogIn}>Criar conta</SecondaryButton>
            </Link>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  )
}
export default SignIn
