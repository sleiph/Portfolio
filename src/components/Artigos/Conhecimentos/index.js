import stylesArtigo from '../Artigo.module.css';
import { useRouter } from 'next/router';
import DB from '../../../dados/db.json';

export default function Conhecimentos() {
  const router = useRouter()

  const experiencias = DB["experiencias"];
  const tecnologias = DB["tecnologias"];

  return (
    <div className={stylesArtigo.artigocorpodiv}>

      <h3 className={stylesArtigo.tituloh3}>Experiências Relevantes<hr className="dashed"></hr></h3>

      {experiencias.map((experiencia) => {
        return (
          <div key={experiencia.nome} className={stylesArtigo.pastadiv} onClick={
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
            <img src='/img/doc.png' alt="pasta de arquivos" />
            <p><b>{experiencia.empresa}</b></p>
            <p>{experiencia.cargo}</p>
          </div>
        )
      })}

      <h3 className={stylesArtigo.tituloh3}>Principais Tecnologias<hr className="dashed"></hr></h3>

      {tecnologias.map((tecnologia) => {
        return (
          <div key={tecnologia.nome} className={stylesArtigo.pastadiv}>
            <img src={tecnologia.imagem} alt={tecnologia.nome} />
            <p>{tecnologia.nome}</p>
          </div>
        )
      })}

    </div>
  )
}
