import { useState, useEffect } from 'react';
import { janelaService } from '../../services/janelaService';

import stylesBarra from './BarradeTarefas.module.css';

export default function BTarefas(propriedades) {

  const [hora, setHora] = useState("00:00");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    }, 15000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={stylesBarra.barradetarefasdiv} >
      <a className={stylesBarra.startbtn} onClick={
        () => {
          propriedades.setStart(!propriedades.start)
        }
      }>
        Iniciar
      </a>

      <div className={stylesBarra.janelasContainer}>
        {Array.isArray(propriedades.jid) && propriedades.jid.map((id) => {
          const artigo = propriedades.artigos[id];
          if (!artigo) return null;
          return (
            <button
              key={id}
              className={stylesBarra.janelaBtn}
              onClick={() => janelaService.ordenaJanela(propriedades.router, id)}
            >
              <img src={artigo.icone} alt="" />
              <span>{artigo.nome}</span>
            </button>
          );
        }).reverse()}
      </div>

      <div className={stylesBarra.relogio}>
        {hora || "00:00"}
      </div>

      {propriedades.start ?
      <div className={stylesBarra.startmenudiv} id="start-menu" >
        <div id='start-menu-titulo' className={stylesBarra.titlecontainer} >
          <div className={stylesBarra.titlecontainertitle} style={{top: (42*7) + 'px'}}>
            Ricardo<span>98</span>
          </div>
        </div>
        <ul>
          {Object.values(propriedades.artigos).map((artigo) => {
            if (artigo.isRaiz) {
              return (
                <li key={artigo.nome}
                style={{backgroundImage: `url(${artigo.icone})`}}
                onClick={
                  () => {
                    propriedades.setStart(!propriedades.start)
                    var caminho = propriedades.router.asPath
                    if (caminho === '/home') {
                      caminho = artigo.nome
                    }
                    else {
                      caminho = caminho.replace('/' + artigo.nome, '')
                      caminho += '/' + artigo.nome
                    }
                    propriedades.router.push(`${caminho}`)
                  }
                }>
                  {artigo.nome}
                </li>
              )
            }
          })}
          <hr />
          <a href='https://pt.wikipedia.org/wiki/Special:Random'>
            <li key='shutdown' className={stylesBarra.shutdown}>
              Sair
            </li>
          </a>
        </ul>
      </div>
      : <></>
      }
    </div>
  )
}
