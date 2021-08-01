import styled from 'styled-components'

export const Container = styled.div`
  background: #f1f1f1;
  border-radius: 5px;
  border: 2px solid #f1f1f1;
  color: rgba(73, 70, 250, 0.64);
  padding: 16px;
  width: 100%;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

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
