import router, { useRouter } from 'next/router'

import Desenhos from '../Desenhos'
import { MeuCorpo, Pasta } from '..'

export default function Lixeira(  ) {
  const router = useRouter()

  const lixos = [
    {
      nome:'desenhos',
      icone: '/img/paint.png'
    },
    {
      nome:'php',
      icone: '/img/php.png'
    }
  ]

  return (
    <MeuCorpo>
      {lixos.map((lixo) => {
        return (
          <Pasta key={lixo.nome} onClick={
            () => {
              var caminho = router.asPath
              if (caminho === '/home') {
                caminho = lixo.nome
              }
              else {
                caminho = caminho.replace('/' + lixo.nome, '')
                caminho += '/' + lixo.nome
              }
              router.push(`${caminho}`)
            }
          }>
            <img src={lixo.icone} alt={lixo.nome} />
            <p>{lixo.nome}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
