import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  max-width: 700px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  margin: 64px auto;
`

export const Content = styled.div`
  background-color: #fff;
  padding: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    margin: 0 0 16px 0;
    width: 340px;
    text-align: center;

    img {
      margin-bottom: 24px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

    h1 {
      margin-bottom: 24px;
      font-size: 36px;
      font-weight: 400;
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
