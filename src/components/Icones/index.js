import router from 'next/router';

import stylesArea from '../AreadeTrabalho.module.css';

export default function Icones(propriedades) {
  return (
    <div className={stylesArea.iconesdiv}>
      {Object.values(propriedades.janelas).map((artigo) => {
        if (artigo.isRaiz)
          return (
            <div key={artigo.nome+'-icone'} className={stylesArea.iconediv}
            onClick={
              () => {
                let caminho = router.asPath;
                if (caminho.split('?')[0] === '/home') {
                  caminho = artigo.nome;
                }
                else {
                  caminho = caminho.replace('/' + artigo.nome, '');
                  caminho += '/' + artigo.nome;
                }
                router.push(`${caminho}`);
              }
            }>
              <img src={artigo.icone} alt="" />
              <p>{artigo.nome}</p>
            </div>
          )
      })}
    </div>
  )
}
