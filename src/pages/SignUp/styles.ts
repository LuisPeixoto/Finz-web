import styled from 'styled-components'
import singInVector from '../../assets/sign-up-vector.svg'
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
    margin: 40px 0 48px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: 300;
    }
  }

  a {
    color: #4946fa;
    font-size: 18px;
    display: block;
    display: flex;
    margin-top: 24px;
    transition: transform 0.6s, color 0.6s;
    text-decoration: none;
    &:hover {
      color: ${shade(0.4, '#4946fa')};
      transform: translateX(-5px);
    }

    svg {
      margin-right: 8px;
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${singInVector}) no-repeat center,
    linear-gradient(180deg, #4845f7 0%, #3331ae 100%);
  background-size: 50%;
`
