import { MeuCorpo, Pasta } from '..'

export default function Projetos() {
  const projetos = [
    {
      nome: 'Milton.io',
      tecnologia: 'Android Studio',
      link: 'https://github.com/sleiph/Miltonio'
    },
    {
      nome: 'TaroTI',
      tecnologia: 'Spring web',
      link: 'https://github.com/sleiph/taroTI'
    },
    {
      nome: 'CHIP-OITO',
      tecnologia: 'React',
      link: 'https://github.com/sleiph/CHIP-OITO'
    },
    {
      nome: 'Portas Lógicas',
      tecnologia: 'Unity',
      link: 'https://github.com/sleiph/portasLogicas'
    },
    /*{
      nome: 'Editor de pixels',
      tecnologia: 'Django',
      link: 'https://gitlab.com/ricadO/djangopixeleditor'
    },*/
    {
      nome: 'Avatares Gmail',
      tecnologia: '.NET Framework',
      link: 'https://github.com/sleiph/GmailAvatar'
    },
    {
      nome: 'Exploração de dados',
      tecnologia: 'pandas',
      link: 'https://github.com/sleiph/exploracao-de-dados'
    }
  ]

  return (
    <MeuCorpo>
      {projetos.map((projeto) => {
        return (
          <a href={projeto.link} key={projeto.nome}>
            <Pasta>
              <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt={projeto.nome} />
              <p><b>{projeto.nome}</b></p>
              <p>{projeto.tecnologia}</p>
            </Pasta>
          </a>
        )
      })}
    </MeuCorpo>
  )
}
