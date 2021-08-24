import styled from 'styled-components';

export const MeuCorpo = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 12px;
  padding: 24px 16px;

  a {
    text-decoration: none;
  }
`

export const Titulo = styled.h1`
  width: 100%;
  font-size: 42px;
  color: ${({ theme }) => theme.colors.primaria};
`

export const Pasta = styled.div`
  width: 96px;
  min-height: 90px;

  img {
    display: block;
    margin: 5px auto;
    width: 48px;
  }

  p {
    font-size: 12px;
    text-align: center;
  }

  &:active {
    p {
      background-color: ${({ theme }) => theme.desktop.azul_windows};
      color: white;
    }
  }
`
