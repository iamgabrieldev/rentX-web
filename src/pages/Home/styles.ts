import { Row } from 'antd'
import styled from 'styled-components'

export const RowStyled = styled(Row)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  justify-content: space-evenly;
  display: flex;
  padding: 0px 140px;
  align-items: center;

  p {
    font-size: 1.25rem;
    width: 360px;
    line-height: 1.5;
    color: ${({ theme }) => theme.font.colors.white};
    margin-bottom: 4rem;
  }
`

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.light.pure};
  font-size: 3.5rem;
  margin: 7.5rem 0rem 2rem 0rem;
`
