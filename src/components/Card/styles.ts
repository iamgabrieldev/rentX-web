import styled from 'styled-components'

export const CardStyled = styled.div`
  background-color: #fff;
  border-radius: 4px;

  img {
    padding: 2.5rem 3rem;
    height: 192px;
    width: 300px;
  }

  .div-line {
    .father {
      display: flex;
      gap: 1.5rem;
      padding: 1rem;

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
  }
`
