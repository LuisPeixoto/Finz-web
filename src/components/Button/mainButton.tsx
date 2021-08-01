import React, { ButtonHTMLAttributes } from 'react'
import { MainContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> //eslint-disable-line

const MainButton: React.FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => (
  <MainContainer type="button" {...props}>
    {children}
  </MainContainer>
)

export default MainButton
