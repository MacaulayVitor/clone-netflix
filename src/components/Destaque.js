import styled from 'styled-components';
import { useState, useEffect } from 'react';
import categories, { getMovies } from './api';
import { AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const Header = styled.header`
    color: white;
    object-fit: contain;
    height: 51vw;
    background-position: 50%;
    background-size: cover;
    bottom: 0;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(opacity=100);
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
    width: 100%;
    @media (max-width: 1200px) {
        height: 61vw;
  }
  @media (max-width: 1100px) {
        height: 65vw;
  }
  @media (max-width: 1000px) {
        height: 71vw;
  }
    @media (max-width: 940px) {
        height: 75vw;
  }
  @media (max-width: 800px) {
        height: 86vw;
  }
  @media (max-width: 700px) {
     height: 97vw;
  }
  @media (max-width: 640px) {
     height: 102vw;
  }
  @media (max-width: 600px) {
     height: 110vw;
  }
  @media (max-width: 580px) {
     height: 117vw;
  }
  @media (max-width: 530px) {
     height: 124vw;
  }
  @media (max-width: 510px) {
     height: 130vw;
  }
  @media (max-width: 485px) {
     height: 135vw;
  }
`

const Content = styled.div`
    margin-left: 2.3vw;
    padding-top: 10.2vw;
    height: 2.5vw;
    @media (max-width: 1200px) {
    padding-top: 16vw;
  }
  @media (max-width: 760px) {
    text-align: center;
    margin-left: 0vw;
    padding-top: 42vw;
    height: 2.5vw;
  }
  @media (max-width: 620px) {
    padding-top: 46vw;
  }
  @media (max-width: 540px) {
    padding-top: 53vw;
  }
  @media (max-width: 500px) {
    padding-top: 58vw;
  }
`

const Title = styled.h1`
    font-size: 3.5vw;
    font-weight: 800;
    padding-bottom: 0.7vw;
    padding-left: 1.2vw;
    margin-left: 1.2vw;
    text-shadow: 1px 1px 3px black;
`

const Description = styled.p`
    width: 50vw;
    line-height: 1.3;
    padding-top: 1.2vw;
    font-size: 1.2vw;
    max-width: 24vw;
    height: 6vw;
    font-weight: 800;
    padding-left: 1.2vw;
    margin-left: 1.2vw;
    margin-bottom: 1.4vw;
    padding-bottom: 1.2vw;
    text-shadow: 1px 1px 1px black;
    font-family: 'Oswald', sans-serif;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 760px) {
        display: none;
  }
`

const Button = styled.button`
    cursor: pointer;
    background: ${props => props.primary ? "white" : "rgba(51, 51, 51, 0.5)"};
    color: ${props => props.primary ? "black" : "#fff"};
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: .3vw;
    padding-left: 1.2vw;
    padding-right: 2.1vw;
    margin-left: 2.4vw;
    padding-top: .4vw;
    padding-bottom: .4vw;
    vertical-align: middle;
    margin-top: 1.2vw;
    &:hover{
        color: #000;
        background: ${props => props.primary ? "grey" : "#e6e6e6"};
        transition: all .2s;
    }
    @media (max-width: 760px) {
        padding:.5vw 4vw .5vw 4vw;
        font-size: 2vw;
        margin: 1vw 10vw 1vw 10vw;
  }
`

const ButtonInfo = styled(Button)`
    @media (max-width: 760px) {
        display: none;
  }
`

const IconPlay = styled(BsFillPlayFill)`
    font-size: 2.4vw;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: .3vw;
    @media (max-width: 760px) {
        font-size: 5vw;
        padding-right: 1vw;
  }
`

const IconInfo = styled(AiOutlineInfoCircle)`
    font-size: 2.4vw;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: .3vw;
`

const IconInfoVisi = styled(AiOutlineInfoCircle)`
    font-size: 4vw;
    color: white;
    text-shadow: 1px 1px 3px black;
`

const IconPlus = styled(AiOutlinePlus)`
    font-size: 4vw;
    color: white;
    text-shadow: 1px 1px 3px black;
`

const ButtonVisi = styled.button`
    cursor: pointer;
    display: none;
    outline: none;
    border: none;
    background-color: transparent;
    color: white;
    text-shadow: 1px 1px 3px black;
    @media (max-width: 760px) {
        display: inline-block;
        margin: 2vw;
  }
`

export default function Destaque(){
    const [movie, setMovie] = useState([])
    const fetchRandomMovie = async () => {
        try{
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            )
          const data = await getMovies(netflixOriginalsCategory.path)
          const movies = data?.results;
          const randomIndex = Math.floor(Math.random() * movies.length)
          setMovie(movies[randomIndex])
        } catch (error){
            console.log("Banner fetchRandomMovie error: ", error)
        }
    }

    useEffect(() => {
        fetchRandomMovie()
    }, [])

    function truncate(str, n){
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return(
        <> 
        <Header style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            roundPosition: "center-center",}}
        >
            <Content>
                <Title>{movie?.title || movie?.name || movie?.original_name}</Title>                
                <Description>{truncate(movie?.overview, 150)}</Description>
                <ButtonVisi><IconPlus/><br/>Minha Lista</ButtonVisi>                
                <Button primary><IconPlay/>Assitir</Button>
                <ButtonVisi><IconInfoVisi/><br/>Saiba Mais</ButtonVisi>
                <ButtonInfo><IconInfo/> Mais Informações</ButtonInfo>
            </Content>
        </Header></>
    )
}