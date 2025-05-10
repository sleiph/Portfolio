import { useRouter } from 'next/router';
import { MeuCorpo, Pasta } from '..';
import DB from '../../../dados/db.json';

export default function Desenhos(  ) {
  const router = useRouter();

  const desenhos = DB["desenhos"];

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
