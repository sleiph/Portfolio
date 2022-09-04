import { MeuCorpo, Pasta, Titulo } from '..'
import router, { useRouter } from 'next/router'

export default function Conhecimentos() {
  const router = useRouter()

  const experiencias = [
    {
      nome: 'elinduxus',
      empresa: 'Élin Duxus',
      cargo: 'estagiário'
    },
    {
      nome: 'elinduxus',
      empresa: 'Élin Duxus',
      cargo: 'júnior - atual'
    }
  ]
  const tecnologias = [
    {
      nome: 'spring-boot',
      imagem: '/img/spring.png'
    },
    {
      nome: 'Android Studio',
      imagem: '/img/android.png'
    },
    {
      nome: '.NET',
      imagem: '/img/dotnet.png'
    },
    {
      nome: 'django',
      imagem: '/img/django.png'
    },
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
      <Titulo>Experiências</Titulo>
      {experiencias.map((experiencia) => {
        return (
          <Pasta key={experiencia.empresa} onClick={
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
      <Titulo>Tecnologias</Titulo>
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
