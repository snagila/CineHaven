import React, { useContext } from "react";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import MovieDisplayCard from "./MovieDisplayCard";

const MovieTable = () => {
  const { toWatchMovies, setToWatchMovies } = useContext(MyContext);

  return (
    <>
      <Header1 />
      <MovieDisplayCard allMovies={toWatchMovies} title={"Movies To Watch"} />
    </>
  );
};

export default MovieTable;
