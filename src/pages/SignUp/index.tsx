import React, { useCallback } from 'react'
import { Container, Content, Background } from './styles'
import logoSVG from '../../assets/logo.svg'
import { Form } from '@unform/web'
import * as Yup from 'yup'
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
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Nome obrigatório').email(),
        career: Yup.string().required('Profissão obrigatório'),
        city: Yup.string().required('Cidade obrigatório'),
        birth: Yup.date().required('Data de nascimeto obrigatório'),
        password: Yup.string().min(8, 'No mínimo 8 caracteres'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

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
            <Input name="career" icon={FiBriefcase} placeholder="Profissão" />
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
