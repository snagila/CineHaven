import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleOnClick = (title) => {
    navigate(`/searchedmovie/${title}`);
  };
  return (
    <>
      <Card
        className="custom-color  text-white "
        style={{ width: "15rem" }}
        onClick={() => handleOnClick(movie.title)}
      >
        {movie && movie.poster_path ? (
          <Card.Img
            key={movie.id}
            style={{ height: "350px" }}
            variant="top"
            className="rounded-3"
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            alt=""
          />
        ) : (
          <Card.Img
            style={{ height: "350px" }}
            variant="top"
            className="rounded-3"
            src="https://moviea.vercel.app/assets/no-poster-af8294eb.png"
            alt=""
          />
        )}
      </Card>
    </>
  );
};

export default MovieCard;
