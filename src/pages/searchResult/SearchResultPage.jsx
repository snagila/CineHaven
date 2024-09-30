import React, { useContext, useEffect, useState } from "react";
import "./searchResultPage.css";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";

import { useParams } from "react-router-dom";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Header1 from "../../Reusuable-components/header/Header1";
import PlayTrailer from "../../Reusuable-components/playTrailer/PlayTrailer";
import { MyContext } from "../../DataContext";
import { FaCirclePlay } from "react-icons/fa6";

const SearchResultPage = () => {
  const [play, setPlay] = useState(false);
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

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

  const duplicateMoviesPrevention = allMovies.find(
    (item) => item.id === searchedMovie.id
  );
  useEffect(() => {
    fetchMovie();
  }, [id]);

  console.log(searchedMovie);
  return (
    <>
      <Header1 />
      <Container fluid className="mt-4 p-auto m-auto">
        <Row>
          <Row className="pb-4 ps-3 d-flex  justify-content-center">
            <Col xs={12} md={3}>
              <Image
                src={
                  "https://image.tmdb.org/t/p/original" +
                  searchedMovie.poster_path
                }
                className="img-fluid p-1"
              />
            </Col>
            <Col xs={12} md={8} className="play-video-col">
              <PlayTrailer id={searchedMovie.id} sound={1} />
              {/* <Image
                src={
                  "https://image.tmdb.org/t/p/original" +
                  searchedMovie.backdrop_path
                }
                className="img-fluid"
              /> */}

              <div className="play-button-container">
                <div className="dotted-circle"></div>{" "}
                <FaCirclePlay
                  size={50}
                  className="play-button"
                  onClick={() => setPlay(true)}
                />
              </div>
            </Col>
            <div>
              {play && (
                <>
                  <div className="trailervideo w-100 backdrop-blur">
                    <div className="text-end">
                      <Button
                        variant="btn-link text-danger"
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

            <Row>jgdkjsdgfksdfghskd</Row>
            {/* <Col>
            <div className="">
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
                            variant="btn-link text-danger"
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
          </Col> */}
          </Row>
          <Row>
            <ScrollTable
              title={"Similar Movies"}
              movieArray={searchedMovieArr}
            />
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default SearchResultPage;
