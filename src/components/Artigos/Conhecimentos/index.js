import { MeuCorpo, Pasta, Titulo } from '..';
import { useRouter } from 'next/router';
import DB from '../../../dados/db.json';

export default function Conhecimentos() {
  const router = useRouter()

  const experiencias = DB["experiencias"];
  const tecnologias = DB["tecnologias"];

  return (
    <MeuCorpo>

      <Titulo>Experiências Relevantes<hr className="dashed"></hr></Titulo>

      {experiencias.map((experiencia) => {
        return (
          <Pasta key={experiencia.nome} onClick={
            () => {
              var caminho = router.asPath
              if (caminho === '/home') {
                caminho = experiencia.nome
              }
              else {
                caminho = caminho.replace('/' + experiencia.nome, '')
                caminho += '/' + experiencia.nome
              }
              router.push(`${caminho}`)
            }
          }>
            <img src='/img/doc.png' alt="pasta de arquivos" />
            <p><b>{experiencia.empresa}</b></p>
            <p>{experiencia.cargo}</p>
          </Pasta>
        )
      })}

      <Titulo>Principais Tecnologias<hr className="dashed"></hr></Titulo>

      {tecnologias.map((tecnologia) => {
        return (
          <Pasta key={tecnologia.nome}>
            <img src={tecnologia.imagem} alt={tecnologia.nome} />
            <p>{tecnologia.nome}</p>
          </Pasta>
        )
      })}

    </MeuCorpo>
  )
}
