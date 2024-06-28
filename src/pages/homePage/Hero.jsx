import React from "react";
import { API_KEY } from "../../API_KEY";
import PlayTrailer from "../../Reusuable-components/playTrailer/PlayTrailer";

const Hero = ({ movie }) => {
  const randomNumber = Math.floor(Math.random() * 20);
  const randomMovie = movie[randomNumber]?.id;
  const movieVideoUrl = `https://api.themoviedb.org/3/movie/${randomMovie?.id}/videos?api_key=${API_KEY}`;

  return (
    <>
      <div style={{ background: "black" }}>
        <div style={{ padding: "2rem" }}>
          <PlayTrailer id={randomMovie} sound={1} />
        </div>
      </div>
    </>
  );
};

export default Hero;
