import React, { ButtonHTMLAttributes } from 'react'
import { SecondaryContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType
}

const SecondaryButton: React.FunctionComponent<ButtonProps> = ({
  children,
  icon: Icon,
  ...props
}) => (
  <SecondaryContainer type="button" {...props}>
    {Icon && <Icon />}
    {children}
  </SecondaryContainer>
)

export default SecondaryButton
