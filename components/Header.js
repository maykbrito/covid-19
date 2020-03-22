import styled from 'styled-components'

import logo from '../images/virus.png'

const Logo = styled.header`
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

export default function Header() {
    return <Logo>
        <img src={logo} alt="Covid-19" />
        COVID-19
    </Logo>
}