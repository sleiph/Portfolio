import styled from 'styled-components';
import Draggable from 'react-draggable'

export const Janela = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 25px;
  max-width: 920px;
  background: ${({ theme }) => theme.desktop.janela};
  padding: 4px;
  -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.75);
  border: 1.4px solid white;
  

  @media(max-width: 860px) {
    width: 90vw;
  }
`

export const Titulo = styled.div`
  background: ${({ theme }) => theme.desktop.azul_windows};
  width: 100%;
  height: 25px;
  margin-bottom: 2px;
  cursor: move;

  .icone {
    height: 100%;
	  float: left;
	  padding: 3px;
  }

  img {
    object-fit: fill;
    display: block;
    height: 18px;
    width: 18px;
  }

  .titulo {
    overflow: hidden;
	  color: white;
    padding-left: 5px;
	  padding-top: 2px;
  }

  .fechar {
  	height: 100%;
  	display: block;
  	float: right;
  	padding-right: 4px;

    button {
      background: ${({ theme }) => theme.desktop.janela};
      height: 20px;
      width: 20px;
      margin-top: 3px;
      line-height: .9;
      border-right: 2px solid black;
      border-bottom: 2px solid black;
      border-left: 1px solid white;
      border-top: 1px solid white;
    }
  }
`

const Conteudo = styled.div`
  background: white;
  min-height: 208px;
  max-height: 80vh;
  width: 100%;
  clear: both;
  border-radius: 1px;
  border: 1.2px solid black;
  overflow: auto;

  img {
    max-width:1080px;
  }
`

export default function Artigo({ artigo, fechar, focar }) {

  return (
    <Draggable
    handle=".head"
    positionOffset={{x: '-50%', y: '-50%'}}>
      <Janela id={ artigo.nome }>
        
        <Titulo className="head">
          <div className="icone" onClick={focar}>
            <img src={ artigo.icone } alt="icone do programa" />
          </div>
          <div className="fechar">
            <button onClick={ fechar }>
              &#10006;
            </button>
          </div>
          <div className="titulo" onClick={focar}>
            { artigo.nome }
          </div>
        </Titulo>

        <Conteudo className='conteudo'>
          { artigo.conteudo }
        </Conteudo>

      </Janela>
    </Draggable>
  )
}
