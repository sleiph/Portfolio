import { useRouter } from 'next/router';
import stylesArtigo from '../Artigo.module.css';

export default function Artigo({ items }) {
    const router = useRouter();

    //TODO: metodo repetido
    const handleNavegacao = (nome) => {
        const basePath = router.asPath.split('?')[0];
        const nextPath = basePath === '/home'
            ? `/${nome}`
            : `${basePath.replace(`/${nome}`, '')}/${nome}`;

        router.push(nextPath);
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