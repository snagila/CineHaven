import React, { useEffect, useState } from "react";
import "./allResults.css";
import Header1 from "../../Reusuable-components/header/Header1";
import { useParams } from "react-router-dom";

import MovieCard from "../../Reusuable-components/movieCard/MovieCard";
import MovieDisplayCard from "../../components/movieTable/MovieDisplayCard";

const AllResults = () => {
  const [allSearchedMovies, setAllSearchedMovies] = useState([]);
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`;
  const fetchMovie = async () => {
    const response = await fetch(searchMovieUrl);
    const data = await response.json();
    setAllSearchedMovies(data.results);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);
  return (
    <>
      <Header1 />

      <MovieDisplayCard
        allMovies={allSearchedMovies}
        title={`Search result for "${id}"`}
      />
    </>
  );
};

export default AllResults;
