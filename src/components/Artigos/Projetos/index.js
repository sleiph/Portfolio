import { MeuCorpo, Pasta } from '..';
import DB from '../../../dados/db.json';

export default function Projetos() {

  const projetos = DB["projetos"];

  return (
    <MeuCorpo>
      {projetos.map((projeto) => {
        return (
          <a href={projeto.link} key={projeto.nome}>
            <Pasta>
              <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt={projeto.nome} />
              <p><b>{projeto.nome}</b></p>
              <p>{projeto.tecnologia}/</p>
              <p>{projeto.framework}</p>
            </Pasta>
          </a>
        )
      })}
    </MeuCorpo>
  )
}
