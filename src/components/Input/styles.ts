import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #f1f1f1;
  border-radius: 5px;

  border: 2px solid #f1f1f1;
  color: rgba(73, 70, 250, 0.64);

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
      border: 2px solid #4946fa;
      box-shadow: 0px 0px 4px #4946fa;

      color: #4946fa;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #4946fa;
    `}

  input {
    flex: 1;
    background: transparent;
    color: #4946fa;
    border: none;
    ::placeholder {
      color: rgba(73, 70, 250, 0.64);
      opacity: 1; /* Firefox */
    }
  }

  svg {
    margin-right: 16px;
  }
`
