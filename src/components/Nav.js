import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import './Nav.css'

const NavBar = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5vw;
    top: 0px;
    z-index: 1;
    padding: 1.4vw;
    transition-timing-function: ease-in;
    transition: all .5s;
    align-items: center;
`

const DivLogo = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    color: white;
    text-shadow: 1px 1px 2px black;
    font-family: 'Oswald', sans-serif;
    font-family: 'Roboto', sans-serif;
    padding-right: 23vw;
`

const DivAvatar = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
    text-shadow: 1px 1px 2px black;
    align-items: center;
`

const Logo = styled.img`
    position: relative;
    left: 1.4vw;
    width: 7.1vw;
    object-fit: contain;
    padding-left: .3vw;
    margin-right: 2.8vw;
    cursor: pointer;
`

const Search = styled(FaSearch)`
    color: white;
    cursor: pointer;
    &:hover{
        color: grey;
    }
`

const Bell = styled(BsFillBellFill)`
    color: white;
    cursor: pointer;
    &:hover{
        color: grey;
    }
`

const Avatar = styled.img`
    right: 1.4vw;
    width: 2.4vw;
    object-fit: contain;
    cursor: pointer;
    border-radius: 10%;
    cursor: pointer;
`

const Arrow = styled(IoMdArrowDropdown)`
    color: white;
    cursor: pointer;
    &:hover{
        color: grey;
    }
    @media (max-width: 610px) {
    display: none;
  }
`

const Span = styled.span`
    font-size: 1.1vw;
    cursor: pointer;
    &:hover{
        color: grey;
    }
    @media (max-width: 850px) {
        display: none;
  }
`

const SpanNav = styled(Span)`
    padding-right: 42vw;
    cursor: pointer;
    @media (min-width: 850px) {
        display: none;
  }
    @media (max-width: 850px) {
        display: flex;
  }
`

const ArrowNav = styled(IoMdArrowDropdown)`
    text-align: center;
    font-size: 1.8vw;
`

export default function Nav(){
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 100)
        })
        return () => {
        }
    }, [])
    return(
    <NavBar className={`nav ${show && "nav-black"}`}>
        <DivLogo>
            <Logo
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
            ></Logo>
                <Span>Início</Span>
                <Span>Séries</Span>
                <Span>Filmes</Span>
                <Span>Bombando</Span>
                <Span>Minha lista</Span>
                <Span>Navegar por idiomas</Span>   
                <SpanNav>Navegar <ArrowNav/></SpanNav>        
        </DivLogo>
      <DivAvatar>
        <Search/>
            <Bell/>        
            <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
                alt="Pasquadev"
            ></Avatar> 
            <Arrow/>
      </DivAvatar>
        </NavBar>
    )
}