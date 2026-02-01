import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { useRef } from 'react';

import styles from './Janela.module.css';
import QuatrozeroQuatro from '../Artigos/404';
import Config from '../Config';
import Picker from '../Picker';

//TODO: usar um mapa
function acharPost(obj, nome) {
  return obj[nome];
}

export default function Janela(propriedades) {

  if (propriedades.id === 'home')
    return <></>
  else if (propriedades.id === 'config')
    return <Config />
  else if (propriedades.id === 'picker')
    return <Picker />
  
  var poste = acharPost(propriedades.janelas, propriedades.id);
  
  return (poste !== undefined) ?
    <Artigo artigo={poste} />
  :
    <Artigo
      artigo={
        {
          nome: propriedades.id,
          icone: '/img/icn/lixeira-cheia.png',
          conteudo: <QuatrozeroQuatro />
        }
      }
    />
}

function Artigo({ artigo }) {

  const router = useRouter();
  const nodeRef = useRef(null);

  const fecharJanela = () =>  {
    let caminho = router.asPath.replace('/' + artigo.nome, '');
    if (caminho === '')
      caminho = '/home';
    router.replace(`${caminho}`);
  }

  const ordenaJanela = () => {
    var caminho = router.asPath;
    caminho = caminho.replace('/' + artigo.nome, '');
    caminho += '/' + artigo.nome;
    router.push(`${caminho}`);
  }
  
  return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <div className={styles.janeladiv} id={ artigo.nome } ref={nodeRef}>
        
        <div className={styles.titulodiv + " head"}>
          <div className={styles.icone}>
            <img src={ artigo.icone } alt="icone do programa" />
          </div>
          <div className={styles.fechar + " fechar"}>
            <button onClick={fecharJanela}>
              &#10006;
            </button>
          </div>
          <div className={styles.titulo} onClick={ordenaJanela}>
            { artigo.nome }
          </div>
        </div>

        <div className={styles.conteudodiv + ' conteudo'}>
          { artigo.conteudo }
        </div>

      </div>
    </Draggable>
  )
}
