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
  height: 450px;
  background: #fff;
  position: sticky;
  top: 16px;
  animation: ${animation} 0.2s;

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
  width: 250px;
  padding: 0 16px;
  animation: ${animation} 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 16px;
  }

  img {
    border-radius: 50%;
    width: 45px;
    object-fit: cover;
    height: 45px;
  }
`

export const Users = styled.div`
  margin-top: 16px;
  a {
    width: 100%;
    align-items: center;

    display: flex;
    text-decoration: none;
    transition: opacity 0.8s;
    &:hover {
      opacity: 0.7;
    }
  }
`

export const UserInfo = styled.div`
  width: 100%;
  display: block;
  margin-left: 8px;
  strong {
    font-size: 14px;
    color: #6c6c6c;
  }

  p {
    margin-top: 4px;
    font-weight: 400;
    font-size: 14px;
    color: #a8a8b3;
  }
`
export const Follow = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #a8a8b3;
  display: flex;
  border-radius: 50%;
  color: #a8a8b3;
  align-items: center;
  justify-content: center;
`
