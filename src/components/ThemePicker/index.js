import { useRef } from 'react';
import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { theme } from '../../../pages/_app';
import styles from './ThemePicker.module.css';
import configStyles from '../Config/Config.module.css';
import stylesJanela from '../Janela/Janela.module.css';
import { TEMAS } from '../../dados/temas';

export default function ThemePicker() {
  const router = useRouter();
  const nodeRef = useRef('themePicker');

  const aplicarTema = (temaId) => {
    const tema = TEMAS[temaId];
    if (!tema) return;

    theme.desktop.titulo_janela = tema.cores.titulo_janela;
    theme.desktop.fundo_janela = tema.cores.fundo_janela;
    theme.desktop.fundo = tema.cores.fundo;

    document.documentElement.style.setProperty('--titulo_janela', tema.cores.titulo_janela);
    document.documentElement.style.setProperty('--fundo_janela', tema.cores.fundo_janela);
    document.documentElement.style.setProperty('--fundo', tema.cores.fundo);
  };

  const fecharJanela = () => {
    let caminho = router.asPath.replace('/pickertheme', '');
    if (caminho === '')
      caminho = '/home';
    router.replace(`${caminho}`);
  };

  const ordenaJanela = () => {
    var caminho = router.asPath;
    caminho = caminho.replace('/pickertheme', '');
    caminho += '/pickertheme';
    router.push(`${caminho}`);
  };

  return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <div className={stylesJanela.janeladiv} id='pickertheme' ref={nodeRef}>
        
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
