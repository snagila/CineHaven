import React, { useContext } from "react";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import MovieDisplayCard from "./MovieDisplayCard";

const MovieTable = () => {
  const { allMovies, setAllMovies } = useContext(MyContext);

  return (
    <>
      <Header1 />

      <MovieDisplayCard allMovies={allMovies} title={"All Movies"} />
    </>
  );
};

export default MovieTable;
