import React, { useContext } from "react";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import MovieDisplayCard from "./MovieDisplayCard";
import SpinnerComp from "../../Reusuable-components/SpinnerComp";

const MovieToWatch = () => {
  const { toWatchMovies, setToWatchMovies } = useContext(MyContext);

  return (
    <>
      <Header1 />
      {toWatchMovies && (
        <MovieDisplayCard allMovies={toWatchMovies} title={"Movies To Watch"} />
      )}
      {!toWatchMovies && <SpinnerComp />}
    </>
  );
};

export default MovieToWatch;
