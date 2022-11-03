import styled from 'styled-components';
import { AiFillHome } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { BsCollectionPlay, BsEmojiSmile, BsArrowDownCircle } from "react-icons/bs";

const Container = styled.div`
    background-color: rgb(20, 20, 20);
    height: 7vw;
    width: 100%;
    position: fixed;
    bottom:0;
    display: none;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    @media (max-width: 760px) {
        display: flex;
  }
`

const Div = styled.div`
    color: white;
    cursor: pointer;
    font-family: "Oswald", sans-serif;
    font-family: "Roboto", sans-serif;
    font-size: 1.6vw;
`

const IconHome = styled(AiFillHome)`
    color: white;
    font-size: 2vw;
`

const IconGame = styled(FaGamepad)`
    color: white;
    font-size: 2vw;
`

const IconGal = styled(BsCollectionPlay)`
    color: white;
    font-size: 2vw;
`

const IconEmoji = styled(BsEmojiSmile)`
    color: white;
    font-size: 2vw;
`

const IconArrow = styled(BsArrowDownCircle)`
    color: white;
    font-size: 2vw;
`

export default function Footer(){
    return(
        <Container>
            <Div><IconHome/><br/>Início</Div>
            <Div><IconGame/><br/>Jogos</Div>
            <Div><IconGal/><br/>Novidades</Div>
            <Div><IconEmoji/><br/>Risadas Rápidas</Div>
            <Div><IconArrow/><br/>Downloads</Div>
        </Container>
    )
}