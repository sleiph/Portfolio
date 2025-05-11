import Head from 'next/head';
import './styles/global.css';

export const theme = {
  desktop: {
    janela: '#BFBFBF',
    titulo_janela: '#01007A',
    fundo: '#008080',
    fundo_janela: 'white'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ricardo Gomes</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content={theme.desktop.titulo_janela}></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
