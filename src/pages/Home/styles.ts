import { Row, Typography as TypographyAntd } from 'antd';
import styled from 'styled-components';

export const RowStyled = styled(Row)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  padding: 2rem;
`;

export const Typography = styled(TypographyAntd.Title)`
  h1 {
    color: #fff;
  }
`;
