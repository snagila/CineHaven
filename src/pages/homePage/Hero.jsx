import React from "react";
import PlayTrailer from "../../Reusuable-components/playTrailer/PlayTrailer";

const Hero = ({ movie }) => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
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
