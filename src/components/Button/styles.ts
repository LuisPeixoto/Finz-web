import styled from 'styled-components'
import { shade } from 'polished'

export const MainContainer = styled.button`
  background: #4946fa;
  height: 56px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 24px;
  transition: background-color 0.6s;

  &:hover {
    background-color: ${shade(0.2, '#4946fa')};
  }
`

export const SecondaryContainer = styled.button`
  color: #9c9c9c;
  display: block;
  width: 340px;
  text-decoration: none;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  text-decoration: none;
  background: none;
  height: 56px;
  border-radius: 5px;
  border: 2px solid #d6d6d6;
  padding: 0 16px;
  transition: background-color 0.6s;

  svg {
    margin-right: 16px;
  }
  &:hover {
    background-color: ${shade(0, '#d6d6d6')};
  }
`
