import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
      background: #E5E5E5;
      color: #6C6C6C;
      --webkit-font-smoothing: antialiased
  }

  body, input, button {
      font-family: 'Ubuntu', serif;
      font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:500
  }

  a {
      text-decoration: none;
  }

  button {
      cursor: pointer;
  }
`
