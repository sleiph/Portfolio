import styled from 'styled-components';

const Janela = styled.div`
  display: block;
	max-width: 800px;
	min-height: 20px;
  padding-bottom: 16px;
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
	height: 23px;

  .icone {
    height: 100%;
	  float: left;
	  padding: 2px;
  }

  img {
    object-fit: fill;
    display: block;
    height: 18px;
    width: 18px;
  }
`

const NotasBarraTitulo = styled.div`
  color: white;
	letter-spacing: .5px;
	word-spacing: .5px;
	padding-left: 5px;
	float: left;
	font-weight: 600;
`

const NotasBarraFechar = styled.div`
  height: 100%;
	display: block;
	float: right;
	padding-top: 3px;
	padding-bottom: 3px;
  padding-left:  5px;
	padding-right: 5px;
`

const NotasBarraFecharBotao = styled.div`
  background: #BFBFBF;
	height: 100%;
	width: 19px;
	border-right: 2px solid black;
	border-bottom: 2px solid black;
	border-left: 1px solid white;
	border-top: 1px solid white;
  font-size: 55%;
	margin: auto;
	text-align: center;
`

const NotasTools = styled.div`
  width: 100%;
	float: left;
	display: inline-flex;
	margin-left: 10px;
	margin-bottom: 5px;
`

const NotasToolsTexto = styled.div`
  padding-right: 15px;

  span {
    text-decoration: underline;
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
`

export default function Artigo({ icone, titulo, conteudo }) {
  return (
    <Janela>
			<Notas>
				<NotasBarra>
					<div className="icone">
						<img src={ icone } alt="icone do programa" />
					</div>
					<NotasBarraTitulo>{ titulo }</NotasBarraTitulo>
						<NotasBarraFechar>
							<NotasBarraFecharBotao>&#10006;</NotasBarraFecharBotao>
						</NotasBarraFechar>
				</NotasBarra>
				<NotasTools>
				 	<NotasToolsTexto><span>F</span>ile</NotasToolsTexto>
				 	<NotasToolsTexto><span>E</span>dit</NotasToolsTexto>
				 	<NotasToolsTexto><span>S</span>earch</NotasToolsTexto>
				 	<NotasToolsTexto><span>H</span>elp</NotasToolsTexto>
				</NotasTools>
				<NotasContent>
					{ conteudo }
				</NotasContent>
			</Notas>
    </Janela>
  )
}
