import { MeuCorpo, Pasta, Descricao } from '..'

export default function Sobre() {
  const contatos = [
    {
      nome: 'sleiph @gmail.com',
      imagem: '/img/gmail.png',
      link: 'mailto:sleiph@gmail.com'
    },
    {
      nome: '(11) 94520-0418',
      imagem: '/img/whatsapp.png',
      link: 'https://api.whatsapp.com/send?phone=+5511945200418'
    },
    {
      nome: 'GitHub',
      imagem: '/img/github.png',
      link: 'https://github.com/sleiph'
    },
    {
      nome: 'LinkedIn',
      imagem: '/img/linkedin.png',
      link: 'https://www.linkedin.com/in/ricardo-gomes-aa40a51b1/'
    }/*,
    {
      nome: 'dribbble',
      imagem: '/img/dribbble.png',
      link: 'https://dribbble.com/ricardoalvesgomes'
    }
    {
      nome: 'Behance',
      imagem: '/img/behance.png',
      link: 'https://www.behance.net/ricardoalvesgomes'
    }*/
  ]

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
