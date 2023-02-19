import styled from 'styled-components'

export const ButtonStyled = styled.button`
  color: #fff;
  cursor: pointer;
  background-color: #dc1637;
  padding: 1.5rem 4rem;
  font-weight: medium;
  font-size: 1.125rem;

  .secondary {
    background: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
