import stylesArtigo from '../Artigo.module.css';
import DB from '../../../dados/db.json';

export default function Sobre() {

  const contatos = DB["contatos"];

  return (
    <div>
      <div className={stylesArtigo.descricaodiv}>
        Olá, bem vindo ao meu portfólio!
        <br></br><br></br>
        Se gostou do meu trabalho pode me contatar em um dos links abaixo.
        O melhor jeito de falar comigo é por whatsapp, mas se precisar muito mesmo, pode me ligar ou mandar email,
        no LinkedIn eu realmente gostaria de nunca mais entrar na minha vida.
      </div>
      <div className={stylesArtigo.artigocorpodiv}>
        {contatos.map((contato) => {
          return (
            <a href={contato.link} key={contato.nome}>
              <div className={stylesArtigo.pastadiv}>
                <img src={contato.imagem} alt={contato.nome} />
                <p>{contato.nome}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
