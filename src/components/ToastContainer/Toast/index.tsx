import React, { useEffect } from 'react'
import { FiCheckCircle, FiInfo, FiXCircle, FiAlertCircle } from 'react-icons/fi'
import { ToastMessage, useToast } from '../../../hooks/toast'
import { Container } from './styles'

interface ToastProps {
  message: ToastMessage
  style: object
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
}
const Toast: React.FunctionComponent<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 9000)

    return () => {
      clearTimeout(timer)
    }
  }, [removeToast, message.id])

  return (
    <Container
      type={message.type}
      style={style}
      hasDescription={!!message.description}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  )
}

export default Toast
