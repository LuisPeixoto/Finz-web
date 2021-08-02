import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 200px;
    background: #4946fa;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: visibility 0.6s, opacity 0.6s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100%+12px);
    left: 50%;
    transform: translateX(-50%);

    color: #fff;
    &::before {
      content: '';
      border-style: solid;
      border-color: #4946fa transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX((-50%));
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`
