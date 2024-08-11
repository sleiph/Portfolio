import { MeuCorpo, Pasta, Descricao } from '..';
import DB from '../../../dados/db.json';

export default function Sobre() {
  const contatos = DB["contatos"];

  return (
    <div>
      <Descricao>
        Olá, bem vindo ao meu portfólio!
        <br></br><br></br>
        Se gostou do meu trabalho pode me contatar em um dos links abaixo.
        O melhor jeito de falar comigo é por whatsapp, mas se precisar muito mesmo, pode me ligar ou mandar email,
        no LinkedIn eu realmente gostaria de nunca mais entrar na minha vida.
      </Descricao>
      <MeuCorpo>
        {contatos.map((contato) => {
          return (
            <a href={contato.link} key={contato.nome}>
              <Pasta>
                <img src={contato.imagem} alt={contato.nome} />
                <p>{contato.nome}</p>
              </Pasta>
            </a>
          )
        })}
      </MeuCorpo>
    </div>
  )
}
