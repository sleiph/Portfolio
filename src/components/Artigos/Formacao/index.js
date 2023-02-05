import { MeuCorpo, Pasta, Titulo } from '..'

export default function Formacao() {
  const formacoes = [
    {
      nome: 'Desenho Industrial',
      facul: 'São Judas Tadeu',
      estado: 'concluído'
    },
    {
      nome: 'Infografia',
      facul: 'Anhembi Morumbi',
      estado: 'concluído'
    },
    {
      nome: 'Análise de Sistemas',
      facul: 'FATEC Guarulhos',
      estado: 'concluído'
    }
  ]
  const certificados = [
    {
      nome: 'Java Developer',
      data: 'agosto de 2022',
      imagem: '/img/dio.png'
    },
    {
      nome: 'Carrefour Web Developer',
      data: 'maio de 2022',
      imagem: '/img/dio.png'
    },
    /*{
      nome: 'Mobile Developer',
      data: 'fevereiro de 2022',
      imagem: '/img/dio.png'
    },*/
    {
      nome: 'Amdocs JAVA Developer',
      data: 'janeiro de 2022',
      imagem: '/img/dio.png'
    },
    /*{
      nome: 'Eduzz Fullstack Developer',
      data: 'novembro de 2021',
      imagem: '/img/dio.png'
    },*/
    {
      nome: 'capgemini - Angular',
      data: 'setembro de 2021',
      imagem: '/img/dio.png'
    },
    {
      nome: 'everis - .NET',
      data: 'Agosto de 2021',
      imagem: '/img/dio.png'
    },
    /*{
      nome: 'GFT - Java Developer',
      data: 'Junho de 2021',
      imagem: '/img/dio.png'
    },*/
    {
      nome: 'santander - Mobile Developer',
      data: 'Abril de 2021',
      imagem: '/img/dio.png'
    },
    {
      nome: 'everis - Kotlin Developer',
      data: 'Março de 2021',
      imagem: '/img/dio.png'
    },
    {
      nome: 'Imersão Next.js da Alura',
      data: 'Fevereiro de 2021',
      imagem: '/img/alura.png'
    },
    {
      nome: 'React Web Developer',
      data: 'Novembro de 2020',
      imagem: '/img/dio.png'
    },
    {
      nome: 'NextLevelWeek#3 da Rocketseat',
      data: 'Setembro de 2020',
      imagem: '/img/rocketseat.png'
    },
    {
      nome: 'Fullstack Developer',
      data: 'Junho de 2020',
      imagem: '/img/dio.png'
    },
    {
      nome: 'Python - Análise de Dados',
      data: 'Maio de 2020',
      imagem: '/img/dsa.png'
    },
  ]

  return (
    <MeuCorpo>
      <Titulo>Formação</Titulo>
      {formacoes.map((formacao) => {
        return (
          <Pasta key={formacao.nome}>
            <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt="pasta de arquivos" />
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
