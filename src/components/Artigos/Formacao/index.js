import { MeuCorpo, Pasta, Titulo } from '..'

export default function Formacao() {
  const formacoes = [
    {
      nome: 'Desenvolvimento de Sistemas',
      facul: 'FATEC Guarulhos',
      estado: 'cursando'
    },
    {
      nome: 'Desenho Industrial',
      facul: 'São Judas Tadeu',
      estado: 'concluído'
    }
  ]
  const certificados = [
    {
      nome: 'everis - .NET',
      data: 'Agosto de 2021',
      imagem: './img/dio.png'
    },
    {
      nome: 'GFT - Java Developer',
      data: 'Junho de 2021',
      imagem: './img/dio.png'
    },
    {
      nome: 'santander - Mobile Developer',
      data: 'Abril de 2021',
      imagem: './img/dio.png'
    },
    {
      nome: 'everis - Kotlin Developer',
      data: 'Março de 2021',
      imagem: './img/dio.png'
    },
    {
      nome: 'React Web Developer',
      data: 'Outubro de 2020',
      imagem: './img/dio.png'
    },
    {
      nome: 'Fullstack Developer',
      data: 'Junho de 2020',
      imagem: './img/dio.png'
    },
    {
      nome: 'Python - Análise de Dados',
      data: 'Maio de 2020',
      imagem: './img/dsa.png'
    }
  ]

  return (
    <MeuCorpo>
      <Titulo>Formação</Titulo>
      {formacoes.map((formacao) => {
        return (
          <Pasta key={formacao.nome}>
            <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt={formacao.nome} />
            <p><b>{formacao.estado}</b></p>
            <p>{formacao.nome}</p>
            <p>{formacao.facul}</p>
          </Pasta>
        )
      })}
      <Titulo>Certificados</Titulo>
      {certificados.map((certificado) => {
        return (
          <Pasta key={certificado.nome}>
            <img src={certificado.imagem} alt={certificado.nome} />
            <p><b>{certificado.data}</b></p>
            <p>{certificado.nome}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
