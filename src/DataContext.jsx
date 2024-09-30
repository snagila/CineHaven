// DataContext.js
import React, { createContext, useState } from "react";
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [movieName, setMovieName] = useState("");
  const [searchedMovieArr, setSearchedMovieArr] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState({});
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);

  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const handleOnClick = (status) => {
    const movieWithGenre = { ...searchedMovie, status: status };
    if (status === "watched") {
      setAllMovies([...allMovies, movieWithGenre]);
      setWatchedMovies([...watchedMovies, movieWithGenre]);
    } else {
      setAllMovies([...allMovies, movieWithGenre]);
      setToWatchMovies([...toWatchMovies, movieWithGenre]);
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
        watchedMovies,
        setWatchedMovies,
        toWatchMovies,
        setToWatchMovies,
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
