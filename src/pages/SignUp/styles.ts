import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const Background = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #4845f7 0%, #3331ae 100%);
  align-items: center;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: inset 9px 0px 9px -3px rgba(0, 0, 0, 0.25);
  box-shadow: inset 9px 0px 9px -3px rgba(0, 0, 0, 0.25);

  img {
    animation: ${appearFromLeft} 1s;
  }
`

export const Content = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 40px 0 16px 0;
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
    display: block;
    margin-top: 24px;
    transition: transform 0.6s, color 0.6s;
    text-decoration: none;
    &:hover {
      color: ${shade(0.2, '#4946fa')};
      transform: translateX(-5px);
    }
  }
`
