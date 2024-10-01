import React, { useEffect, useState } from "react";
import "./allResults.css";
import Header1 from "../../Reusuable-components/header/Header1";
import { useParams } from "react-router-dom";
import MovieDisplayCard from "../../components/movieTable/MovieDisplayCard";
import SpinnerComp from "../../Reusuable-components/SpinnerComp";

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
      {!allSearchedMovies && <SpinnerComp />}
      {allSearchedMovies && (
        <MovieDisplayCard
          allMovies={allSearchedMovies}
          title={`Search result for "${id}"`}
        />
      )}
    </>
  );
};

export default AllResults;
