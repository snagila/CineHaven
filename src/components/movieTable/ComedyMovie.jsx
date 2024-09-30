import React, { useContext } from "react";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import MovieDisplayCard from "./MovieDisplayCard";

const MovieTable = () => {
  const { watchedMovies, setWatchedMovies } = useContext(MyContext);

  return (
    <>
      <Header1 />
      <MovieDisplayCard allMovies={watchedMovies} title={"Watched Movies"} />
    </>
  );
};

export default MovieTable;
