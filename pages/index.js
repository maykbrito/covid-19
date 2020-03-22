import { createGlobalStyle } from 'styled-components'

import Header from '../components/Header'
import CountrySelector from  "../components/CountrySelector"
import Instructions from "../components/Instructions"

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

    margin: 32px auto 0;
  }
`

export default function IndexPage() {
    return <>
        <Header></Header>
        <main>
            <CountrySelector></CountrySelector>
            <Instructions></Instructions>
        </main>
        <GlobalStyle></GlobalStyle>
    </>
}