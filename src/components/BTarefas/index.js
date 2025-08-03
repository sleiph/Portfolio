import { useState, useEffect } from 'react';
import router from 'next/router';

import stylesBarra from './BarradeTarefas.module.css';

export default function BTarefas(propriedades) {

  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
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
        
      <div className={stylesBarra.relogio}>
        {hora.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
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
                    var caminho = router.asPath
                    if (caminho === '/home') {
                      caminho = artigo.nome
                    }
                    else {
                      caminho = caminho.replace('/' + artigo.nome, '')
                      caminho += '/' + artigo.nome
                    }
                    router.push(`${caminho}`)
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
