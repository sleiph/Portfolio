import { useRouter } from 'next/router';
import stylesArtigo from '../Artigo.module.css';
import DB from '../../../dados/db.json';

export default function Lixeira(  ) {
  const router = useRouter();

  const lixos = DB["lixos"];

  return (
    <div className={stylesArtigo.artigocorpodiv}>
      {lixos.map((lixo) => {
        return (
          <div key={lixo.nome} className={stylesArtigo.pastadiv} onClick={
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
          </div>
        )
      })}
    </div>
  )
}
