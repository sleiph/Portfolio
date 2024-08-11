import { MeuCorpo, Pasta, Titulo } from '..';
import DB from '../../../dados/db.json';

export default function Formacao() {

  const formacoes = DB["formacoes"];
  const certificados = DB["certificados"];

  return (
    <MeuCorpo>
      <Titulo>Formação<hr className="dashed"></hr></Titulo>
      {formacoes.map((formacao) => {
        return (
          <Pasta key={formacao.nome}>
            <img src='https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png' alt="pasta de arquivos" />
            <p><b>{formacao.estado}</b></p>
            <p>{formacao.nome}</p>
            <p>{formacao.facul}</p>
          </Pasta>
        )
      })}
      <Titulo>Certificados<hr className="dashed"></hr></Titulo>
      {certificados.map((certificado) => {
        return (
          <Pasta key={certificado.nome}>
            <img src={certificado.imagem} alt={certificado.nome} />
            <p><b>{certificado.data}</b></p>
            <p>{certificado.nome}</p>
          </Pasta>
        )
      })}
    </MeuCorpo>
  )
}
