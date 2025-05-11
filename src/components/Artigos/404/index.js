import stylesArtigo from '../Artigo.module.css';

export default function QuatrozeroQuatro() {
  return (
    <div className={stylesArtigo.artigocorpodiv}>
      <h3 className={stylesArtigo.tituloh3}>404 - Página não encontrada<hr className="dashed"></hr></h3>
      <p className={stylesArtigo.notasp}>Não sei o que você esperava, mas não conseguiu.</p>
    </div>
  )
}
