import CountrySelector from  "../components/CountrySelector"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html {
      font-size: 62.5%;
      min-height: 100vh;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background: #ebebeb;  

    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    width: 90%;
    max-width: 800px;

    margin: 15vh auto;
  }
`


export default function IndexPage() {
    return <>
        <main>
            <CountrySelector></CountrySelector>
        </main>
        <GlobalStyle></GlobalStyle>
    </>
}