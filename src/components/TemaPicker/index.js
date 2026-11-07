import { useRef } from 'react';
import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { tema } from '../../../pages/_app';
import styles from './TemaPicker.module.css';
import configStyles from '../Config/Config.module.css';
import stylesJanela from '../Janela/Janela.module.css';
import { TEMAS } from '../../dados/temas';
import { janelaService } from '../../services/janelaService';

export default function TemaPicker() {
  const router = useRouter();
  const nodeRef = useRef('temaPicker');

  const aplicarTema = (temaId) => {
    const temaMes = TEMAS[temaId];
    if (!temaMes)
      return;

    tema.desktop.titulo_janela = temaMes.cores.titulo_janela;
    tema.desktop.fundo_janela = temaMes.cores.fundo_janela;
    tema.desktop.fundo = temaMes.cores.fundo;
    tema.desktop.tema_atual = parseInt(temaId);

    document.documentElement.style.setProperty('--titulo_janela', temaMes.cores.titulo_janela);
    document.documentElement.style.setProperty('--fundo_janela', temaMes.cores.fundo_janela);
    document.documentElement.style.setProperty('--fundo', temaMes.cores.fundo);

    fecharJanela();
  };

  const fecharJanela = () => {
    janelaService.fecharJanela(router, 'pickertema');
  };

  const ordenaJanela = () => {
    janelaService.ordenaJanela(router, 'pickertema');
  };

  return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <div className={stylesJanela.janeladiv} id='pickertema' ref={nodeRef}>
        
        <div className={stylesJanela.titulodiv + ' head'}>
          <div className={stylesJanela.icone}>
            <img src='/img/config.png' alt="icone do picker de temas" />
          </div>
          <div className={stylesJanela.fechar + " fechar"}>
            <button onClick={fecharJanela}>
              &#10006;
            </button>
          </div>
          <div className={stylesJanela.titulo} onClick={ordenaJanela}>
            Temas
          </div>
        </div>

        <div className={configStyles.conteudodiv}>
          <div className={configStyles.campodiv}>
            <h5>Escolha um tema:</h5>

            <div className={styles.temasGrid}>
              {Object.entries(TEMAS).map(([id, tema]) => (
                <button
                  key={id}
                  className={styles.temaButton}
                  onClick={() => aplicarTema(id)}
                  title={tema.nome}
                >
                  <img src={tema.icone} alt={tema.nome} />
                  <span>{tema.nome}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </Draggable>
  );
}
