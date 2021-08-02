import React, { useCallback, useRef } from 'react'
import { Container, Content, Background } from './styles'
import logoSVG from '../../assets/logo.svg'
import { FormHandles } from '@unform/core'
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
import getValidationErrors from '../../utils/getValidatonErrors'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email(),
        birth: Yup.date().required('Data de nascimeto obrigatório'),
        career: Yup.string().required('Profissão obrigatório'),
        city: Yup.string().required('Cidade obrigatório'),
        password: Yup.string().min(8, 'No mínimo 8 caracteres'),
      })

      console.log(schema)

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
        <Content>
          <img src={logoSVG} width="200px" alt="Finz" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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
