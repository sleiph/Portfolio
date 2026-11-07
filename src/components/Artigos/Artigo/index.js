import { useRouter } from 'next/router';
import stylesArtigo from '../Artigo.module.css';
import { janelaService } from '../../../services/janelaService';

export default function Artigo({ items }) {
    const router = useRouter();

    const handleNavegacao = (nome) => {
        janelaService.ordenaJanela(router, nome);
    };

    return (
        <div className={stylesArtigo.artigocorpodiv}>
            {items.map((item) => (
                <button
                    key={item.nome}
                    type="button"
                    className={stylesArtigo.pastadiv}
                    onClick={() => handleNavegacao(item.nome)}
                >
                    <img src={item.icone} alt={item.nome} />
                    <p>{item.nome}</p>
                </button>
            ))}
        </div>
    );
}