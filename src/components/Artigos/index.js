import styled from 'styled-components';

export const MeuCorpo = styled.div`
  padding: 24px 16px;
  p {
    padding-top: 12px;
  }
`

export const Titulo = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.primaria};
`
