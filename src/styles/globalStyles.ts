import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.font.colors.pure};
    background: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 16px
  }

  h1, h2 {
    font-family: Archivo, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  p, button {
    font-family: Inter, sans-serif;
  }

  button {
    border: none;
    cursor: pointer
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.colors.light.pure};
  }

  #nprogress .spinner-icon {
    width: 25px;
    height: 25px;
    border: solid 3px transparent;
  }
`

export default GlobalStyles
