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
  width: 100%;
  display: flex;
  padding: 36px;
  position: relative;

  border-radius: 5px;
  background-color: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${animation} 0.2s;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-bottom: 24px;
    object-fit: cover;
  }

  > strong {
    width: auto;
    font-size: 32px;
    color: #6c6c6c;
    font-weight: 400;
    margin-bottom: 16px;
  }

  span {
    color: #6c6c6c;
    font-weight: 300;
  }

  ul {
    width: 100%;
    display: flex;
    border-bottom: 2px solid #efefef;
    border-top: 2px solid #efefef;

    list-style-type: none;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    padding: 16px;

    li {
      justify-content: center;

      & + li {
        margin-left: 48px;
      }

      strong {
        display: block;
        font-weight: 500;
        font-size: 32px;
        text-align: center;
        color: #6c6c6c;
      }
      > span {
        display: block;
        font-size: 21px;

        margin-top: 4px;
        text-align: center;
        font-weight: 300;
        color: #6c6c6c;
      }
    }
  }
`

export const Follow = styled.div`
  width: 64px;
  height: 64px;
  position: absolute;
  top: 110px;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #a8a8b3;
  color: #a8a8b3;
`

export const CareerAndCity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  > strong {
    display: block;
    font-weight: 500;
    font-size: 28px;
    color: #6c6c6c;
  }
  > span {
    display: block;
    font-size: 24px;

    margin-top: 8px;
    text-align: center;
    font-weight: 300;
    color: #6c6c6c;
  }
`
