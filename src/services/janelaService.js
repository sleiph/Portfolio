export const janelaService = {

  _obterNovoCaminho(asPath, nomeJanela, acao) {
    const [path, search] = asPath.split('?');
    const queryStr = search ? `?${search}` : '';

    const targetDecoded = decodeURIComponent(nomeJanela);
    const segments = path
      .split('/')
      .filter(Boolean)
      .filter(seg => seg !== 'home');

    const filteredSegments = segments.filter(
      seg => decodeURIComponent(seg) !== targetDecoded
    );

    if (acao === 'ordena') {
      filteredSegments.push(targetDecoded);
    }

    if (filteredSegments.length === 0) {
      return '/home' + queryStr;
    }

    const encodedPath =
      '/' +
      filteredSegments
        .map(seg => encodeURIComponent(decodeURIComponent(seg)))
        .join('/');

    return encodedPath + queryStr;
  },

  /**
   * Fecha a janela, tirando ela da URL
   * @param {object} router - Next.js router
   * @param {string} nomeJanela - Nome da janela
   */
  fecharJanela(router, nomeJanela) {
    const novoCaminho = this._obterNovoCaminho(router.asPath, nomeJanela, 'fechar');
    router.replace(novoCaminho);
  },

  /**
   * Coloca a janela para frente, movendo ela pro final da URL
   * @param {object} router - Next.js router
   * @param {string} nomeJanela - Nome da janela
   */
  ordenaJanela(router, nomeJanela) {
    const novoCaminho = this._obterNovoCaminho(router.asPath, nomeJanela, 'ordena');
    if (novoCaminho !== router.asPath) {
      router.push(novoCaminho);
    }
  },

  /**
   * Abre uma janela de picker com o contexto especificado
   * @param {object} router - Next.js router
   * @param {string} contexto - Contexto para o picker (bg, bt, ft)
   */
  abrirPicker(router, contexto) {
    this.ordenaJanela(router, 'picker' + contexto);
  },

  /**
   * Abre a janela de seleção de temas
   * @param {object} router - Next.js router
   */
  abrirTemaPicker(router) {
    this.ordenaJanela(router, 'pickertema');
  }
};
