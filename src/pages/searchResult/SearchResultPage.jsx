import React, { useContext, useEffect, useState } from "react";
import "./searchResultPage.css";

import { useParams } from "react-router-dom";
import {
  Badge,
  Button,
  Col,
  Container,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import Header1 from "../../Reusuable-components/header/Header1";
import PlayTrailer from "../../Reusuable-components/playTrailer/PlayTrailer";
import { MyContext } from "../../DataContext";
import { FaCirclePlay, FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import SimilarMovies from "./SimilarMovies";

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

  const searchMovieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const fetchMovie = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(searchMovieUrl);
      const data = await response.json();
      setIsLoading(false);
      setSearchedMovie(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const duplicateMoviesPrevention = allMovies.find(
    (item) => item.id === searchedMovie.id
  );

  // logic for movie to show in hrs and minutes
  const runtime = searchedMovie?.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  // for company poster
  const companyPoster = searchedMovie?.production_companies?.map(
    (company) => company?.logo_path
  );

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <>
      <div style={{ backgroundColor: "black", color: "whitesmoke" }}>
        {" "}
        <Header1 />
        <Container className="pt-4 p-auto m-auto">
          <Row>
            {/* top movie title row */}
            <Row>
              <h1 className="">{searchedMovie.title}</h1>{" "}
            </Row>

            {/* release and time row */}
            <Row>
              <div className="d-flex flex-row pb-2">
                <div>
                  {searchedMovie?.release_date?.substring(0, 4)} <LuDot />
                </div>
                <div>
                  {searchedMovie?.origin_country?.map((country) => country)}{" "}
                  <LuDot />
                </div>
                <div>
                  {hours}h {minutes}m
                </div>
              </div>
            </Row>
          </Row>

          <Row>
            {/* TRAILER PART */}
            <Row className="pb-4  d-flex  justify-content-center">
              {/* movie image */}
              <Col md={3} className="movie-image-col">
                {searchedMovie.poster_path ? (
                  <Image
                    src={
                      "https://image.tmdb.org/t/p/original" +
                      searchedMovie.poster_path
                    }
                    className="img-fluid p-1"
                  />
                ) : (
                  <Image
                    className="img-fluid p-1"
                    src="https://moviea.vercel.app/assets/no-poster-af8294eb.png"
                  />
                )}
              </Col>
              <Col xs={12} md={8} className="play-video-col">
                <PlayTrailer id={searchedMovie.id} sound={1} />

                <div className="play-button-container">
                  <div className="dotted-circle"></div>{" "}
                  <FaCirclePlay
                    size={50}
                    className="play-button"
                    onClick={() => setPlay(true)}
                  />
                </div>
              </Col>

              {/* video div */}
              <div className={play ? "blur-background" : ""}></div>
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

              <Row className="pt-2 gap-1 align-items-center">
                <Col>
                  <div className="d-flex gap-1 align-items-center pt-2 scroll-container">
                    <span className="fs-5 fw-bold genre-titlestatic-span">
                      {" "}
                      Genre :
                    </span>
                    {searchedMovie.genres?.map((genre) => {
                      return (
                        <Badge key={genre.id} className="bg-danger  ">
                          {genre.name}
                        </Badge>
                      );
                    })}
                  </div>
                </Col>

                <Col md={4} xs={12}>
                  {!duplicateMoviesPrevention && (
                    <div className=" d-flex gap-2  ">
                      <Button
                        size="sm"
                        disabled={duplicateMoviesPrevention}
                        onClick={() => handleOnClick("watched")}
                      >
                        Watched
                      </Button>
                      <Button
                        size="sm"
                        className="text-nowrap "
                        disabled={duplicateMoviesPrevention}
                        onClick={() => handleOnClick("tobewatched")}
                      >
                        To Watch
                      </Button>
                    </div>
                  )}

                  {duplicateMoviesPrevention && (
                    <div className=" d-flex gap-2  ">
                      <Badge size={"sm"}>Movie in your list</Badge>
                    </div>
                  )}
                </Col>
              </Row>

              {/* <Col>
            <div className="">
              {duplicateMoviesPrevention ? (
                <h3>{searchedMovie.title} (Movie in your list)</h3>
              ) : (
                <h3>{searchedMovie.title}</h3>
              )}

              

                

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
             
             
            </div>
          </Col> */}
            </Row>
            {/* STAR RATING */}

            <Row className="d-flex ">
              <Col xs={8} className="ps-4">
                {/* movie rating */}
                <Row>
                  <div className="d-flex flex-row align-items-center">
                    <div className="pe-1">
                      <FaStar color="yellow" />{" "}
                    </div>

                    <div className="pe-2 ">
                      {searchedMovie?.vote_average?.toString()?.substring(0, 3)}{" "}
                      <span
                        className="text-secondary  "
                        style={{ fontSize: "12px" }}
                      >
                        /10
                      </span>
                    </div>
                    <div
                      className="text-secondary"
                      style={{ fontSize: "12px" }}
                    >
                      {searchedMovie?.vote_count}
                    </div>
                  </div>
                </Row>
                <Row className="fw-bold">{searchedMovie.tagline}</Row>
                <Row>{searchedMovie.overview}</Row>
              </Col>

              <Col className="description-col-xs-poster">
                {searchedMovie.poster_path ? (
                  <Image
                    src={
                      "https://image.tmdb.org/t/p/original" +
                      searchedMovie.poster_path
                    }
                    className="img-fluid p-1"
                  />
                ) : (
                  <Image
                    className="img-fluid p-1"
                    src="https://moviea.vercel.app/assets/no-poster-af8294eb.png"
                  />
                )}
              </Col>
            </Row>

            <Row className="pt-3 p">
              <Col>
                <div className="borderForDiscRow">
                  <span style={{ display: "inline", fontWeight: "bold" }}>
                    Status
                  </span>
                  <span
                    style={{
                      display: "inline",
                      color: "#1C97FF",
                      paddingInlineStart: "2rem",
                    }}
                  >
                    {" "}
                    {searchedMovie.status}
                  </span>
                </div>

                <div className="borderForDiscRow">
                  <span style={{ display: "inline", fontWeight: "bold" }}>
                    {" "}
                    Release Date
                  </span>
                  <span
                    style={{
                      display: "inline",
                      color: "#1C97FF",
                      paddingInlineStart: "2rem",
                    }}
                  >
                    {searchedMovie.release_date}
                  </span>
                </div>

                <div className="borderForDiscRow">
                  <span style={{ display: "inline", fontWeight: "bold" }}>
                    Budget
                  </span>
                  <span
                    style={{
                      display: "inline",
                      color: "#1C97FF",
                      paddingInlineStart: "2rem",
                    }}
                  >
                    $ {searchedMovie.budget}
                  </span>
                </div>

                <div className="borderForDiscRow">
                  <span style={{ display: "inline", fontWeight: "bold" }}>
                    Revenue
                  </span>
                  <span
                    style={{
                      display: "inline",
                      color: "#1C97FF",
                      paddingInlineStart: "2rem",
                    }}
                  >
                    $ {searchedMovie.revenue}
                  </span>
                </div>
              </Col>

              {/* company logos column */}
              <Col className=" .scroll-container" md={6} xs={12}>
                <Row className=" ">
                  {companyPoster?.map(
                    (company) =>
                      company && (
                        <Col md={4} xs={3}>
                          <div className="companyPsoterMap-Div">
                            <Image
                              src={
                                "https://image.tmdb.org/t/p/original" + company
                              }
                              className="img-fluid "
                            />
                          </div>
                        </Col>
                      )
                  )}
                </Row>
              </Col>
            </Row>
            <Row>
              <SimilarMovies id={id} />
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchResultPage;
