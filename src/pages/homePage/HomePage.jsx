import React, { useContext, useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import { API_KEY } from "../../API_KEY";
import { MyContext } from "../../DataContext";
import { Spinner } from "react-bootstrap";
import Header1 from "../../Reusuable-components/Header1";
import "./homepage.css";
import MovieCard from "../../components/scrollableTable/MovieCard";

const HomePage = () => {
  const { isLoading, setIsLoading } = useContext(MyContext);
  const [upComingMovies, setUpComingMovies] = useState([]);

  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  const fetchUpComingMovies = async () => {
    try {
      const response = await fetch(upcomingUrl);
      const data = await response.json();
      console.log(data);

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
      <div id="homepageHero"></div>
      <ScrollTable movie={upComingMovies} />
      {/* <MovieCard movie={upComingMovies} /> */}
    </>
  );
};

export default HomePage;
