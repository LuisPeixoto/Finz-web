import styled, { css } from 'styled-components'

interface Props {
  hasImage?: boolean
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  align-items: center;

  & + div {
    margin-top: 16px;
  }
`
export const User = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;

  a {
    transition: opacity 0.8s;
    &:hover {
      opacity: 0.6;
    }
  }

  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
    margin-right: 16px;
  }
`

export const NameAndDate = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #6c6c6c;
    text-align: left;
  }

  strong {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    margin-top: 4px;
    font-size: 16px;
    color: #a8a8b3;
    font-weight: 400;
    text-align: left;
    width: 100%;
  }
`
export const Content = styled.div<Props>`
  border-bottom: 2px solid #efefef;
  width: 100%;

  ${(props) =>
    !props.hasImage &&
    css`
      border-top: 2px solid #efefef;
    `}

  img {
    width: 100%;
  }

  p {
    justify-content: left;
    padding: 16px;
    font-size: 16px;
    line-height: 26px;
    text-align: justify;
  }
`
export const SocialActions = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`

export const Like = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  & + div {
    margin-left: 32px;
  }
`

export const Comment = styled.div`
  width: auto;
  display: flex;
  align-items: center;
`
