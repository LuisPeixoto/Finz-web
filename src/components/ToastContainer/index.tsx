import React from 'react'
import { ToastMessage } from '../../hooks/toast'
import { Container } from './styles'
import { useTransition } from 'react-spring'

import Toast from './Toast'
interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToasContainer: React.FunctionComponent<ToastContainerProps> = ({
  messages,
}) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  )
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  )
}

export default ToasContainer
