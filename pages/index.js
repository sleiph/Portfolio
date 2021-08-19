import React, { useState } from 'react';
import styled from 'styled-components'

import BarradeTarefas from '../src/components/BarradeTarefas'
import Artigo from '../src/components/Janela';
import Janela from '../src/components/Janela'

const AreadeTrabalho = styled.main`
  background: ${({ theme }) => theme.desktop.fundo};
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
      nome:'Projetos',
      icone: 'https://66.media.tumblr.com/2d4a1593f0a13df6d507304708e11a7f/tumblr_odqaag4zd41vgs7gco1_75sq.png',
      conteudo: <h4>Projetos</h4>
    },
    {
      nome:'Conhecimentos',
      icone: 'https://66.media.tumblr.com/49ed6c0ebac47753e08e85c230d97d03/tumblr_odqaag4zd41vgs7gco2_75sq.png',
      conteudo: <h4>Conhecimentos</h4>
    },
    {
      nome:'Formação acadêmica',
      icone: 'https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png',
      conteudo: <div>
                  <h4>Formação & Experiências</h4>
                  <p>Sei lá</p>
                </div>
    },
    {
      nome:'Uns desenhos aí',
      icone: 'https://66.media.tumblr.com/4ff9a932e9ba9b4736ddc63fae12b4fb/tumblr_odqay8HODs1vgs7gco1_75sq.png',
      conteudo: <img src='https://github.com/mexerica/nedankinde/raw/main/nedankinde/img/alguem_fundo.png' />
    },
    {
      nome:'@Sobre',
      icone: 'https://67.media.tumblr.com/f269281536842a64ec1a35479ca8fdd3/tumblr_odqaag4zd41vgs7gco5_75sq.png',
      conteudo: <MeuCorpo>
                  <Titulo>Ricardo Gomes</Titulo>

                  <p>Como você vai neste dia de hoje?</p>

                  <p>Não que eu esteja realmente interessado em como você está, eu só escrevi esse texto pra testar a aplicação mesmo.
                    A aplicação, aliás, vai ser o meu portfólio algum dia, mas se você já ficou interessado no meu trabalho só com essa página sem propósito, por que não entra no meu <a href='https://github.com/sleiph'>gitHub</a> e confere meus outros trabalhos?
                  </p>
                </MeuCorpo>
    },
    {
      nome:'404',
      icone: 'https://64.media.tumblr.com/7b1a9eb3789efa0e5570c62db6484d0e/tumblr_prx9qfzCdv1ubqz06_540.gifv',
      conteudo: <div>
                  <h4>404</h4>
                  <p>Não sei o que você esperava.</p>
                </div>
    }
  ]

  function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele.nome != value.nome; 
    });
  }

  const [janelas, setJanelas] = useState([])

  return (
    <AreadeTrabalho id="area-de-trabalho">

      <Icones>
        {artigos.map((artigo, index) => {

          return (
            <Icone key={artigo.nome+'-icone'}
            onClick={
              () => {
                if (janelas.filter(j => j.nome === artigo.nome).length > 0)
                  setJanelas(arrayRemove(janelas, artigos[index]))
                else {
                  setJanelas( janelas.concat([artigos[index]]) )
                }
            }}>
              <img src={artigo.icone} alt="" />
              <p>{artigo.nome}</p>
            </Icone>
          )
        })}
      </Icones>
      
      <BarradeTarefas artigos={artigos}/>
      
      {janelas.map((artigo, index) => {
        console.log(janelas + " janelas")
        //(Math.floor(Math.random() * (40 - 10)) + 10) + 'vh'
        //(Math.floor(Math.random() * (60 - 0)) + 0) + 'vw'
        return (
          <Janela key={artigo.nome}
            artigo={artigo} funcao={
              () => { setJanelas(arrayRemove(janelas, artigo)) }}
          />
        )
      })}

    </AreadeTrabalho>
  )
}
