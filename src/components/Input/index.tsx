import React, { InputHTMLAttributes } from 'react'
import { Container } from './styles'
import { IconBaseProps } from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FunctionComponent<InputProps> = ({
  icon: Icon,
  ...props
}) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...props} />
  </Container>
)

export default Input
