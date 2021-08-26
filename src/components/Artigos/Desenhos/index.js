import { MeuCorpo, Pasta } from '..'

export default function Desenhos( props ) {
  const desenhos = [
    {
      nome: 'Nedankinde',
      imagem: './img/nedankinde.png'
    },
    {
      nome: 'Quero ser Lourenço Mutarelli',
      imagem: './img/mutarelli.jpg'
    },
    {
      nome: 'h2',
      imagem: './img/h2.jpg'
    },
    {
      nome: 'Vikings',
      imagem: './img/vikings.jpg'
    },
    {
      nome: 'Daytona',
      imagem: './img/daytona.png'
    },
    {
      nome: 'Iguaçú',
      imagem: './img/iguacu.jpg'
    },
    {
      nome: 'Lupus',
      imagem: './img/lupus.jpg'
    },
    {
      nome: 'Caliban',
      imagem: './img/caliban.jpg'
    },
    {
      nome: 'Thomassons',
      imagem: './img/thomassons.jpg'
    },
    {
      nome: 'Expressionist',
      imagem: './img/expressionist.jpg'
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
