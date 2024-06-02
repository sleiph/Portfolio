import { MeuCorpo, Pasta, Titulo } from '..'
import { useRouter } from 'next/router'

export default function Conhecimentos() {
  const router = useRouter()

  const experiencias = [
    {
      nome: 'design',
      empresa: 'Design',
      cargo: '7 anos de experiência'
    },
    /*{
      nome: 'elinduxus-estagiario',
      empresa: 'Élin Duxus',
      cargo: 'estagiário'
    },*/
    {
      nome: 'elinduxus-junior',
      empresa: 'Élin Duxus',
      cargo: 'programador júnior - atual'
    }
  ]
  const tecnologias = [
    {
      nome: 'Java/spring',
      imagem: '/img/spring.png'
    },
    /*{
      nome: 'mockito',
      imagem: '/img/mockito.png'
    },*/
    {
      nome: 'Kotlin/Android Studio',
      imagem: '/img/android.png'
    },
    {
      nome: 'C#/.NET',
      imagem: '/img/dotnet.png'
    },
    /*{
      nome: 'django',
      imagem: '/img/django.png'
    },*/
    {
      nome: 'React.js',
      imagem: '/img/react.png'
    },
    {
      nome: 'Vue.js',
      imagem: '/img/vue.png'
    },
    {
      nome: 'Node.js',
      imagem: '/img/node.png'
    },
    {
      nome: 'unity',
      imagem: '/img/unity.png'
    },
    {
      nome: 'MySQL',
      imagem: '/img/mysql.png'
    },
    {
      nome: 'Postgres',
      imagem: '/img/postgres.png'
    },
    {
      nome: 'MongoDB',
      imagem: '/img/mongodb.png'
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
      <Titulo>Experiências Relevantes<hr className="dashed"></hr></Titulo>

      {experiencias.map((experiencia) => {
        return (
          <Pasta key={experiencia.nome} onClick={
            () => {
              var caminho = router.asPath
              if (caminho === '/home') {
                caminho = experiencia.nome
              }
              else {
                caminho = caminho.replace('/' + experiencia.nome, '')
                caminho += '/' + experiencia.nome
              }
              router.push(`${caminho}`)
            }
          }>
            <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt="pasta de arquivos" />
            <p><b>{experiencia.empresa}</b></p>
            <p>{experiencia.cargo}</p>
          </Pasta>
        )
      })}


      <Titulo>Principais Tecnologias<hr className="dashed"></hr></Titulo>

      {tecnologias.map((tecnologia) => {
        return (
          <Pasta key={tecnologia.nome}>
            <img src={tecnologia.imagem} alt={tecnologia.nome} />
            <p>{tecnologia.nome}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
