import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { useRef, useState, useEffect } from 'react';

import styles from './Janela.module.css';
import QuatrozeroQuatro from '../Artigos/404';
import Config from '../Config';
import Picker from '../Picker';
import { janelaService } from '../../services/janelaService';

function acharPost(obj, nome) {
  return obj[nome];
}

export default function Janela(propriedades) {

  if (propriedades.id === 'home')
    return <></>
  else if (propriedades.id === 'config')
    return <Config />
  else if (propriedades.id === 'pickerbg')
    return <Picker caminho='bg' contexto='background' />
  else if (propriedades.id === 'pickerbt')
    return <Picker caminho='bt' contexto = 'titulos'/>
  else if (propriedades.id === 'pickerft')
    return <Picker caminho='ft' contexto='janelas' />
  
  var post = acharPost(propriedades.janelas, propriedades.id);
  
  return (post !== undefined) ?
    <Artigo artigo={post} />
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

  const [offset, setOffset] = useState({ x: '-50%', y: '-50%' });

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      const maxW = window.innerWidth * 0.25;
      const maxH = window.innerHeight * 0.25;

      const randomX = (Math.random() - 0.5) * maxW;
      const randomY = (Math.random() - 0.5) * maxH;

      setOffset({
        x: `calc(-50% + ${randomX}px)`,
        y: `calc(-50% + ${randomY}px)`
      });
    }
  }, []);

  const fecharJanela = () =>  {
    janelaService.fecharJanela(router, artigo.nome);
  }

  const ordenaJanela = () => {
    janelaService.ordenaJanela(router, artigo.nome);
  }
  
  return (
    <Draggable
      handle=".head"
      positionOffset={offset}
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
