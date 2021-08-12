import styled from 'styled-components';

const Janela = styled.div`
  display: block;
  max-width: 800px;
  min-height: 24px;
  padding-bottom: 16px;

  @media(min-width: 860px) {
    position: absolute;

  }
`

const Notas = styled.div`
  background: ${({ theme }) => theme.colors.janela};
  display: block;
  min-height: 100px;
  width: 100%;
  padding: 4px;
  -webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.75);
  border: 1.4px solid white;
`

const NotasBarra = styled.div`
  background: ${({ theme }) => theme.colors.windows};
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
  	padding-left:  5px;
  	padding-right: 5px;

    button {
      background: ${({ theme }) => theme.colors.janela};
      height: 20px;
      width: 20px;
      margin-top: 2px;
      line-height: .9;
      padding-left: 4px;
      border-right: 2px solid black;
      border-bottom: 2px solid black;
      border-left: 1px solid white;
      border-top: 1px solid white;
    }
  }
`

const NotasContent = styled.div`
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

export default function Artigo({ icone, titulo, conteudo }) {
  
  const deleteDis = () => {
    document.getElementById(titulo).remove()
  }

  return (
    <Janela id={ titulo }
    style={{ top: (Math.floor(Math.random() * (40 - 10)) + 10) + 'vh',
    left: (Math.floor(Math.random() * (60 - 0)) + 0) + 'vw' }}>
      <Notas>
        <NotasBarra>
          <div className="icone">
            <img src={ icone } alt="icone do programa" />
          </div>
          <div className="titulo">
            { titulo }
          </div>
          <div className="fechar">
            <button onClick={ deleteDis }>
              &#10006;
            </button>
          </div>
        </NotasBarra>
        <NotasContent>
          { conteudo }
        </NotasContent>
      </Notas>
    </Janela>
  )
}
