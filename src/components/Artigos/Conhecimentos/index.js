import { MeuCorpo, Pasta, Titulo } from '..'

export default function Conhecimentos() {
  const conhecimentos = [
    'spring-boot', '.NET', 'React', 'Android Studio', 'python'
  ]

  return (
    <MeuCorpo>
      {conhecimentos.map((conhecimento) => {
        return (
          <Pasta key={conhecimento}>
            <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt='' />
            <p>{conhecimento}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
