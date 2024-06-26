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

export const Descricao = styled.div`
  padding: 24px 16px;
`

export const Titulo = styled.h3`
  width: 100%;
  line-height: 1.75;
  font-size: large;
  font-weight: bold;
`

export const Notas = styled.p`
  width: 100%;
  line-height: 1.75;

  a{
    font-weight: bold;
    text-decoration: underline;
    
    &:link {
      color: ${({ theme }) => theme.desktop.fundo};
    }
    &:visited {
      color: ${({ theme }) => theme.desktop.titulo_janela};
    }
  }
`

export const Pasta = styled.div`
  width: 96px;
  min-height: 92px;

  img {
    display: block;
    margin: 5px auto;
    width: 48px;
    height: 46px;
    object-fit: cover;
  }

  p {
    font-size: 12px;
    text-align: center;
  }

  &:active {
    p {
      background-color: ${({ theme }) => theme.desktop.titulo_janela};
      color: white;
    }
  }
`
