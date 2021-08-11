import styled from 'styled-components'
import Artigo from '../src/components/Artigo'

const Main = styled.main`
  margin: 24px;
`

const Titulo = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaria};
`

export default function Home() {
  const artigos = [ 'aaa', 'bbb', 'ccc', 'ddd' ]

  return (
    <Main>
      <Titulo>OlaMundo</Titulo>
    
      <p>Como você vai neste dia de hoje?</p>

      {artigos.map((artigo) => {
        return (
          <Artigo
            icone="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png"
            titulo="Bloco de Notas"
            conteudo={artigo}>
            {artigo}
          </Artigo>
        )
      })}

    </Main>
  )
}
