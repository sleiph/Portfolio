import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import stylesArea from '../src/components/AreadeTrabalho.module.css';
import { POSTS_DATA } from '../src/dados/posts';

import BTarefas from '../src/components/BTarefas';
import Icones from '../src/components/Icones';
import Janela from '../src/components/Janela';

const MES_ICONES = {
  8: '/img/icn/huehuebr.gif',
  9: '/img/icn/spook.gif',
  11: '/img/icn/spohoho.gif'
};

const getIconeDoMes = () => {
  const mes = new Date().getMonth();
  return MES_ICONES[mes] || '/img/ajuda.png';
};

const AreaTrabalho = () => {
  const router = useRouter();
  const { jid } = router.query;

  const [start, setStart] = useState(false);

  const posts = useMemo(() => ({
    ...POSTS_DATA,
    contatos: { ...POSTS_DATA.contatos, icone: getIconeDoMes() }
  }), []);

  return (
    <main id='area-de-trabalho' className={stylesArea.areadetrabalhomain}>
      <BTarefas artigos={posts} start={start} setStart={setStart} jid={jid} router={router} />

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
