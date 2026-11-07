import stylesArtigo from '../Artigo.module.css';
import { useRouter } from 'next/router';
import DB from '../../../dados/db.json';
import { janelaService } from '../../../services/janelaService';

export default function Conhecimentos() {
  const router = useRouter();
  const { experiencias, tecnologias } = DB;

  const handleNavegacao = (nome) => {
    janelaService.ordenaJanela(router, nome);
  };

  return (
    <div className={stylesArtigo.artigocorpodiv}>
      <header className={stylesArtigo.titulo}>
        <h3 className={stylesArtigo.tituloh3}>
          Experiências Relevantes
          <hr className="dashed" />
        </h3>
      </header>

      <section className={stylesArtigo.gridContainer}>
        {experiencias.map(({ nome, empresa, cargo }) => (
          <button
            key={nome}
            type="button"
            className={stylesArtigo.pastadiv}
            onClick={() => handleNavegacao(nome)}
            aria-label={`Ver detalhes de ${empresa}`}
          >
            <img src='/img/doc.png' alt="" aria-hidden="true" />
            <p><b>{empresa}</b></p>
            <p>{cargo}</p>
          </button>
        ))}
      </section>

      <header className={stylesArtigo.titulo}>
        <h3 className={stylesArtigo.tituloh3}>
          Principais Tecnologias
          <hr className="dashed" />
        </h3>
      </header>

      <section className={stylesArtigo.gridContainer}>
        {tecnologias.map(({ nome, icone }) => (
          <div key={nome} className={stylesArtigo.pastadiv}>
            <img src={icone} alt={nome} />
            <p>{nome}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
