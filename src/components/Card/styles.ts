import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  img {
    padding: 2.5rem 4rem;
    height: 192px;
  }
`

export const CardInfo = styled.div`
  .attributes {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 2rem 0rem 2rem;

    div {
      p {
        text-transform: uppercase;
        color: #aeaeb3;
        font-size: 0.75rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      strong {
        color: #dc1637;
        font-weight: bold;
      }
    }
  }

  &:before {
    width: 100%;
    content: '';
    display: block;
    height: 2px;
    background: #e5e5e5;
  }

  svg {
    margin-left: auto;
    color: #aeaeb3;
    width: 2rem;
    height: 2rem;
  }
`
