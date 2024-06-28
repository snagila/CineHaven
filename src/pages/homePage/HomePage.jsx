import React, { useContext, useEffect, useState } from "react";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import { API_KEY } from "../../API_KEY";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import "./homepage.css";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "./Hero";

const HomePage = () => {
  const { isLoading, setIsLoading } = useContext(MyContext);
  const [inCinema, setInCinema] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const cinemaUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  // const trendindMovieUrl = `https://api.themoviedb.org/3/trending/movie/${time_window}?API_KEY=${API_KEY}`;
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

  const fetchUpComingMovies = async () => {
    try {
      const response = await fetch(upcomingUrl);
      const data = await response.json();
      setUpComingMovies(data.results);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUpComingMovies();
  }, []);

  return (
    <>
      <Header1 />
      <Hero movie={upComingMovies} />
      <ScrollTable movieArray={upComingMovies} title={"UpComing Movies"} />
    </>
  );
};

export default HomePage;
