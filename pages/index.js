import React, { useState } from 'react';
import styled from 'styled-components'

import BarradeTarefas from '../src/components/BarradeTarefas'
import Janela from '../src/components/Janela'

const AreadeTrabalho = styled.main`
  background: ${({ theme }) => theme.desktop.fundo};
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Icones = styled.div`
  margin: 20px;
`

const Icone = styled.div`
  display: block;
  margin-bottom: 20px;
  width: 96px;

  img {
    display: block;
    margin: 5px auto;
    width: 48px;
  }

  p {
    color: rgba(white, .8);
    font-size: 12px;
    text-align: center;
  }
`

const MeuCorpo = styled.div`
  padding: 24px 16px;
  p {
    padding-top: 12px;
  }
`

const Titulo = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.primaria};
`

export default function Home() {
  const artigos = [
    {
      nome:'@Computador',
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
      icone: 'https://64.media.tumblr.com/e43772ad38f66d5049b8610023ecffa1/tumblr_prx9qe6xcC1ubqz06_500.gifv',
      conteudo: <h4>BBBbbb</h4>
    },
    {
      nome:'ccc',
      icone: 'https://64.media.tumblr.com/59193b353822170f40579ce5d59db317/tumblr_prx9qfhsvH1ubqz06_1280.gifv',
      conteudo: <div>
                  <h6>CCCccc</h6>
                  <p>CCCccc</p>
                </div>
    },
    {
      nome:'ddd',
      icone: 'https://64.media.tumblr.com/7b1a9eb3789efa0e5570c62db6484d0e/tumblr_prx9qfzCdv1ubqz06_540.gifv',
      conteudo: <img src='https://cupulatrovao.com.br/wp-content/uploads/2021/01/kono-dio-da.jpg' />
    }
  ]

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  return (
    <AreadeTrabalho>

      <Icones>
        {artigos.map((artigo) => {
          return (
            <Icone key={artigo.nome+'icone'} onClick={toggle}>
              <img src={artigo.icone} alt="" />
              <p>{artigo.nome}</p>
            </Icone>
          )
        })}
      </Icones>

      <BarradeTarefas />

      {artigos.map((artigo) => {
        return (
          <div key={artigo.nome}
            style={{ display: showMe?"block":"none" }}
          >
            <Janela
              artigo={artigo}
              topo={ '96px'
                //(Math.floor(Math.random() * (40 - 10)) + 10) + 'vh'
              }
              esquerda={ '112px'
                //(Math.floor(Math.random() * (60 - 0)) + 0) + 'vw'
              }
            />
          </div>
        )
      })}

    </AreadeTrabalho>
  )
}
