import { MeuCorpo, Pasta, Titulo } from '..'

export default function Conhecimentos() {
  const conhecimentos = [
    {
      nome: 'spring-boot',
      imagem: '/img/spring.png'
    },
    {
      nome: '.NET',
      imagem: '/img/dotnet.png'
    },
    {
      nome: 'React',
      imagem: '/img/react.png'
    },
    {
      nome: 'Android Studio',
      imagem: '/img/android.png'
    },
    {
      nome: 'python',
      imagem: '/img/python.png'
    },
    {
      nome: 'MySQL',
      imagem: '/img/mysql.png'
    },
    {
      nome: 'Adobe Photoshop',
      imagem: '/img/photoshop.png'
    },
    {
      nome: 'Adobe Illustrator',
      imagem: '/img/illustrator.png'
    }
  ]

  return (
    <MeuCorpo>
      {conhecimentos.map((conhecimento) => {
        return (
          <Pasta key={conhecimento.nome}>
            <img src={conhecimento.imagem} alt={conhecimento.nome} />
            <p>{conhecimento.nome}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
