import { useRouter } from 'next/router';
import stylesArea from '../AreadeTrabalho.module.css';
import { janelaService } from '../../services/janelaService';

export default function Icones({ janelas }) {

  const router = useRouter();

  const handleNavegacao = (nome) => {
    janelaService.ordenaJanela(router, nome);
  };

  const janelasRaiz = Object.values(janelas).filter(artigo => artigo.isRaiz);
  
  return (
    <div className={stylesArea.iconesdiv}>
      {janelasRaiz.map(({ nome, icone }) => (
        <button
          key={nome}
          className={stylesArea.iconediv}
          onClick={() => handleNavegacao(nome)}
          type="button"
          aria-label={`Abrir ${nome}`}
        >
          <img src={icone} alt={nome} aria-hidden="true" />
          <p>{nome}</p>
        </button>
      ))}
    </div>
  )
}
