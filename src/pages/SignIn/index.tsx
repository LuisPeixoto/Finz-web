import React, { useCallback, useRef } from 'react'
import { Container, Content, Background } from './styles'
import logoSVG from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import Input from '../../components/Input'
import MainButton from '../../components/Button/mainButton'
import SecondaryButton from '../../components/Button/secondaryButton'
import getValidationErrors from '../../utils/getValidatonErrors'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email(),
        password: Yup.string().min(8, 'Senha obrigatória'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      const errors = getValidationErrors(error)
      formRef.current?.setErrors(errors)
    }
  }, [])
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
