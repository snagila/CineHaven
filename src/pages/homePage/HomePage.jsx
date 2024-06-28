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
  const [trending, setIsTrending] = useState([]);
  const inCinemaUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
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

  const fetchinCinemaMovies = async () => {
    try {
      const response = await fetch(inCinemaUrl);
      const data = await response.json();
      setInCinema(data.results);
    } catch (error) {
      alert(error.message);
    }
  };

  const treandinThisWeek = async () => {
    try {
      const response = await fetch(trendingMovieUrl);
      const data = await response.json();
      setIsTrending(data.results);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchUpComingMovies();
    fetchinCinemaMovies();
    treandinThisWeek();
  }, []);

  return (
    <>
      <Header1 />
      <Hero movie={upComingMovies} />
      <ScrollTable movieArray={upComingMovies} title={"UpComing Movies"} />
      <ScrollTable movieArray={inCinema} title={"In Cinemas"} />
      <ScrollTable movieArray={trending} title={"Trending This Week"} />
    </>
  );
};

export default HomePage;
