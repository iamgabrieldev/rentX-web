import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: calc(100vw - 0.2rem);
  height: 5.33rem;
  padding: 2rem 7.25rem;

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
    }

    svg {
      background: #f5f5f5;
      padding: 12px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }
`
