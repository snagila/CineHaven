import React, { useContext, useEffect, useState } from "react";
import "./searchResultPage.css";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import { API_KEY } from "../../API_KEY";
import { useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import Header1 from "../../Reusuable-components/header/Header1";
import PlayTrailer from "../../Reusuable-components/playTrailer/PlayTrailer";
import { MyContext } from "../../DataContext";

const SearchResultPage = () => {
  const [play, setPlay] = useState(false);
  const { id } = useParams();

  const {
    searchedMovieArr,
    setSearchedMovieArr,
    handleOnClick,
    searchedMovie,
    setSearchedMovie,
    allMovies,
    isLoading,
    setIsLoading,
  } = useContext(MyContext);

  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`;
  const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const fetchMovie = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(searchMovieUrl);
      const data = await response.json();
      const singleMovie = data.results[0];
      setSearchedMovieArr(data.results);
      setIsLoading(false);
      setSearchedMovie(singleMovie);
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchMovieVideoUrl = async () => {
    const response = await fetch(movieVideoUrl);
    const data = await response.json();
  };
  const duplicateMoviesPrevention = allMovies.find(
    (item) => item.id === searchedMovie.id
  );
  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <>
      <div className="result">
        <Header1 />
        {isLoading === true ? (
          <div className="spinner mt-2">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <div className="searchResult container">
            <div className="movieImage">
              {searchedMovie && searchedMovie.poster_path ? (
                <img
                  className="movieImg"
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    searchedMovie.poster_path
                  }
                />
              ) : (
                <img
                  className="movieImg"
                  src="https://moviea.vercel.app/assets/no-poster-af8294eb.png"
                />
              )}
            </div>
            <div className="movieDiscription">
              {duplicateMoviesPrevention ? (
                <h3>{searchedMovie.title} (Movie in your list)</h3>
              ) : (
                <h3>{searchedMovie.title}</h3>
              )}

              <div className="buttons">
                <button className="playBtn" onClick={() => setPlay(true)}>
                  Play Trailer
                </button>

                <div>
                  {play && (
                    <>
                      <div className="trailervideo w-100 backdrop-blur">
                        <div className="text-end">
                          <Button
                            variant="btn-link text-white"
                            onClick={() => setPlay(false)}
                          >
                            Close
                          </Button>
                        </div>
                        <PlayTrailer id={searchedMovie.id} sound={0} />
                      </div>
                    </>
                  )}
                </div>

                <button
                  className="comedyBtn"
                  disabled={duplicateMoviesPrevention}
                  onClick={() => handleOnClick("comedy")}
                >
                  + Comedy
                </button>
                <button
                  className="actionBtn"
                  disabled={duplicateMoviesPrevention}
                  onClick={() => handleOnClick("action")}
                >
                  + Action
                </button>
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
        )}

        <div
          style={{
            color: "whitesmoke",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <ScrollTable title={"Similar Movies"} movieArray={searchedMovieArr} />
        </div>
      </div>
    </>
  );
};

export default SearchResultPage;
