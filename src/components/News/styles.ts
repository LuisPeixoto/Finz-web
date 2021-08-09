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
  max-width: 250px;
  padding-bottom: 8px;
  position: sticky;
  top: 16px;
  background: #fff;
  animation: ${animation} 0.2s;
  min-height: 350px;
  border-radius: 5px;
`

export const TitleCard = styled.div`
  margin-top: 22px;
  width: 100%;
  align-items: center;
  display: flex;

  border-bottom: 2px solid #efefef;
  strong {
    margin: 0 0 13px 16px;
    font-size: 16px;
    font-weight: 400;
    color: #6c6c6c;
  }
`

export const Content = styled.div`
  padding: 0 16px;

  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    border-radius: 5px;
    width: 215px;
    height: 150px;
    object-fit: cover;
  }
`

export const News = styled.div`
  margin-top: 16px;
  a {
    width: 100%;
    animation: ${animation} 0.5s;

    display: block;
    text-decoration: none;
    margin-bottom: 16px;
    transition: opacity 0.8s;
    &:hover {
      opacity: 0.7;
    }

    & + a {
      padding-top: 16px;
      border-top: 2px solid #efefef;
    }
  }
`

export const Title = styled.h1`
  font-size: 18px;
  width: 100%;
  text-align: justify;
  text-justify: distribute;
  word-spacing: -2px;
  color: #6c6c6c;
  margin: 12px 0 8px 0;
`
export const Description = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  text-justify: distribute;
  word-spacing: -2px;
  color: #a8a8b3;
`
