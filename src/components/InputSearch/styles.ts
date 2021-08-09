import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #6260ff;
  border-radius: 5px;
  height: 46px;

  border: 2px solid #6260ff;
  color: #ffffffb0;
  padding: 16px;
  width: 100%;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: color 0.6s, border 0.6s, box-shadow 0.6s;

  & + div {
    margin-top: 16px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      box-shadow: 0px 1px 6px rgb(255, 255, 255, 0.32);

      color: #fff;
    `}

  input {
    flex: 1;
    font-family: 'Ubuntu';
    font-weight: 500;

    color: #fff;

    background: transparent;

    &::placeholder {
      color: #ffffffb0;
      opacity: 1; /* Firefox */
    }

    ${(props) =>
      props.isFocused &&
      css`
        color: #fff;
      `}
    border: none;

    &::placeholder {
      ${(props) =>
        props.isFocused &&
        `
      color:#fff;
      opacity: 1; /* Firefox */


      `}
    }
  }

  svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  margin-left: 4px;
  margin-right: -4px;
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    margin-top: -40px;
    margin-left: -5px;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`
