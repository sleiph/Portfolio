import { MeuCorpo, Pasta } from '..'

export default function Projetos() {
  const projetos = [
    {
      nome: 'Milton.io',
      link: 'https://github.com/sleiph/Miltonio'
    },
    {
      nome: 'Portas Lógicas',
      link: 'https://github.com/sleiph/portasLogicas'
    },
    {
      nome: 'TaroTI',
      link: 'https://github.com/sleiph/taroTI'
    },
    {
      nome: 'Avatares Gmail',
      link: 'https://github.com/sleiph/GmailAvatar'
    },
    {
      nome: 'Exploração de dados',
      link: 'https://github.com/sleiph/exploracao-de-dados'
    }
  ]

  return (
    <MeuCorpo>
      {projetos.map((projeto) => {
        return (
          <a href={projeto.link} key={projeto.nome}>
            <Pasta>
              <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt='' />
              <p>{projeto.nome}</p>
            </Pasta>
          </a>
        )
      })}
    </MeuCorpo>
  )
}
