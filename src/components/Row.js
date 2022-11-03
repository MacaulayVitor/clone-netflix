import { useState, useEffect } from "react";
import { getMovies } from "./api";
import styled from "styled-components";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Container = styled.div`
  color: white;
  position: relative;
`;

const H2 = styled.h2`
  padding-left: 2.2vw;
  font-family: "Oswald", sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 2vw;
  font-weight: bold;
  text-shadow: 1px 1px 3px black;
  @media (max-width: 760px) {
    font-size: 2.4vw;
  }
`;

const Card = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1.7vw;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Img = styled.img`
  width: 12.2vw;
  margin-bottom: 0.6vw;
  padding: 0.4vw;
  border-radius: 0.8vw;
  max-height: 60%;
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: 940px) {
    width: 15vw;
  }
  @media (max-width: 760px) {
    width: 20vw;
  }
`;

const imageHost = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, path }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleOnClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie.name || movie.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log("Error fetching movie trailer: ", error);
        });
    }
  };

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  return (
    <Container>
      <H2 className="row-header">{title}</H2>
      <Card>
        {movies?.map((movie) => {
          return (
            <Img
              onClick={() => handleOnClick(movie)}
              key={movie.id}
              src={`${imageHost}${movie.poster_path}`}
              alt={movie.name}
            ></Img>
          );
        })}
      </Card>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Container>
  );
}
