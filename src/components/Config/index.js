import { useRouter } from 'next/router';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { useRef } from 'react';

import { theme } from '../../../pages/_app';
import {Janela, Titulo} from '../Janela';

const Conteudo = styled.div`
  min-height: 208px;
  max-height: 80vh;
  width: 100%;
  clear: both;
  border-radius: 1px;
  overflow: auto;

  img {
    max-width:1080px;
  }
`

const ImgSys = styled.img`
  width: 180px;
  margin-top: 12px;
`

const Campo = styled.div`
  display: block;
  margin: 15px 10px;
  padding: 0 10px;
  border: thin solid #222;

  h5 {
    background-color: ${({ theme }) => theme.desktop.janela};
    position: relative;
    display: inline;
    top: -12px;
    left: -3px;
    padding: 0 3px;
    font-weight: 200;
    color: #222;
  }
`

const Botao = styled.a`
  padding: 5px 25px;
  display: block;
  margin: 0 auto 10px auto;
  line-height: 1;
  font-size: small;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-top-color: white;
  border-left-color: white;
  border-right-color: #222;
  border-bottom-color: #222;
  &:active {
    outline: none;
    border-top-color: #222;
    border-left-color: #222;
    border-right-color: white;
    border-bottom-color: white;
  }
`

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
    var caminho = router.asPath
    caminho = caminho.replace('/config', '')
    caminho += '/config'
    router.push(`${caminho}`)
  }
  
  return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <Janela id='config' ref={nodeRef}>
          
        <Titulo className="head">
          <div className="icone">
            <img src='/img/config.png' alt="icone das configuracoes" />
          </div>
          <div className="fechar">
            <button onClick={fecharJanela}>
              &#10006;
            </button>
          </div>
          <div className="titulo" onClick={ordenaJanela}>
            Configurações
          </div>

        </Titulo>

        <Conteudo>
          <ImgSys src='/img/win98.png' />
          <Campo>
            <h5>Estilos</h5>
            <Botao onClick={corBackgroundAleatoria}>
              Mudar a cor do plano de fundo
            </Botao>
            <Botao onClick={resetarCores}>
              Resetar todas as cores
            </Botao>
          </Campo>
          <Campo>
            <h5>Janelas</h5>
            <Botao onClick={corJanelaAleatoria}>
              Mudar a cor da barra de título
            </Botao>
            <Botao onClick={corJanelaFundoAleatoria}>
              Mudar a cor de fundo
            </Botao>
            <Botao onClick={fecharTodasJanelas}>
              Fechar todas as janelas
            </Botao>
          </Campo>
          <Campo>
            <h5>Sistema</h5>
            <Botao onClick={tocarMusiquinha}>
              Tocar uma musiquinha
            </Botao>
            <Botao onClick={boraPraWikipedia}>
              Sair
            </Botao>
          </Campo>
        </Conteudo>

      </Janela>
    </Draggable>
  )
}
