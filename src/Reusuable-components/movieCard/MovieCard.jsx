import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <Card className="custom-color  text-white " style={{ width: "15rem" }}>
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
