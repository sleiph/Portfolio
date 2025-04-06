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
              <img src='/img/doc.png' alt={projeto.nome} />
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
