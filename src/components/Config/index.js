import { useRouter } from 'next/router';
import styles from './Config.module.css';
import Draggable from 'react-draggable';
import { useRef } from 'react';

import { theme } from '../../../pages/_app';
import stylesJanela from '../Janela/Janela.module.css';

export default function Config(  ) {

  const router = useRouter();
  const nodeRef = useRef(null);

  const getHexAleatorio = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  const getHexClaroAleatorio = () => function lol(m, s, c) {
    return s[m.floor(m.random() * s.length)] + (c && lol(m, s, c - 1));
  }

  const corBackgroundAleatoria = () => {
    const hex = getHexAleatorio();
    document.getElementById("area-de-trabalho").style.background = hex;
  }

  const corJanelaAleatoria = () => {
    let hex = getHexAleatorio();
    theme.desktop.titulo_janela = hex;

    let titulos = document.getElementsByClassName('head');
    for(let i = 0; i < titulos.length; i++){
      titulos[i].style.background = hex;
    }
  }

  const corJanelaFundoAleatoria = () => {
    let hex = '#' + getHexClaroAleatorio()(Math, '3456789ABCDEF', 4);
    theme.desktop.fundo_janela = hex;

    let corpos = document.getElementsByClassName('conteudo');
    for(var i = 0; i < corpos.length; i++) {
      corpos[i].style.background = hex;
    }
  }

  const resetarCores = () => {
    theme.desktop.titulo_janela = '#01007A';
    theme.desktop.fundo_janela = 'white';
    document.getElementById("area-de-trabalho").style.background = theme.desktop.fundo;

    let titulos = document.getElementsByClassName('head');
    for(var i = 0; i < titulos.length; i++) {
      titulos[i].style.backgroundColor = theme.desktop.titulo_janela;
    }

    let corpos = document.getElementsByClassName('conteudo');
    for(var i = 0; i < corpos.length; i++) {
      corpos[i].style.background = theme.desktop.fundo_janela;
    }
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

  //todo: tem uma funcao igual na janela/index.js
  const fecharJanela = () => {
    let caminho = router.asPath.replace('/config', '');
    if (caminho === '')
      caminho = '/home';
    router.replace(`${caminho}`);
  }

  //todo: tem uma funcao igual na janela/index.js
  const ordenaJanela = () => {
    var caminho = router.asPath;
    caminho = caminho.replace('/config', '');
    caminho += '/config';
    router.push(`${caminho}`);
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
          <div className={stylesJanela.fechar}>
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
            <a className={styles.botaoa} onClick={corBackgroundAleatoria}>
              Mudar a cor do plano de fundo
            </a>
            <a className={styles.botaoa} onClick={resetarCores}>
              Resetar todas as cores
            </a>
          </div>
          <div className={styles.campodiv} >
            <h5>Janelas</h5>
            <a className={styles.botaoa} onClick={corJanelaAleatoria}>
              Mudar a cor da barra de título
            </a>
            <a className={styles.botaoa} onClick={corJanelaFundoAleatoria}>
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
