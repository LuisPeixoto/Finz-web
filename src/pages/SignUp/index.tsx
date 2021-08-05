import React, { useCallback, useRef } from 'react'
import { Container, Content, Background, AnimationContainer } from './styles'
import sinUpVector from '../../assets/sign-up-vector.svg'
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
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { useToast } from '../../hooks/toast'

interface SignUpFormData {
  name: string
  email: string
  birth: string
  career: string
  city: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
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

        await schema.validate(data, {
          abortEarly: false,
        })

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Agora você já pode realizar o seu login!',
        })

        await api.post('/users', data)

        history.push('/signin')
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)
          return
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Houve um erro ao realizar o cadastro, tente novamente.',
        })
      }
    },
    [addToast, history],
  )

  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
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
            <Link to="/">
              <FiArrowLeft /> Voltar
            </Link>
          </AnimationContainer>
        </Content>
        <Background>
          <img width="48%" src={sinUpVector} />
        </Background>
      </Container>
    </>
  )
}
export default SignUp
