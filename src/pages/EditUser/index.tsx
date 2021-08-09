import React, { useCallback, useRef } from 'react'
import { Container, Content, AnimationContainer } from './styles'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import {
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
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { useToast } from '../../hooks/toast'
import Header from '../../components/Header'

interface SignUpFormData {
  name: string
  email: string
  birth: string
  career: string
  city: string
  password: string
}

const EditUser: React.FC = () => {
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
      <Header />
      <Container>
        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Atualize seus dados</h1>
              <img
                src="https://avatars.githubusercontent.com/u/49557710?s=400&u=d9a6b049c408acb5c3de5a1991a9081b48d6b501&v=4"
                width="200px"
                alt="Finz"
              />
              <Input
                name="name"
                value="Luis Fernando Peixoto"
                icon={FiUser}
                placeholder="Nome"
              />
              <Input
                name="email"
                icon={FiMail}
                value="luis@luis.com"
                placeholder="Email"
              />
              <Input
                name="birth"
                icon={FiCalendar}
                value="00/00/0000"
                placeholder="Data de nascimento"
              />
              <Input
                name="career"
                value="DEV"
                icon={FiBriefcase}
                placeholder="Profissão"
              />
              <Input
                name="city"
                value="Campos, RJ"
                icon={FiMapPin}
                placeholder="Cidade"
              />
              <Input
                name="password"
                icon={FiLock}
                value="123456789"
                type="password"
                placeholder="Senha"
              />
              <MainButton type="submit">Atualizar</MainButton>
            </Form>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  )
}
export default EditUser
