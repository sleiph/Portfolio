import { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { theme } from './_app';

import stylesArea from '../src/components/AreadeTrabalho.module.css';
import stylesBarra from '../src/components/BarradeTarefas.module.css';
import stylesArtigo from '../src/components/Artigos/Artigo.module.css';
/* TODO: achar um jeito de passar isso pro arquivo de dados */
/*import DB from '../src/dados/db.json';*/

import Janela from '../src/components/Janela';
import Projetos from '../src/components/Artigos/Projetos';
import Conhecimentos from '../src/components/Artigos/Conhecimentos';
import Desenhos from '../src/components/Artigos/Desenhos';
import Formacao from '../src/components/Artigos/Formacao';
import Sobre from '../src/components/Artigos/Sobre';
import QuatrozeroQuatro from '../src/components/Artigos/404';
import Config from '../src/components/Config';
import Lixeira from '../src/components/Artigos/Lixeira';

//TODO: usar um mapa
function acharPost(arr, nome) {
  return arr.find(function(post) {
    if (post.nome == nome) {
      return true
    }
  })
}

/**
 * TODO: mover pra um componente separado
 * @param {*} propriedades 
 * @returns 
 */
function BTarefas(propriedades) {

  const [hora, setHora] = useState(new Date());

  const corJanela = {background: theme.desktop.janela};
  const corTituloJanela = {background: theme.desktop.titulo_janela};

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 15000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={stylesBarra.barradetarefasdiv} style={corJanela}>
      <a className={stylesBarra.startbtn} style={corJanela} onClick={
        () => {
          propriedades.setStart(!propriedades.start)
        }
      }>
        Iniciar
      </a>
        
      <div className={stylesBarra.relogio}>
        {hora.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>

      {propriedades.start ?
      <div className={stylesBarra.startmenudiv} id="start-menu" style={corJanela}>
        <div id='start-menu-titulo' className={stylesBarra.titlecontainer} style={corTituloJanela}>
          <div className={stylesBarra.titlecontainertitle} style={{top: (42*7) + 'px'}}>
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
      </div>
      : <></>
      }
    </div>
  )
}

function Icns(propriedades) {
  return (
    <div className={stylesArea.iconesdiv}>
      {propriedades.janelas.map((artigo) => {
        if (artigo.isRaiz)
          return (
            <div key={artigo.nome+'-icone'} className={stylesArea.iconediv}
            onClick={
              () => {
                let caminho = router.asPath;
                if (caminho.split('?')[0] === '/home') {
                  caminho = artigo.nome;
                }
                else {
                  caminho = caminho.replace('/' + artigo.nome, '');
                  caminho += '/' + artigo.nome;
                }
                router.push(`${caminho}`);
              }
            }>
              <img src={artigo.icone} alt="" />
              <p>{artigo.nome}</p>
            </div>
          )
      })}
    </div>
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
        icone: '/img/icn/lixeira-cheia.png',
        conteudo: <QuatrozeroQuatro />
      }
    }
  />
}

const Post = () => {
  const router = useRouter();
  const { jid } = router.query;

  const [start, setStart] = useState(false);

  const iconeContato = {
    0: '/img/ajuda.png',
    1: '/img/ajuda.png',
    2: '/img/ajuda.png',
    3: '/img/ajuda.png',
    4: '/img/ajuda.png',
    5: '/img/ajuda.png',
    6: '/img/ajuda.png',
    7: '/img/ajuda.png',
    8: '/img/ajuda.png',
    9: '/img/icn/spook.gif',
    10: '/img/ajuda.png',
    11: '/img/icn/spohoho.gif',
  }
  const mes = new Date().getMonth();

  const posts = [
    {
      nome:'projetos',
      icone: '/img/pasta.png',
      conteudo: <Projetos />,
      isRaiz: true
    },
    {
      nome:'conhecimentos',
      icone: '/img/janela.png',
      conteudo: <Conhecimentos />,
      isRaiz: true
    },
    {
      nome:'desenhos',
      icone: '/img/icn/paint.png',
      conteudo: <Desenhos  />,
      isRaiz: false
    },
    {
      nome:'formacao',
      icone: '/img/doc.png',
      conteudo: <Formacao />,
      isRaiz: true
    },
    {
      nome:'contatos',
      icone: iconeContato[mes],
      conteudo: <Sobre />,
      isRaiz: true
    },
    {
      nome: 'nedankinde',
      icone: '/img/dsn/nedankinde.png',
      conteudo: <img src='/img/dsn/nedankinde.png' />,
      isRaiz: false
    },
    {
      nome: 'mutarelli',
      icone: '/img/dsn/mutarelli.jpg',
      conteudo:
      <a href='https://www.behance.net/gallery/59384263/Quero-ser-Lourenco-Mutarelli'>
        <img src='/img/dsn/mutarelli.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'h2',
      icone: '/img/dsn/h2.jpg',
      conteudo: <img src='/img/dsn/h2.jpg' />,
      isRaiz: false
    },
    {
      nome: 'vikings',
      icone: '/img/dsn/vikings.jpg',
      conteudo: 
      <a href='https://www.deviantart.com/sleiph/art/Vikings-605260538'>
        <img src='/img/dsn/vikings.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'daytona',
      icone: '/img/dsn/daytona.png',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Daytona-845558314'>
        <img src='/img/dsn/daytona.png' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'iguacu',
      icone: '/img/dsn/iguacu.jpg',
      conteudo: 
      <a href='https://www.artstation.com/artwork/YdaEK'>
        <img src='/img/dsn/iguacu.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'lupus',
      icone: '/img/dsn/lupus.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Lupus-dei-606614577'>
        <img src='/img/dsn/lupus.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'caliban',
      icone: '/img/dsn/caliban.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Dreadful-Caliban-482397424'>
        <img src='/img/dsn/caliban.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'thomassons',
      icone: '/img/dsn/thomassons.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Thomassons-483662972'>
        <img src='/img/dsn/thomassons.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: 'expressionist',
      icone: '/img/dsn/expressionist.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Expressionist-482396606'>
        <img src='/img/dsn/expressionist.jpg' />
      </a>,
      isRaiz: false
    },
    {
      nome: '64bitsMarseilles',
      icone: '/img//icn/paint.png',
      conteudo:
      <a href='https://dribbble.com/shots/16692392-Paus-de-Marseilles'>
        <img src='https://cdn.dribbble.com/users/1016047/screenshots/16692392/media/75bfc073d531286106202a5159774830.png?compress=1&resize=1200x900' alt='tarot de Marseilles' />
      </a>,
      isRaiz: false
    },
    {
      nome:'php',
      icone: '/img/icn/php.png',
      conteudo: <a href="https://www.reddit.com/r/PHP/comments/1fy71s/why_do_so_many_developers_hate_php/">
        <img src="/img/php.jpeg" alt="meme de php" />
      </a>,
      isRaiz: false
    },
    {
      nome: 'config',
      icone: '/img/config.png',
      conteudo: <></>,
      isRaiz: true
    },
    {
      nome: 'lixeira',
      icone: '/img/icn/lixeira-cheia.png',
      conteudo: <Lixeira />,
      isRaiz: true
    },
    {
      nome:'design',
      icone: '/img/icn/paint.png',
      conteudo:<div className={stylesArtigo.descricaodiv}>
        <h3>Design impresso e digital</h3>
        <br></br>
        <p>7 anos de experiência desenvolvendo websites, ícones, landingpages e outros produtos digitais. Também livros, jornais, todo tipo de mídia impressa.</p>
      </div>,
      isRaiz: false
    },
    {
      nome:'elinduxus-estagiario',
      icone: '/img/doc.png',
      conteudo:<div className={stylesArtigo.descricaodiv}>
        <a href="https://www.duxus.com.br"><h3>Élin Duxus - Estagiário</h3></a>
        <br></br>
        <p>Desenvolvimento e Manutenção de aplicações Java de risco bancário. Criação de testes, refatoração de código, backend, frontend, banco de dados, tudo que é problema.</p>
      </div>,
      isRaiz: false
    },
    {
      nome:'elinduxus-junior',
      icone: '/img/doc.png',
      conteudo:<div className={stylesArtigo.descricaodiv}>
        <a href="https://www.duxus.com.br"><h3>Élin Duxus - Programador Júnior</h3></a>
        <br></br>
        <p>Desenvolvimento e Manutenção de aplicações Java de risco bancário. Criação de testes, refatoração de código, backend, frontend, banco de dados, o mesmo que eu fazia como estagiário, mas agora 8 horas por dia.</p>
      </div>,
      isRaiz: false
    }
  ];

  const corFundo = {background: theme.desktop.fundo};

  return (
    <main id='area-de-trabalho' className={stylesArea.areadetrabalhomain} style={corFundo}>
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
      
    </main>
  )
}

export default Post
