import CountrySelector from  "../components/CountrySelector"
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import logo from '../images/virus.png'

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

const Logo = styled.div`
  margin: 32px auto 0;
  width: 200px;

  display: flex;
  place-items: center;

  font-size: 24px;

  img {
    width: 60px;
    margin-right: 8px;
  }
`
export default function IndexPage() {
    return <>
        <Logo>
          <img src={logo} alt="Covid-19" />
          COVID-19
        </Logo>
        <main>
            <CountrySelector></CountrySelector>
        </main>
        <GlobalStyle></GlobalStyle>
    </>
}