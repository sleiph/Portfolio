import React, { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import styled from 'styled-components';

import {BarradeTarefas, StartMenu} from '../src/components/BarradeTarefas';
import { Descricao } from '../src/components/Artigos';
//import DB from '../src/dados/db.json';

import Janela from '../src/components/Janela';
import Projetos from '../src/components/Artigos/Projetos';
import Conhecimentos from '../src/components/Artigos/Conhecimentos';
import Desenhos from '../src/components/Artigos/Desenhos';
import Formacao from '../src/components/Artigos/Formacao';
import Sobre from '../src/components/Artigos/Sobre';
import QuatrozeroQuatro from '../src/components/Artigos/404';
import Config from '../src/components/Config';
import Lixeira from '../src/components/Artigos/Lixeira';


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
  cursor: pointer;

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

//TODO: usar um mapa
function acharPost(arr, nome) {
  return arr.find(function(post) {
    if (post.nome == nome) {
      return true
    }
  })
}

function BTarefas(propriedades) {

  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 15000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <BarradeTarefas>
      <a className="start-btn" onClick={
        () => {
          propriedades.setStart(!propriedades.start)
        }
      }>
        Iniciar
      </a>
        
      <div className="relogio">
        {hora.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>

      {propriedades.start ?
      <StartMenu id="start-menu">
        <div id='start-menu-titulo' className="title-container">
          <div className="title" style={{
            top: (42*7) + 'px'
          }}>
            Ricardo<span>98</span>
          </div>
        </div>
        <ul>
          {propriedades.artigos.map((artigo) => {
            if (artigo.isRaiz) {
              return (
                <li key={artigo.nome}
                style={{backgroundImage: `url(${artigo.icone})`}}
                onClick={
                  () => {
                    propriedades.setStart(!propriedades.start)
                    var caminho = router.asPath
                    if (caminho === '/home') {
                      caminho = artigo.nome
                    }
                    else {
                      caminho = caminho.replace('/' + artigo.nome, '')
                      caminho += '/' + artigo.nome
                    }
                    router.push(`${caminho}`)
                  }
                }>
                  {artigo.nome}
                </li>
              )
            }
          })}
          <hr />
          <a href='https://pt.wikipedia.org/wiki/Special:Random'>
            <li key='shutdown' className="shut-down ok">
              Sair
            </li>
          </a>
        </ul>
      </StartMenu>
      : <></>
      }
    </BarradeTarefas>
  )
}

function Icns(propriedades) {
  return (
    <Icones>
      {propriedades.janelas.map((artigo) => {
        if (artigo.isRaiz)
          return (
            <Icone key={artigo.nome+'-icone'}
            onClick={
              () => {
                var caminho = router.asPath
                if (caminho.split('?')[0] === '/home') {
                  caminho = artigo.nome
                }
                else {
                  caminho = caminho.replace('/' + artigo.nome, '')
                  caminho += '/' + artigo.nome
                }
                router.push(`${caminho}`)
              }
            }>
              <img src={artigo.icone} alt="" />
              <p>{artigo.nome}</p>
            </Icone>
          )
      })}
    </Icones>
  )
}

function Jnla(propriedades) {
  if (propriedades.id === 'home')
    return <></>
  else if (propriedades.id === 'config')
    return <Config />
  var poste = acharPost(propriedades.janelas, propriedades.id)
  return (poste !== undefined) ?
  <Janela artigo={poste} />
  :
  <Janela
    artigo={
      {
        nome: propriedades.id,
        icone: 'https://64.media.tumblr.com/7b1a9eb3789efa0e5570c62db6484d0e/tumblr_prx9qfzCdv1ubqz06_540.gifv',
        conteudo: <QuatrozeroQuatro />
      }
    }
  />
}

const Post = () => {
  const router = useRouter()
  const { jid } = router.query

  const [start, setStart] = useState(false)

  const posts = [ 
    {
      nome:'projetos',
      icone: 'https://66.media.tumblr.com/2d4a1593f0a13df6d507304708e11a7f/tumblr_odqaag4zd41vgs7gco1_75sq.png',
      conteudo: <Projetos />,
      isRaiz: true
    },
    {
      nome:'conhecimentos',
      icone: 'https://66.media.tumblr.com/49ed6c0ebac47753e08e85c230d97d03/tumblr_odqaag4zd41vgs7gco2_75sq.png',
      conteudo: <Conhecimentos />,
      isRaiz: true
    },
    {
      nome:'desenhos',
      icone: '/img/paint.png',
      conteudo: <Desenhos  />,
      isRaiz: false
    },
    {
      nome:'formacao',
      icone: 'https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png',
      conteudo: <Formacao />,
      isRaiz: true
    },
    {
      nome:'contatos',
      icone: 'https://67.media.tumblr.com/f269281536842a64ec1a35479ca8fdd3/tumblr_odqaag4zd41vgs7gco5_75sq.png',
      conteudo: <Sobre />,
      isRaiz: true
    },
    {
      nome: 'nedankinde',
      icone: '/img/nedankinde.png',
      conteudo: <img src='/img/nedankinde.png' />,
      isRaiz: false
    },
    {
      nome: 'mutarelli',
      icone: '/img/mutarelli.jpg',
      conteudo:
      <a href='https://www.behance.net/gallery/59384263/Quero-ser-Lourenco-Mutarelli'>
        <img src='/img/mutarelli.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'h2',
      icone: '/img/h2.jpg',
      conteudo: <img src='/img/h2.jpg' />,
      isRaiz: false
    },
    {
      nome: 'vikings',
      icone: '/img/vikings.jpg',
      conteudo: 
      <a href='https://www.deviantart.com/sleiph/art/Vikings-605260538'>
        <img src='/img/vikings.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'daytona',
      icone: '/img/daytona.png',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Daytona-845558314'>
        <img src='/img/daytona.png' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'iguacu',
      icone: '/img/iguacu.jpg',
      conteudo: 
      <a href='https://www.artstation.com/artwork/YdaEK'>
        <img src='/img/iguacu.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'lupus',
      icone: '/img/lupus.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Lupus-dei-606614577'>
        <img src='/img/lupus.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'caliban',
      icone: '/img/caliban.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Dreadful-Caliban-482397424'>
        <img src='/img/caliban.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'thomassons',
      icone: '/img/thomassons.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Thomassons-483662972'>
        <img src='/img/thomassons.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'expressionist',
      icone: '/img/expressionist.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Expressionist-482396606'>
        <img src='/img/expressionist.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: '64bitsMarseilles',
      icone: '/img/paint.png',
      conteudo:
      <a href='https://dribbble.com/shots/16692392-Paus-de-Marseilles'>
        <img src='https://cdn.dribbble.com/users/1016047/screenshots/16692392/media/75bfc073d531286106202a5159774830.png?compress=1&resize=1200x900' alt='tarot de Marseilles' />
      </a>,
      isRaiz: false
    },
    {
      nome:'php',
      icone: '/img/php.png',
      conteudo: <a href="https://www.reddit.com/r/PHP/comments/1fy71s/why_do_so_many_developers_hate_php/">
        <img src="https://i.imgur.com/eXi1Ld0.jpeg" alt="meme de php" />
      </a>,
      isRaiz: false
    },
    {
      nome: 'config',
      icone: 'https://66.media.tumblr.com/83833fe1b6ac3b482a89ff02aad3ed15/tumblr_odqaag4zd41vgs7gco9_75sq.png',
      conteudo: <></>,
      isRaiz: true
    },
    {
      nome: 'lixeira',
      icone: '/img/lixeira-cheia.png',
      conteudo: <Lixeira />,
      isRaiz: true
    },
    {
      nome:'design',
      icone: '/img/paint.png',
      conteudo:<Descricao>
        <h3>Design impresso e digital</h3>
        <br></br>
        <p>7 anos de experiência desenvolvendo websites, ícones, landingpages e outros produtos digitais. Também livros, jornais, todo tipo de mídia impressa.</p>
      </Descricao>,
      isRaiz: false
    },
    {
      nome:'elinduxus-estagiario',
      icone: 'https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png',
      conteudo:<Descricao>
        <a href="https://www.duxus.com.br"><h3>Élin Duxus - Estagiário</h3></a>
        <br></br>
        <p>Desenvolvimento e Manutenção de aplicações Java de risco bancário. Criação de testes, refatoração de código, backend, frontend, banco de dados, tudo que é problema.</p>
      </Descricao>,
      isRaiz: false
    },
    {
      nome:'elinduxus-junior',
      icone: 'https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png',
      conteudo:<Descricao>
        <a href="https://www.duxus.com.br"><h3>Élin Duxus - Programador Júnior</h3></a>
        <br></br>
        <p>Desenvolvimento e Manutenção de aplicações Java de risco bancário. Criação de testes, refatoração de código, backend, frontend, banco de dados, o mesmo que eu fazia como estagiário, mas agora 8 horas por dia.</p>
      </Descricao>,
      isRaiz: false
    }
  ]

  return (
    <AreadeTrabalho id='area-de-trabalho'>
      <BTarefas artigos={posts} start={start} setStart={setStart} />

      <Icns janelas={posts} />

      {
        (jid !== undefined) ?
        jid.map((artigo) => {
          return (
            <Jnla key={artigo}
              janelas={posts}
              id={ artigo }
            />
          )
        })
        : <></>
      }
      
    </AreadeTrabalho>
  )
}

export default Post
