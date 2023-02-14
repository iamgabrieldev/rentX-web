import styled from 'styled-components'

export const CarListStyled = styled.main`
  height: calc(100vh - 302px);
  padding: 1rem 12.25rem 1rem 7.25rem;

  main {
    padding: 2rem 0rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      &:after {
        content: '';
        display: block;
        width: calc(100vw - 12.25rem);
        height: 3px;
        background: #dedee3;
        margin: 1.5rem 0rem;
        border-radius: 2px;
      }
    }
  }

  div {
    flex-wrap: wrap;

    div {
      margin-bottom: 1rem;
    }
  }
`

export const CarListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`
