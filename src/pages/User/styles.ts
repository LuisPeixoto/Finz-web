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
  max-width: 900px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  margin: 64px auto;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${animation} 0.2s;
`
