// DataContext.js
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [searchedMovieArr, setSearchedMovieArr] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState({});
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  console.log(comedyMovies);

  const handleOnClick = (genre) => {
    const movieWithGenre = { ...searchedMovie, genre: genre };
    if (genre === "comedy") {
      setAllMovies([...allMovies, movieWithGenre]);
      setComedyMovies([...comedyMovies, movieWithGenre]);
    } else {
      setAllMovies([...allMovies, movieWithGenre]);
      setActionMovies([...actionMovies, movieWithGenre]);
    }
  };

  return (
    <MyContext.Provider
      value={{
        searchedMovieArr,
        setSearchedMovieArr,
        handleOnClick,
        searchedMovie,
        setSearchedMovie,
        actionMovies,
        setActionMovies,
        comedyMovies,
        setComedyMovies,
        allMovies,
        setAllMovies,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
