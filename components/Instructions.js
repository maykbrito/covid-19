import styled from 'styled-components'

import agreement from '../images/agreement.png'
import cold from '../images/cold.png'
import cooking from '../images/cooking.png'
import fever from '../images/fever.png'
import firstAidKit from '../images/first-aid-kit.png'
import flight from '../images/flight.png'
import medicalMask from '../images/medical-mask.png'
import stayAtHome from '../images/stay-at-home.png'
import washingHand from '../images/washing-hand.png'


const InstructionsWrapper = styled.section`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: minmax(100px, auto);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
        grid-template-rows: minmax(auto, auto);
    }
`

const InstructionWrapper = styled.div`
    background-color: #fff;
    padding: 16px;

    border-radius: 6px;
    box-shadow: 0 0 1px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.1);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.4s;

    img {
        width:100%;
        max-width: 64px;
    }

    p {
        text-align: center;
        margin: 16px 0 4px;

        font-size: 1.2rem;
    }

    &:hover {
        background-color: #dd5555;
        color: white;
    }

    &:nth-child(1) {
        grid-column: span 2;
    }

    &:nth-child(2) {
        grid-column: span 1;
        grid-row: span 2;
    }

    &:nth-child(4) {
        grid-column: span 1;
        grid-row: span 2;
    }

    &:nth-child(7) {
        grid-column: span 3;
        grid-row: span 2;
    }

    @media (max-width: 768px) {
        grid-column: unset !important;
        grid-row: unset !important;
    }

`

const Instruction = ({children, src}) => {
    return <InstructionWrapper>
        <img src={src} alt="Imagem"/>
        <p>{children}</p>
    </InstructionWrapper>
}
export default function Instructions() {
    return <InstructionsWrapper>
        <Instruction src={agreement}>
            Não aperte mãos.
        </Instruction>
        <Instruction src={cold}>
            Quando estiver espirrando ou tossindo, cubra sua boca e nariz com lenço
        </Instruction>
        <Instruction src={fever}>
            Evite contato com animais que estão doentes.
        </Instruction>
        <Instruction src={flight}>
            Não viaje se você tiver tosse e febre.
        </Instruction>
        <Instruction src={medicalMask}>
            Se tiver dúvidas da sua situação, use máscaras.
        </Instruction>
        <Instruction src={washingHand}>
            Lave as mãos por cerca de 20 segundos, com sabão e água, após tocar em superfícies e animais.
        </Instruction>
        <Instruction src={stayAtHome}>
            Fique em casa durante a quarentena, e só saia em necessidade extrema.
        </Instruction>
    </InstructionsWrapper>
}