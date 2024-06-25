import React, { useContext, useEffect, useState } from "react";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import { API_KEY } from "../../API_KEY";
import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/Header1";
import "./homepage.css";
import CustomCarousel from "./CustomCarousel";

const HomePage = () => {
  const { isLoading, setIsLoading } = useContext(MyContext);
  const [inCinema, setInCinema] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

  const cinemaUrl = `https://api.themoviedb.org/3/movie/now_playing?API_KEY=${API_KEY}`;
  // const trendindMovieUrl = `https://api.themoviedb.org/3/trending/movie/${time_window}?API_KEY=${API_KEY}`;
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?API_KEY=${API_KEY}`;
  const fetchUpComingMovies = async () => {
    try {
      const response = await fetch(upcomingUrl);
      const data = await response.json();
      console.log(data.results);
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
      {/* <div id="homepageHero"></div> */}
      <CustomCarousel movie={upComingMovies} />
      <ScrollTable movie={upComingMovies} />
      {/* <MovieCard movie={upComingMovies} /> */}
    </>
  );
};

export default HomePage;
