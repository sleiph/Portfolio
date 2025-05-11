import stylesArtigo from '../Artigo.module.css';
import DB from '../../../dados/db.json';

export default function Formacao() {

  const formacoes = DB["formacoes"];
  const certificados = DB["certificados"];

  return (
    <div className={stylesArtigo.artigocorpodiv}>
      <h3 className={stylesArtigo.tituloh3}>Formação<hr className="dashed"></hr></h3>
      {formacoes.map((formacao) => {
        return (
          <div key={formacao.nome} className={stylesArtigo.pastadiv}>
            <img src='/img/doc.png' alt="pasta de arquivos" />
            <p><b>{formacao.estado}</b></p>
            <p>{formacao.nome}</p>
            <p>{formacao.facul}</p>
          </div>
        )
      })}
      <h3 className={stylesArtigo.tituloh3}>Certificados<hr className="dashed"></hr></h3>
      {certificados.map((certificado) => {
        return (
          <div key={certificado.nome} className={stylesArtigo.pastadiv}>
            <img src={certificado.imagem} alt={certificado.nome} />
            <p><b>{certificado.data}</b></p>
            <p>{certificado.nome}</p>
          </div>
        )
      })}
    </div>
  )
}
