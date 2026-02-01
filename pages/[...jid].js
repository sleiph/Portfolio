import { useState } from 'react';
import { useRouter } from 'next/router';

import stylesArea from '../src/components/AreadeTrabalho.module.css';
import stylesArtigo from '../src/components/Artigos/Artigo.module.css';
/* TODO: achar um jeito de passar isso pro arquivo de dados */
/*import DB from '../src/dados/db.json';*/

import BTarefas from '../src/components/BTarefas';
import Icones from '../src/components/Icones';
import Janela from '../src/components/Janela';
import Projetos from '../src/components/Artigos/Projetos';
import Conhecimentos from '../src/components/Artigos/Conhecimentos';
import Desenhos from '../src/components/Artigos/Desenhos';
import Formacao from '../src/components/Artigos/Formacao';
import Sobre from '../src/components/Artigos/Sobre';
import Lixeira from '../src/components/Artigos/Lixeira';

const AreaTrabalho = () => {
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
    8: '/img/icn/huehuebr.gif',
    9: '/img/icn/spook.gif',
    10: '/img/ajuda.png',
    11: '/img/icn/spohoho.gif',
  }
  const mes = new Date().getMonth();

  const posts = {
    projetos: {
      nome:'projetos',
      icone: '/img/pasta.png',
      conteudo: <Projetos />,
      isRaiz: true
    },
    conhecimentos: {
      nome:'conhecimentos',
      icone: '/img/janela.png',
      conteudo: <Conhecimentos />,
      isRaiz: true
    },
    desenhos: {
      nome:'desenhos',
      icone: '/img/icn/paint.png',
      conteudo: <Desenhos  />,
      isRaiz: false
    },
    formacao: {
      nome:'formacao',
      icone: '/img/doc.png',
      conteudo: <Formacao />,
      isRaiz: true
    },
    contatos: {
      nome:'contatos',
      icone: iconeContato[mes],
      conteudo: <Sobre />,
      isRaiz: true
    },
    nedankinde: {
      nome: 'nedankinde',
      icone: '/img/dsn/nedankinde.png',
      conteudo: <img src='/img/dsn/nedankinde.png' />,
      isRaiz: false
    },
    mutarelli: {
      nome: 'mutarelli',
      icone: '/img/dsn/mutarelli.jpg',
      conteudo:
      <a href='https://www.behance.net/gallery/59384263/Quero-ser-Lourenco-Mutarelli'>
        <img src='/img/dsn/mutarelli.jpg' />
      </a>,
      isRaiz: false
    },
    h2: {
      nome: 'h2',
      icone: '/img/dsn/h2.jpg',
      conteudo: <img src='/img/dsn/h2.jpg' />,
      isRaiz: false
    },
    vikings: {
      nome: 'vikings',
      icone: '/img/dsn/vikings.jpg',
      conteudo: 
      <a href='https://www.deviantart.com/sleiph/art/Vikings-605260538'>
        <img src='/img/dsn/vikings.jpg' />
      </a>,
      isRaiz: false
    },
    daytona: {
      nome: 'daytona',
      icone: '/img/dsn/daytona.png',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Daytona-845558314'>
        <img src='/img/dsn/daytona.png' />
      </a>,
      isRaiz: false
    },
    iguacu: {
      nome: 'iguacu',
      icone: '/img/dsn/iguacu.jpg',
      conteudo: 
      <a href='https://www.artstation.com/artwork/YdaEK'>
        <img src='/img/dsn/iguacu.jpg' />
      </a>,
      isRaiz: false
    },
    lupus: {
      nome: 'lupus',
      icone: '/img/dsn/lupus.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Lupus-dei-606614577'>
        <img src='/img/dsn/lupus.jpg' />
      </a>,
      isRaiz: false
    },
    caliban: {
      nome: 'caliban',
      icone: '/img/dsn/caliban.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Dreadful-Caliban-482397424'>
        <img src='/img/dsn/caliban.jpg' />
      </a>,
      isRaiz: false
    },
    thomassons: {
      nome: 'thomassons',
      icone: '/img/dsn/thomassons.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Thomassons-483662972'>
        <img src='/img/dsn/thomassons.jpg' />
      </a>,
      isRaiz: false
    },
    expressionist: {
      nome: 'expressionist',
      icone: '/img/dsn/expressionist.jpg',
      conteudo:
      <a href='https://www.deviantart.com/sleiph/art/Expressionist-482396606'>
        <img src='/img/dsn/expressionist.jpg' />
      </a>,
      isRaiz: false
    },
    bitsMarseilles: {
      nome: 'bitsMarseilles',
      icone: '/img//icn/paint.png',
      conteudo:
      <a href='https://dribbble.com/shots/16692392-Paus-de-Marseilles'>
        <img src='https://cdn.dribbble.com/users/1016047/screenshots/16692392/media/75bfc073d531286106202a5159774830.png?compress=1&resize=1200x900' alt='tarot de Marseilles' />
      </a>,
      isRaiz: false
    },
    php: {
      nome:'php',
      icone: '/img/icn/php.png',
      conteudo: <a href="https://www.reddit.com/r/PHP/comments/1fy71s/why_do_so_many_developers_hate_php/">
        <img src="/img/php.jpeg" alt="meme de php" />
      </a>,
      isRaiz: false
    },
    config: {
      nome: 'config',
      icone: '/img/config.png',
      conteudo: <></>,
      isRaiz: true
    },
    picker: {
      nome: 'picker',
      icone: '/img/config.png',
      conteudo: <></>,
      isRaiz: false
    },
    lixeira: {
      nome: 'lixeira',
      icone: '/img/icn/lixeira-cheia.png',
      conteudo: <Lixeira />,
      isRaiz: true
    },
    design: {
      nome:'design',
      icone: '/img/icn/paint.png',
      conteudo:<div className={stylesArtigo.descricaodiv}>
        <h3>Design impresso e digital</h3>
        <br></br>
        <p>7 anos de experiência desenvolvendo websites, ícones, landingpages e outros produtos digitais. Também livros, jornais, todo tipo de mídia impressa.</p>
      </div>,
      isRaiz: false
    },
    elinduxusEstagiario: {
      nome:'elinduxusEstagiario',
      icone: '/img/doc.png',
      conteudo:<div className={stylesArtigo.descricaodiv}>
        <a href="https://www.duxus.com.br"><h3>Élin Duxus - Estagiário</h3></a>
        <br></br>
        <p>Desenvolvimento e Manutenção de aplicações Java de risco bancário. Criação de testes, refatoração de código, backend, frontend, banco de dados, tudo que é problema.</p>
      </div>,
      isRaiz: false
    },
    elinduxusJunior:{
      nome:'elinduxusJunior',
      icone: '/img/doc.png',
      conteudo:<div className={stylesArtigo.descricaodiv}>
        <a href="https://www.duxus.com.br"><h3>Élin Duxus - Programador Júnior</h3></a>
        <br></br>
        <p>Desenvolvimento e Manutenção de aplicações Java de risco bancário. Criação de testes, refatoração de código, backend, frontend, banco de dados, o mesmo que eu fazia como estagiário, mas agora 8 horas por dia.</p>
      </div>,
      isRaiz: false
    }
  };

  return (
    <main id='area-de-trabalho' className={stylesArea.areadetrabalhomain} >
      <BTarefas artigos={posts} start={start} setStart={setStart} />

      <Icones janelas={posts} />

      {
        (jid !== undefined) ?
        jid.map((artigo) => {
          return (
            <Janela key={artigo}
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

export default AreaTrabalho;
