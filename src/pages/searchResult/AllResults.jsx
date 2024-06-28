import React, { useEffect, useState } from "react";
import "./allResults.css";
import Header1 from "../../Reusuable-components/header/Header1";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API_KEY";
import MovieCard from "../../Reusuable-components/movieCard/MovieCard";

const AllResults = () => {
  const [allSearchedMovies, setAllSearchedMovies] = useState([]);
  const { id } = useParams();

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
      <div
        className="allresults"
        style={{
          color: "whitesmoke",
          background: "black",
          minHeight: "100vh",
          padding: "3rem",
        }}
      >
        <div className="allresultsTitle">
          <div className="ms-3">
            <h3 className="mb-5">
              Search Results for "<span style={{ color: "red" }}>{id}</span>"
            </h3>
            <div className="movielist">
              {allSearchedMovies?.map((item, i) => (
                <MovieCard movie={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllResults;
