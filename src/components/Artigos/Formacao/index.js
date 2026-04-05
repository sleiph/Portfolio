import stylesArtigo from '../Artigo.module.css';
import DB from '../../../dados/db.json';

export default function Formacao() {

  const formacoes = DB["formacoes"];
  const certificados = DB["certificados"];

  return (
    <div className={stylesArtigo.artigocorpodiv}>
      <header className={stylesArtigo.titulo}>
        <h3 className={stylesArtigo.tituloh3}>
          Formação
          <hr className="dashed" />
        </h3>
      </header>

      <section className={stylesArtigo.gridContainer}>
        {formacoes.map((formacao) => (
          <button
            key={formacao.nome}
            type="button"
            className={stylesArtigo.pastadiv}
            aria-label={`Ver detalhes de ${formacao.nome}`}
          >
            <img src='/img/doc.png' alt="pasta de arquivos" aria-hidden="true" />
            <p><b>{formacao.estado}</b></p>
            <p>{formacao.nome}</p>
            <p>{formacao.facul}</p>
          </button>
        ))}
      </section>

      <header className={stylesArtigo.titulo}>
        <h3 className={stylesArtigo.tituloh3}>
          Certificados
          <hr className="dashed" />
        </h3>
      </header>

      <section className={stylesArtigo.gridContainer}>
        {certificados.map((certificado) => {
          return (
            <div key={certificado.nome} className={stylesArtigo.pastadiv}>
              <img src={certificado.imagem} alt={certificado.nome} />
              <p><b>{certificado.data}</b></p>
              <p>{certificado.nome}</p>
            </div>
          )
        })}
      </section>
    </div>
  )
}
