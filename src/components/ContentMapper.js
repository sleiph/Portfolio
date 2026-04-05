const CONTENT_MAP = {
    projetos: <Projetos />,
    conhecimentos: <Conhecimentos />
};

export const getConteudo = (nome) => CONTENT_MAP[nome] || null;