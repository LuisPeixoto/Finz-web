import React from 'react'

import { Container } from './styles'

interface TooltipProops {
  title: string
  className?: string
}

const Tooltip: React.FunctionComponent<TooltipProops> = ({
  title,
  className,
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip
