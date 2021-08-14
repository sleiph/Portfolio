import styled from 'styled-components';

const Janela = styled.div`
  min-height: 100px;
  max-width: 800px;
  background: ${({ theme }) => theme.desktop.janela};
  padding: 4px;
  -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.75);
  border: 1.4px solid white;

  @media(min-width: 860px) {
    position: absolute;
  }
`

const Titulo = styled.div`
  background: ${({ theme }) => theme.desktop.azul_windows};
  width: 100%;
  height: 24px;
  margin-bottom: 2px;

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
	  color: white;
    padding-left: 5px;
	  padding-top: 2px;
    float: left;
  }

  .fechar {
  	height: 100%;
  	display: block;
  	float: right;
  	padding-bottom: 3px;
  	padding-right: 4px;

    button {
      background: ${({ theme }) => theme.desktop.janela};
      height: 20px;
      width: 20px;
      margin-top: 2px;
      line-height: .9;
      padding-left: 2px;
      border-right: 2px solid black;
      border-bottom: 2px solid black;
      border-left: 1px solid white;
      border-top: 1px solid white;
    }
  }
`

const Conteudo = styled.div`
  background: white;
  height: 400px;
  width: 100%;
  clear: both;
  border-radius: 1px;
  border: 1.2px solid black;
  overflow: auto;
  padding: 5px;

  @media(min-width: 860px) {
    min-width: 400px;
  }
`

export default function Artigo({ artigo, topo, esquerda }) {
  
  const deleteDis = () => {
    document.getElementById(artigo.nome).remove()
  }

  const indiceZ = () => {
    let temp = document.getElementById(artigo.nome)
    if (temp != null) {
      temp.style.zIndex += 1
    }
  }
  
  return (
    <Janela id={ artigo.nome }
    style={{ top: topo, left: esquerda, zIndex: 1 }}
    onClick={indiceZ}>

      <Titulo>
        <div className="icone">
          <img src={ artigo.icone } alt="icone do programa" />
        </div>
        <div className="titulo">
          { artigo.nome }
        </div>
        <div className="fechar">
          <button onClick={ deleteDis }>
            &#10006;
          </button>
        </div>
      </Titulo>

      <Conteudo>
        { artigo.conteudo }
      </Conteudo>

    </Janela>
  )
}
