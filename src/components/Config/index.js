import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { useRef } from 'react';
import { theme } from '../../../pages/_app';

import styles from './Config.module.css';
import stylesJanela from '../Janela/Janela.module.css';
import { janelaService } from '../../services/janelaService';

export default function Config(  ) {

  const router = useRouter();
  const nodeRef = useRef('config');

  const resetarCores = () => {
    theme.desktop.titulo_janela = '#01007A';
    theme.desktop.fundo_janela = 'white';
    theme.desktop.fundo = '#008080';
    document.documentElement.style.setProperty('--titulo_janela', '#01007A');
    document.documentElement.style.setProperty('--fundo_janela', 'white');
    document.documentElement.style.setProperty('--fundo', '#008080');
  }

  const fecharTodasJanelas = () => {
    router.replace('/home')
  }

  const tocarMusiquinha = () => {
    var musiquinha = new Audio('/snd/startup.wav')
    musiquinha.play()
  }

  const boraPraWikipedia = () => {
    window.location.href='https://pt.wikipedia.org/wiki/Special:Random'
  }

  const fecharJanela = () => {
    janelaService.fecharJanela(router, 'config');
  }

  const ordenaJanela = () => {
    janelaService.ordenaJanela(router, 'config');
  }

  const mudarTamanhoTexto = () => {
    const tamanhosTexto = ['small', 'medium', 'x-large', 'xx-large'];
    const tamanhoAtual = theme.desktop.titulo_size;
    const atual = tamanhosTexto.indexOf(tamanhoAtual);
    const proximo = (atual + 1) % tamanhosTexto.length;
    const novoTamanho = tamanhosTexto[proximo];
    
    theme.desktop.titulo_size = novoTamanho;
    document.documentElement.style.setProperty('--titulo_size', novoTamanho);

    if (tamanhoAtual == 'xx-large') {
      theme.desktop.text_size = 'x-small';
      document.documentElement.style.setProperty('--text_size', 'x-small');
    } else {
      theme.desktop.text_size = tamanhoAtual;
      document.documentElement.style.setProperty('--text_size', tamanhoAtual);
    }
  }
  
  return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <div className={stylesJanela.janeladiv} id='config' ref={nodeRef} >
          
        <div className={stylesJanela.titulodiv + ' head'}>
          <div className={stylesJanela.icone}>
            <img src='/img/config.png' alt="icone das configuracoes" />
          </div>
          <div className={stylesJanela.fechar + " fechar"}>
            <button onClick={fecharJanela}>
              &#10006;
            </button>
          </div>
          <div className={stylesJanela.titulo} onClick={ordenaJanela}>
            Configurações
          </div>
        </div>

        <div className={styles.conteudodiv}>
          <img id={styles.imgsys} src='/img/win98.png' />
          <div className={styles.campodiv} >
            <h5>Estilos</h5>
            <a className={styles.botaoa} onClick={() => janelaService.abrirPicker(router, 'bg')}>
              Mudar a cor do plano de fundo
            </a>
            <a className={styles.botaoa} onClick={mudarTamanhoTexto}>
              Mudar tamanho do texto
            </a>
            <a className={styles.botaoa} onClick={resetarCores}>
              Resetar todas as cores
            </a>
          </div>
          <div className={styles.campodiv} >
            <h5>Janelas</h5>
            <a className={styles.botaoa} onClick={() => janelaService.abrirPicker(router, 'bt')}>
              Mudar a cor da barra de título
            </a>
            <a className={styles.botaoa} onClick={() => janelaService.abrirPicker(router, 'ft')}>
              Mudar a cor de fundo
            </a>
            <a className={styles.botaoa} onClick={fecharTodasJanelas}>
              Fechar todas as janelas
            </a>
          </div>
          <div className={styles.campodiv} >
            <h5>Sistema</h5>
            <a className={styles.botaoa} onClick={tocarMusiquinha}>
              Tocar uma musiquinha
            </a>
            <a className={styles.botaoa} onClick={boraPraWikipedia}>
              Sair
            </a>
          </div>
        </div>

      </div>
    </Draggable>
  )
}
