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
  max-width: 1128px;
  display: flex;

  flex-direction: row;
  align-items: flex-start;
  margin: 64px auto;
`

export const Repositories = styled.div`
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;
  animation: ${animation} 0.2s;

  > a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.6s, opacity 0.6s;

    display: flex;
    align-items: center;

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      opacity: 0.6;
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
`
