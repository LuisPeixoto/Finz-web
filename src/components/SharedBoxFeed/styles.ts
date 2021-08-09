import { shade } from 'polished'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    opacity: 0;
    transform: scale( .75 );

  }
  to {
    opacity: 1;
    transform: scale( 1 );
  }
`

export const Container = styled.div`
  background: #fff;
  animation: ${animation} 0.2s;
  margin-bottom: 16px;

  border-radius: 5px;
`

export const Form = styled.div`
  width: 100%;
  padding: 16px;
  animation: ${animation} 0.5s;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  border-bottom: 2px solid #efefef;
  padding-bottom: 40px;

  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
    margin-right: 16px;
  }

  input {
    width: 100%;
    color: #6c6c6c;
    height: 64px;
    border: none;
  }
`
export const Toolbar = styled.div`
  margin: 16px 0 0 20px;
  color: #adaab5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100px;
    height: 38px;
    font-size: 14px;
    background: #4946fa;
    border-radius: 5px;
    border: 0;
    color: #fff;
    padding: 0 16px;
    transition: background-color 0.6s;

    &:hover {
      background-color: ${shade(0.2, '#4946fa')};
    }
  }
`
