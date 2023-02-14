import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #1b1b1f;
  width: 5rem;
  height: 100vh;
  position: fixed;
  header {
    background-color: red;
    padding: 2rem 0rem;

    img {
      width: 2rem;
      display: flex;
      margin: 0 auto;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    height: calc(100vh - 86px);

    div {
      display: flex;
      padding: 1rem 0px;
      width: 4.75rem;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: #000;
      }
    }

    .active {
      background: #000;
      border-left: 4px solid ${({ theme }) => theme.colors.primary};
    }
  }
`
