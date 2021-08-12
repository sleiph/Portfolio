import styled from 'styled-components'
import Artigo from '../src/components/Artigo'

const Main = styled.main`
  margin: 24px;
`

const Titulo = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaria};
`

const Corpo = styled.p`
  max-width: 800px;
`

export default function Home() {
  const artigos = [
    {
      nome:'aaa',
      icone: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png',
      conteudo: <h2>AAAaaa</h2>
    },
    {
      nome:'bbb',
      icone: 'https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png',
      conteudo: <h4>BBBbbb</h4>
    },
    {
      nome:'ccc',
      icone: 'https://img.icons8.com/fluency/452/microsoft-paint.png',
      conteudo: <div>
                  <h6>CCCccc</h6>
                  <p>CCCccc</p>
                </div>
    },
    {
      nome:'ddd',
      icone: 'https://cdn.iconscout.com/icon/free/png-512/microsoft-word-1411849-1194338.png',
      conteudo: <img src='https://cupulatrovao.com.br/wp-content/uploads/2021/01/kono-dio-da.jpg' />
    }
  ]

  return (
    <Main>
      <Titulo>Ricardo Gomes</Titulo>
    
      <Corpo>Como você vai neste dia de hoje?</Corpo>

      <Corpo>Não que eu esteja realmente interessado em como você está, eu só escrevi esse texto pra testar a aplicação mesmo.
        A aplicação, aliás, vai ser o meu portfólio algum dia, mas se você já ficou interessado no meu trabalho só com essa página sem propósito, por que não entra no meu <a href='https://github.com/sleiph'>gitHub</a> e confere meus outros trabalhos?
      </Corpo>

      {artigos.map((artigo) => {
        return (
          <Artigo
            icone={artigo.icone}
            titulo={artigo.nome}
            conteudo={artigo.conteudo}
          />
        )
      })}

    </Main>
  )
}
