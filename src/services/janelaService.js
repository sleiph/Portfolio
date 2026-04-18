export const janelaService = {

  /**
   * Fecha a janela, tirando ela da URL
   * @param {object} router - Next.js router
   * @param {string} nomeJanela - Nome da janela
   */
  fecharJanela(router, nomeJanela) {
    let caminho = router.asPath.replace(`/${nomeJanela}`, '');
    if (caminho === '')
      caminho = '/home';
    router.replace(`${caminho}`);
  },

  /**
   * Coloca a janela para frente, movendo ela pro final da URL
   * @param {object} router - Next.js router
   * @param {string} nomeJanela - Nome da janela
   */
  ordenaJanela(router, nomeJanela) {
    var caminho = router.asPath;
    caminho = caminho.replace(`/${nomeJanela}`, '');
    caminho += `/${nomeJanela}`;
    router.push(`${caminho}`);
  },

  /**
   * Abre uma janela de picker com o contexto especificado
   * @param {object} router - Next.js router
   * @param {string} contexto - Contexto para o picker (bg, bt, ft)
   */
  abrirPicker(router, contexto) {
    var caminho = router.asPath;
    const ctxFinal = '/picker' + contexto;
    caminho = caminho.replace(ctxFinal, '');
    caminho += ctxFinal;
    router.push(`${caminho}`);
  }
};
