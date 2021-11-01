import router, { useRouter } from 'next/router'

import { MeuCorpo, Pasta } from '..'

export default function Desenhos(  ) {
  const router = useRouter()

  const desenhos = [
    {
      nome: 'nedankinde',
      imagem: '/img/nedankinde.png'
    },
    {
      nome: 'mutarelli',
      imagem: '/img/mutarelli.jpg'
    },
    {
      nome: 'h2',
      imagem: '/img/h2.jpg'
    },
    {
      nome: 'vikings',
      imagem: '/img/vikings.jpg'
    },
    {
      nome: 'daytona',
      imagem: '/img/daytona.png'
    },
    {
      nome: 'iguacu',
      imagem: '/img/iguacu.jpg'
    },
    {
      nome: 'lupus',
      imagem: '/img/lupus.jpg'
    },
    {
      nome: 'caliban',
      imagem: '/img/caliban.jpg'
    },
    {
      nome: 'thomassons',
      imagem: '/img/thomassons.jpg'
    },
    {
      nome: 'expressionist',
      imagem: '/img/expressionist.jpg'
    },
    {
      nome: '64bitsMarseilles',
      imagem: 'https://cdn.dribbble.com/users/1016047/screenshots/16692392/media/75bfc073d531286106202a5159774830.png?compress=1&resize=1200x900'
    }
  ]

  return (
    <MeuCorpo>
      {desenhos.map((desenho) => {
        return (
          <Pasta key={desenho.nome} onClick={
            () => {
              var caminho = router.asPath
              if (caminho === '/home') {
                caminho = desenho.nome
              }
              else {
                caminho = caminho.replace('/' + desenho.nome, '')
                caminho += '/' + desenho.nome
              }
              router.push(`${caminho}`)
            }
          }>
            <img src={desenho.imagem} alt={desenho.nome} />
            <p>{desenho.nome}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
