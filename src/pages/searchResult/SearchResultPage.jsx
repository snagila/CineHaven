import React, { useEffect, useState } from "react";
import "./searchResultPage.css";
import Header from "../../Reusuable-components/header/Header";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import { API_KEY } from "../../API_KEY";
import { useParams } from "react-router-dom";

const SearchResultPage = () => {
  const { id } = useParams();

  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`;
  const [searchedMovieArr, setSearchedMovieArr] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState({});

  const fetchMovie = async () => {
    const response = await fetch(searchMovieUrl);
    const data = await response.json();
    const singleMovie = data.results[0];
    setSearchedMovieArr(data.results);
    setSearchedMovie(singleMovie);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);
  return (
    <>
      <div className="result">
        <Header />
        <div className="searchResult container">
          <div className="movieImage">
            <img
              className="movieImg"
              src={
                "https://image.tmdb.org/t/p/original" +
                searchedMovie.poster_path
              }
            />
          </div>
          <div className="movieDiscription">
            <h3>{searchedMovie.title}</h3>
            <div className="buttons">
              <button className="playBtn">Play Trailer</button>
              <button className="comedyBtn"> + Comedy</button>
              <button className="actionBtn">+ Action</button>
            </div>

            <div>
              <h4>Year :</h4> {searchedMovie.release_date}
            </div>

            <div>
              <h4>Plot : </h4>
              {searchedMovie.overview}
            </div>
          </div>
        </div>
        {searchedMovieArr && (
          <ScrollTable title={"Similar Movies"} movieArray={searchedMovieArr} />
        )}
      </div>
    </>
  );
};

export default SearchResultPage;
