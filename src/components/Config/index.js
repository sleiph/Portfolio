import styled from 'styled-components'
import Draggable from 'react-draggable'

import {Janela, Titulo} from '../Janela'

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

export default function Config({ fecharTudo, fechar, corHead, corCorpo, resetarCores }) {

  return (
    <Draggable
    handle=".head"
    positionOffset={{x: '-50%', y: '-50%'}}>
      <Janela id='config'>
          
        <Titulo className="head">
          <div className="icone">
            <img src='https://66.media.tumblr.com/83833fe1b6ac3b482a89ff02aad3ed15/tumblr_odqaag4zd41vgs7gco9_75sq.png' alt="icone das configuracoes" />
          </div>
          <div className="fechar">
            <button onClick={ fechar }>
              &#10006;
            </button>
          </div>
          <div className="titulo">
            Configurações
          </div>

        </Titulo>

        <Conteudo>
          <ImgSys src='./img/win98.png' />
          <Campo>
            <h5>Janelas</h5>
            <Botao onClick={ fecharTudo }>
              Fechar todas as janelas
            </Botao>
            <Botao onClick={ corHead }>
              Mudar a cor da barra de título
            </Botao>
            <Botao onClick={ corCorpo }>Mudar a cor de fundo</Botao>
          </Campo>
          <Campo>
            <h5>Estilos</h5>
            <Botao onClick={ resetarCores }>Resetar todas as cores</Botao>
            <Botao onClick={
              () => {
                var musiquinha = new Audio('./snd/startup.wav')
                musiquinha.play()
              }
            }>Tocar uma musiquina</Botao>
          </Campo>
        </Conteudo>

      </Janela>
    </Draggable>
  )
}
