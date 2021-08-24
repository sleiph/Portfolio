import { MeuCorpo, Pasta } from '..'

export default function Desenhos( props ) {
  const desenhos = [
    {
      nome: 'Nedankinde',
      imagem: './img/nedankinde.png'
    },
    {
      nome: 'aaaaaaaaa',
      imagem: './img/nedankinde.png'
    },
    {
      nome: 'bbbbbb b bbbbbb',
      imagem: './img/nedankinde.png'
    },
    {
      nome: 'cccccc ccccc ccccccc',
      imagem: './img/nedankinde.png'
    }
  ]

  return (
    <MeuCorpo>
      {desenhos.map((desenho) => {
        return (
          <Pasta key={desenho.nome} onClick={
            () => {
              var imagem = {
                nome: desenho.nome,
                icone: desenho.imagem,
                conteudo: <img src={desenho.imagem} />
              }
              props.onClick(imagem)
            }
          }>
            <img src={desenho.imagem} alt='' />
            <p>{desenho.nome}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
