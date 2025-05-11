import stylesArtigo from '../Artigo.module.css';
import DB from '../../../dados/db.json';

export default function Projetos() {

  const projetos = DB["projetos"];

  return (
    <div className={stylesArtigo.artigocorpodiv}>
      {projetos.map((projeto) => {
        return (
          <a href={projeto.link} key={projeto.nome}>
            <div className={stylesArtigo.pastadiv}>
              <img src='/img/doc.png' alt={projeto.nome} />
              <p><b>{projeto.nome}</b></p>
              <p>{projeto.tecnologia}/</p>
              <p>{projeto.framework}</p>
            </div>
          </a>
        )
      })}
    </div>
  )
}
