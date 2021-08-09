import styled, { keyframes } from 'styled-components'
// import { shade } from 'polished'

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY( -82px );

  }
  to {
    opacity: 1;
    transform: translateY( 0 );
  }
`

export const Container = styled.header`
  width: 100%;
  background: #4946fa;
  border: none;
  animation: ${animation} 0.2s;

  height: 82px;
  filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.15));
`
export const Content = styled.div`
  max-width: 1128px;
  display: flex;
  height: 82px;

  flex-direction: row;
  align-items: center;
  margin: 0 auto;

  img.logo {
    margin: 5px 32px 0 0;
    padding-left: 16px;
  }

  a {
    height: 82px;
    align-items: center;
    display: flex;
  }

  form {
    display: flex;
    width: 100%;
    height: 82px;
    align-items: center;
  }
`
export const User = styled.div`
  height: 82px;

  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 32px;

  img {
    width: 58px;
    height: 58px;
    object-fit: cover;
    border: 4px solid #6260ff;

    margin-bottom: 5px;
    margin-right: 0;
    border-radius: 50%;
  }

  strong {
    font-size: 18px;
    margin-left: 16px;
    padding-right: 16px;
    text-align: left;
    margin-bottom: 5px;
  }
`
