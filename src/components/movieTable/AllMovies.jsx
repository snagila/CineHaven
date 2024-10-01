import React, { useContext } from "react";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import MovieDisplayCard from "./MovieDisplayCard";
import SpinnerComp from "../../Reusuable-components/SpinnerComp";

const MovieTable = () => {
  const { allMovies, setAllMovies } = useContext(MyContext);

  return (
    <>
      <Header1 />
      {allMovies && (
        <MovieDisplayCard allMovies={allMovies} title={"All Movies"} />
      )}
      {!allMovies && <SpinnerComp />}
    </>
  );
};

export default MovieTable;
