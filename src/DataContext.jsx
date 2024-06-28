// DataContext.js
import React, { createContext, useState } from "react";
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [movieName, setMovieName] = useState("");
  const [searchedMovieArr, setSearchedMovieArr] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState({});
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [play, setPlay] = useState();

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
        movieName,
        setMovieName,
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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
