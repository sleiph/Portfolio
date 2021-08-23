import { MeuCorpo, Titulo } from '..'

export default function Sobre() {
  return (
    <MeuCorpo>
      <Titulo>Ricardo Gomes</Titulo>

      <p>Como você vai neste dia de hoje?</p>

      <p>Não que eu esteja realmente interessado em como você está, eu só escrevi esse texto pra testar a aplicação mesmo.
        A aplicação, aliás, vai ser o meu portfólio algum dia, mas se você já ficou interessado no meu trabalho só com essa página sem propósito, por que não entra no meu <a href='https://github.com/sleiph'>gitHub</a> e confere meus outros trabalhos?
      </p>
    </MeuCorpo>
  )
}
