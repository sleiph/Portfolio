import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'

import { theme } from './_app'
import Projetos from '../src/components/Artigos/Projetos'
import Desenhos from '../src/components/Artigos/Desenhos'
import Conhecimentos from '../src/components/Artigos/Conhecimentos'
import Formacao from '../src/components/Artigos/Formacao'
import Sobre from '../src/components/Artigos/Sobre'
import QuatrozeroQuatro from '../src/components/Artigos/404'
import {BarradeTarefas, StartMenu} from '../src/components/BarradeTarefas'
import Janela from '../src/components/Janela'
import Config from '../src/components/Config'

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
      background-color: ${({ theme }) => theme.desktop.titulo_janela};
    }
  }
`

export default function Home() {
  const [janelas, setJanelas] = useState([])

  const [start, setStart] = useState(false)

  const [config, setConfig] = useState(false)

  const artigos = [
    {
      nome:'Projetos',
      icone: 'https://66.media.tumblr.com/2d4a1593f0a13df6d507304708e11a7f/tumblr_odqaag4zd41vgs7gco1_75sq.png',
      conteudo: <Projetos />
    },
    {
      nome:'Conhecimentos',
      icone: 'https://66.media.tumblr.com/49ed6c0ebac47753e08e85c230d97d03/tumblr_odqaag4zd41vgs7gco2_75sq.png',
      conteudo: <Conhecimentos />
    },
    {
      nome:'Uns desenhos aí',
      icone: './img/paint.png',
      conteudo: <Desenhos value={janelas} onClick={handleClick} />
    },
    {
      nome:'Formação & Certificados',
      icone: 'https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png',
      conteudo: <Formacao></Formacao>
    },
    {
      nome:'Contatos',
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
    setStart(!start)
  }

  function handleClick(value) {
    if (janelas.filter(j => j.nome === value.nome).length > 0) {
      let temp = arrayRemove(janelas, value)
      setJanelas( temp.concat([value]) )
    }
    else {
      setJanelas( janelas.concat([value]) )
    } 
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

        {start ? 
          <StartMenu id="start-menu">
            <div id='start-menu-titulo' className="title-container">
              <div className="title">Ricardo<span>98</span></div>
            </div>
            <ul>
              <li key='update' className="windows-update"
              onClick={
                () => {
                  let hex = '#' +  Math.random().toString(16).substr(-6)
                  document.getElementById("area-de-trabalho")
                  .style.background = hex
                }
              }
              >
                Windows Update
              </li>
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
              <li key='config' className="config ok"
              onClick={
                () => {
                  setConfig(!config)
                }
              }>
                Configurações
              </li>
              <a href='https://pt.wikipedia.org/wiki/Special:Random'>
                <li key='shutdown' className="shut-down ok">
                  Sair
                </li>
              </a>
            </ul>
          </StartMenu>
        : <div></div>
        }
        
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

      {
        config ?
        <Config fecharTudo={
          () => {
            setJanelas([])
            setConfig(false)
          }
        }
        corHead={
          () => {
            let hex = '#' +  Math.random().toString(16).substr(-6)
            theme.desktop.titulo_janela = hex
            var titulos = document.getElementsByClassName('head')
            for(var i = 0; i < titulos.length; i++){
              titulos[i].style.background = hex;
            }
          }
        }
        corCorpo={
          () => {
            var hex = '#' + (function lol(m, s, c) {
              return s[m.floor(m.random() * s.length)] +
                  (c && lol(m, s, c - 1));
            })(Math, '3456789ABCDEF', 4)
            theme.desktop.fundo_janela = hex
            var corpos = document.getElementsByClassName('conteudo')
            for(var i = 0; i < corpos.length; i++){
              corpos[i].style.background = hex;
            }
          }
        }
        resetarCores={
          () => {
            theme.desktop.titulo_janela = '#01007A'
            theme.desktop.fundo_janela = 'white'
            document.getElementById("area-de-trabalho")
                .style.background = theme.desktop.fundo
            var titulos = document.getElementsByClassName('head')
            for(var i = 0; i < titulos.length; i++){
              titulos[i].style.backgroundColor = theme.desktop.titulo_janela
            }
            var corpos = document.getElementsByClassName('conteudo')
            for(var i = 0; i < corpos.length; i++){
              corpos[i].style.background = theme.desktop.fundo_janela;
            }
          }
        }
        fechar={
          () => { setConfig(false) }
        }
        />
        : <div></div>
      }

    </AreadeTrabalho>
  )
}
