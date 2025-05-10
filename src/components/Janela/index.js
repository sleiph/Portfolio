import { useRouter } from 'next/router';
import { theme } from '../../../pages/_app';
import styles from './Janela.module.css';
import Draggable from 'react-draggable';
import { useRef } from 'react';

export default function Artigo({ artigo }) {

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

  const corJanela = {background: theme.desktop.janela};
  const corTituloJanela = {background: theme.desktop.titulo_janela};
  const corFundoJanela = {background: theme.desktop.fundo_janela};
  
  return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <div className={styles.janeladiv} id={ artigo.nome } ref={nodeRef} style={corJanela}>
        
        <div className={styles.titulodiv + " head"} style={corTituloJanela}>
          <div className={styles.icone}>
            <img src={ artigo.icone } alt="icone do programa" />
          </div>
          <div className={styles.fechar}>
            <button onClick={fecharJanela} style={corJanela}>
              &#10006;
            </button>
          </div>
          <div className={styles.titulo} onClick={ordenaJanela}>
            { artigo.nome }
          </div>
        </div>

        <div className={styles.conteudodiv + ' conteudo'} style={corFundoJanela}>
          { artigo.conteudo }
        </div>

      </div>
    </Draggable>
  )
}
