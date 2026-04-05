import { useState } from 'react';
import { useRouter } from 'next/router';

import stylesArea from '../src/components/AreadeTrabalho.module.css';
import { POSTS_DATA } from '../src/dados/posts';

import BTarefas from '../src/components/BTarefas';
import Icones from '../src/components/Icones';
import Janela from '../src/components/Janela';

const AreaTrabalho = () => {
  const router = useRouter();
  const { jid } = router.query;

  const [start, setStart] = useState(false);

  const mes = new Date().getMonth();
  const getIconeDoMes = () => {
    const icones = {
      0: '/img/ajuda.png',
      1: '/img/ajuda.png',
      2: '/img/ajuda.png',
      3: '/img/ajuda.png',
      4: '/img/ajuda.png',
      5: '/img/ajuda.png',
      6: '/img/ajuda.png',
      7: '/img/ajuda.png',
      8: '/img/icn/huehuebr.gif',
      9: '/img/icn/spook.gif',
      10: '/img/ajuda.png',
      11: '/img/icn/spohoho.gif'
    }
    return icones[mes] || '/img/ajuda.png';
  };

  const posts = {
    ...POSTS_DATA,
    contatos: { ...POSTS_DATA.contatos, icone: getIconeDoMes() }
  };

  return (
    <main id='area-de-trabalho' className={stylesArea.areadetrabalhomain}>
      <BTarefas artigos={posts} start={start} setStart={setStart} />

      <Icones janelas={posts} />

      {Array.isArray(jid) && jid.map((id) => (
        <Janela 
          key={id} 
          janelas={posts} 
          id={id} 
        />
      ))}
    </main>
  );
}

export default AreaTrabalho;
