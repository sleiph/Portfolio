import styled from 'styled-components'
import Artigo from '../src/components/Artigo'
import Desktop from '../src/components/Desktop'

const Main = styled.main`

`

const MeuCorpo = styled.div`
  max-width: 800px;
  padding-left: 24px;
  padding-right: 16px;
`

const Titulo = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaria};
`

export default function Home() {
  const artigos = [
    {
      nome:'aaa',
      icone: 'https://img.informer.com/icons/png/48/2873/2873700.png',
      conteudo: <MeuCorpo>
                  <Titulo>Ricardo Gomes</Titulo>
      
                  <p>Como você vai neste dia de hoje?</p>

                  <p>Não que eu esteja realmente interessado em como você está, eu só escrevi esse texto pra testar a aplicação mesmo.
                    A aplicação, aliás, vai ser o meu portfólio algum dia, mas se você já ficou interessado no meu trabalho só com essa página sem propósito, por que não entra no meu <a href='https://github.com/sleiph'>gitHub</a> e confere meus outros trabalhos?
                  </p>
                </MeuCorpo>
    },
    {
      nome:'bbb',
      icone: 'http://www.it.uom.gr/project/intro/conwin/mwin8/95desktop5.gif',
      conteudo: <h4>BBBbbb</h4>
    },
    {
      nome:'ccc',
      icone: 'http://vignette4.wikia.nocookie.net/logopedia/images/5/54/Mydocs99.png/revision/latest?cb=20160414125319',
      conteudo: <div>
                  <h6>CCCccc</h6>
                  <p>CCCccc</p>
                </div>
    },
    {
      nome:'ddd',
      icone: 'https://img.icons8.com/fluency/452/microsoft-paint.png',
      conteudo: <img src='https://cupulatrovao.com.br/wp-content/uploads/2021/01/kono-dio-da.jpg' />
    }
  ]

  return (
    <Main>
      <Desktop artigos={artigos} />

      {artigos.map((artigo) => {
        return (
          <Artigo
            icone={artigo.icone}
            titulo={artigo.nome}
            conteudo={artigo.conteudo}
            topo={ Math.floor(Math.random() * (40 - 10)) + 10 }
            esquerda={ Math.floor(Math.random() * (60 - 0)) + 0 }
          />
        )
      })}

    </Main>
  )
}
