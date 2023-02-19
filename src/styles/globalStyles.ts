import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration:none;
    color: #000;
  }

  html,
  body {
    color: #000;
    background: ${({ theme }) => theme.colors['gray-100']};
    padding: 0;
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 16px
  }

  h1, h2 {
    font-family: Archivo, sans-serif;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary}
  }

  input {
    border:0;
  }
  
  p, button {
    font-family: Inter, sans-serif;
  }

  button {
    border: none;
    cursor: pointer

    &::focus {
      color: red;
    }
  }



 */
`

export default GlobalStyles
