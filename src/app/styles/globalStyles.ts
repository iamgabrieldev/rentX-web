import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.font.colors.pure};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  #nprogress .bar {
    background: ${({ theme }) => theme.colors.primary};
  }
  #nprogress .spinner-icon {
    width: 25px;
    height: 25px;
    border: solid 3px transparent;
  }
`;

export default GlobalStyles;
