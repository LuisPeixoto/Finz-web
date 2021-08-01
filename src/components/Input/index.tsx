import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { Container } from './styles'
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FunctionComponent<InputProps> = ({
  name,
  icon: Icon,
  ...props
}) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [])
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...props} />
    </Container>
  )
}

export default Input
