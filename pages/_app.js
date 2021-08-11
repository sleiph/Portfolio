import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;700&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Fira Code', monospace;
  }

  * {
  box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primaria: '#eb5000',
    secundaria: "#eb0500",
    complementar: "#886cc6",
    janela: '#BFBFBF',
    windows: '#01007A'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
