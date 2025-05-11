import { useRouter } from 'next/router';
import stylesArtigo from '../Artigo.module.css';
import DB from '../../../dados/db.json';

export default function Desenhos(  ) {
  const router = useRouter();

  const desenhos = DB["desenhos"];

  return (
    <div className={stylesArtigo.artigocorpodiv}>
      {desenhos.map((desenho) => {
        return (
          <div key={desenho.nome} className={stylesArtigo.pastadiv} onClick={
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
          </div>
        )
      })}
    </div>
  )
}
