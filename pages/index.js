import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'

import Projetos from '../src/components/Artigos/Projetos'
import Desenhos from '../src/components/Artigos/Desenhos'
import Conhecimentos from '../src/components/Artigos/Conhecimentos'
import Formacao from '../src/components/Artigos/Formacao'
import Sobre from '../src/components/Artigos/Sobre'
import QuatrozeroQuatro from '../src/components/Artigos/404'
import {BarradeTarefas, StartMenu} from '../src/components/BarradeTarefas'
import Janela from '../src/components/Janela'

const AreadeTrabalho = styled.main`
  background: ${({ theme }) => theme.desktop.fundo};
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`

const Icones = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  grid-gap: 15px;
  margin: 20px;
`

const Icone = styled.div`
  width: 96px;
  min-height: 80px;

  img {
    display: block;
    margin: 5px auto;
    width: 48px;
  }

  p {
    color: white;
    font-size: 12px;
    text-align: center;
  }

  &:active {
    p {
      background-color: ${({ theme }) => theme.desktop.azul_windows};
    }
  }
`

export default function Home() {
  const [janelas, setJanelas] = useState([])

  const [start, setStart] = useState('none')

  const artigos = [
    {
      nome:'Projetos',
      icone: 'https://66.media.tumblr.com/2d4a1593f0a13df6d507304708e11a7f/tumblr_odqaag4zd41vgs7gco1_75sq.png',
      conteudo: <Projetos />
    },
    {
      nome:'Uns desenhos aí',
      icone: 'https://66.media.tumblr.com/4ff9a932e9ba9b4736ddc63fae12b4fb/tumblr_odqay8HODs1vgs7gco1_75sq.png',
      conteudo: <Desenhos value={janelas} onClick={handleClick} />
    },
    {
      nome:'Conhecimentos',
      icone: 'https://66.media.tumblr.com/49ed6c0ebac47753e08e85c230d97d03/tumblr_odqaag4zd41vgs7gco2_75sq.png',
      conteudo: <Conhecimentos />
    },
    {
      nome:'Formação & Experiências',
      icone: 'https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png',
      conteudo: <Formacao></Formacao>
    },
    {
      nome:'@Sobre',
      icone: 'https://67.media.tumblr.com/f269281536842a64ec1a35479ca8fdd3/tumblr_odqaag4zd41vgs7gco5_75sq.png',
      conteudo: <Sobre />
    },
    {
      nome:'404',
      icone: 'https://64.media.tumblr.com/7b1a9eb3789efa0e5570c62db6484d0e/tumblr_prx9qfzCdv1ubqz06_540.gifv',
      conteudo: <QuatrozeroQuatro />
    }
  ]

  function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele.nome != value.nome; 
    });
  }

  const exibirStart = () => {
    let temp = document.getElementById("start-menu")
    if (temp.style.display==='none') {
      temp.style.display='block'
      setStart('block')
    }
    else {
      temp.style.display='none'
      setStart('none')
    }
  }

  function handleClick(value) { 
    setJanelas( janelas.concat([value]) )
  }

  return (
    <AreadeTrabalho id="area-de-trabalho">

      <Icones>
        {artigos.map((artigo, index) => {

          return (
            <Icone key={artigo.nome+'-icone'}
            onClick={
              () => {
                if (janelas.filter(j => j.nome === artigo.nome).length > 0) {
                  let temp = arrayRemove(janelas, artigo)
                  setJanelas( temp.concat([artigo]) )
                }
                else {
                  setJanelas( janelas.concat([artigo]) )
                }
              }
            }>
              <img src={artigo.icone} alt="" />
              <p>{artigo.nome}</p>
            </Icone>
          )
        })}
      </Icones>

      <BarradeTarefas>
        <a className="start-btn" href="#0" 
        onClick={exibirStart}>Iniciar</a>
        
        <div className="relogio">
          16:20PM
        </div>
        <StartMenu id="start-menu" style={{display: 'none'}}>
          <div className="title-container">
            <div className="title">Ricardo<span>98</span></div>
          </div>
          <ul>
            <li key='update' className="windows-update">Windows Update</li>
            <hr />
            {artigos.map((artigo, index) => {
              return (
                <li key={artigo.nome}
                style={{backgroundImage: `url(${artigo.icone})`}}
                onClick={
                  () => {
                    if (janelas.filter(j => j.nome === artigo.nome).length > 0) {
                      let temp = arrayRemove(janelas, artigo)
                      setJanelas( temp.concat([artigo]) )
                    }
                    else {
                      setJanelas( janelas.concat([artigo]) )
                    }
                }}>
                  {artigo.nome}
                </li>
              )
            })}
            <hr />
            <li key='logoff' className="log-off ok">Sair</li>
            <li key='shutdown' className="shut-down ok">Desligar...</li>
          </ul>
        </StartMenu>
      </BarradeTarefas>
      
      {janelas.map((artigo, index) => {
        return (
          <Janela key={artigo.nome}
          artigo={artigo}
          fechar={
            () => { setJanelas(arrayRemove(janelas, artigo)) }
          }
          focar={
            () => { 
              let temp = arrayRemove(janelas, artigo)
              setJanelas( temp.concat([artigo]) )
            }
          }
          />
        )
      })}

    </AreadeTrabalho>
  )
}
