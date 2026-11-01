import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import stylesArea from '../src/components/AreadeTrabalho.module.css';
import { POSTS_DATA } from '../src/dados/posts';
import { TEMAS } from '../src/dados/temas';
import { theme } from './_app';

import BTarefas from '../src/components/BTarefas';
import Icones from '../src/components/Icones';
import Janela from '../src/components/Janela';

const getIconeDoTema = () => {
  const temaId = theme.desktop.tema_atual;
  if (temaId !== null && TEMAS[temaId]) {
    return TEMAS[temaId].icone;
  }
  const mes = new Date().getMonth();
  const tema = TEMAS[mes];
  return tema ? tema.icone : '/img/ajuda.png';
};

const AreaTrabalho = () => {
  const router = useRouter();
  const { jid } = router.query;

  const [start, setStart] = useState(false);

  const posts = {
    ...POSTS_DATA,
    contatos: { ...POSTS_DATA.contatos, icone: getIconeDoTema() }
  };

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
