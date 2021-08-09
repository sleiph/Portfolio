import styled from 'styled-components'

const Main = styled.main`
  margin: 24px;
`

const Titulo = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaria};
`

export default function Home() {
  return (
    <Main>
      <Titulo>OlaMundo</Titulo>
    
      <p>comé que vc tá?</p>
    </Main>
  )
}
