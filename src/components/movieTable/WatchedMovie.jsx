import React, { useContext } from "react";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import MovieDisplayCard from "./MovieDisplayCard";
import SpinnerComp from "../../Reusuable-components/SpinnerComp";

const WatchedMovies = () => {
  const { watchedMovies, setWatchedMovies } = useContext(MyContext);

  return (
    <>
      <Header1 />
      {watchedMovies && (
        <MovieDisplayCard allMovies={watchedMovies} title={"Watched Movies"} />
      )}
      {!watchedMovies && <SpinnerComp />}
    </>
  );
};

export default WatchedMovies;
