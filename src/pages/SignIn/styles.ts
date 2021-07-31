import styled from 'styled-components'
import singInVector from '../../assets/sign-in-vector.svg'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Content = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  -webkit-box-shadow: -9px 0px 9px -3px rgba(0, 0, 0, 0.25);
  box-shadow: -9px 0px 9px -3px rgba(0, 0, 0, 0.25);

  form {
    margin: 40px 0 16px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: 300;
    }

    input {
      background: #f1f1f1;
      border-radius: 5px;
      border: 2px solid #f1f1f1;
      padding: 16px;
      width: 100%;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      color: #4946fa;
      ::placeholder {
        color: rgba(73, 70, 250, 0.64);
        opacity: 1; /* Firefox */
      }

      & + input {
        margin-top: 16px;
      }
    }

    button {
      background: #4946fa;
      height: 56px;
      border-radius: 5px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.6s;

      &:hover {
        background-color: ${shade(0.2, '#4946fa')};
      }
    }

    a {
      color: #4946fa;
      display: block;
      margin-top: 24px;
      transition: transform 0.6s, color 0.6s;
      text-decoration: none;
      &:hover {
        color: ${shade(0.2, '#4946fa')};
        transform: translateX(5px);
      }
    }
  }

  > button {
    color: #6c6c6c;
    display: block;
    width: 340px;
    text-decoration: none;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    text-decoration: none;
    background: none;
    height: 56px;
    border-radius: 5px;
    border: 2px solid #d6d6d6;
    padding: 0 16px;
    transition: background-color 0.6s;

    svg {
      margin-right: 16px;
    }
    &:hover {
      background-color: ${shade(0, '#d6d6d6')};
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${singInVector}) no-repeat center,
    linear-gradient(180deg, #4845f7 0%, #3331ae 100%);
  background-size: 60%;
`
