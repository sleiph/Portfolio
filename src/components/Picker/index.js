import { useRef } from 'react';
import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { theme } from '../../../pages/_app';
import styles from './Picker.module.css';
import configStyles from '../Config/Config.module.css';
import stylesJanela from '../Janela/Janela.module.css';
import { CORES } from '../../dados/cores';

export default function Picker(propriedades) {

    const router = useRouter();
    const nodeRef = useRef('picker' + propriedades.caminho);

    const nomeRota = 'picker' + propriedades.caminho;

    const executaContextualmente = (cor, contexto) => {
      if (contexto === 'background')
        return mudaCorBackground(cor);
      else if (contexto === 'titulos')
        return mudaCorTitulo(cor);
      else if (contexto === 'janelas')
        return mudaCorFundo(cor);
      else
        console.error("contexto do picker não identificado");
    }

    const mudaCorBackground = (hex) => {
        theme.desktop.fundo = hex;
        document.documentElement.style.setProperty('--fundo', hex);
    }
    const mudaCorTitulo = (hex) => {
        theme.desktop.titulo_janela = hex;
        document.documentElement.style.setProperty('--titulo_janela', hex);
    }

    const mudaCorFundo = (hex) => {
        theme.desktop.fundo_janela = hex;
        document.documentElement.style.setProperty('--fundo_janela', hex);
    }

    //todo: tem uma funcao igual na janela/index.js
    const fecharJanela = () => {
        let caminho = router.asPath.replace('/' + nomeRota, '');
        if (caminho === '')
            caminho = '/home';
        router.replace(`${caminho}`);
    }

    //todo: tem uma funcao igual na janela/index.js
    const ordenaJanela = () => {
        var caminho = router.asPath;
        caminho = caminho.replace('/' + nomeRota, '');
        caminho += '/' + nomeRota;
        router.push(`${caminho}`);
    }

    return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <div className={stylesJanela.janeladiv} id='picker' ref={nodeRef} >
          
        <div className={stylesJanela.titulodiv + ' head'}>
          <div className={stylesJanela.icone}>
            <img src='/img/config.png' alt="icone do picker de cores" />
          </div>
          <div className={stylesJanela.fechar + " fechar"}>
            <button onClick={fecharJanela}>
              &#10006;
            </button>
          </div>
          <div className={stylesJanela.titulo} onClick={ordenaJanela}>
            Cores de {propriedades.contexto}
          </div>
        </div>

        <div className={configStyles.conteudodiv}>
          <div className={configStyles.campodiv} >
            <h5>Cores de {propriedades.contexto}:</h5>

            <div id={styles.gridpicker + propriedades.caminho} className={styles.gridpicker}>
                {CORES.map((cor) => {
                    return (
                        <div key={'picker_' + propriedades.caminho + cor} className={styles.cor} style={{backgroundColor: '#'+cor}} onClick={() => executaContextualmente('#'+cor, propriedades.contexto)}></div>
                    )
                })}
            </div>

          </div>
        </div>

      </div>
    </Draggable>
  )
}
