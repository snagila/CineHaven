import React from "react";
import PlayTrailer from "../../Reusuable-components/playTrailer/PlayTrailer";

const Hero = ({ movie }) => {
  const randomNumber = Math.floor(Math.random() * 20);
  const randomMovie = movie[randomNumber]?.id;

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
