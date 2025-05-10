import { useRouter } from 'next/router';
import { MeuCorpo, Pasta } from '..';
import DB from '../../../dados/db.json';

export default function Lixeira(  ) {
  const router = useRouter();

  const lixos = DB["lixos"];

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
