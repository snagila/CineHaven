import React, { useEffect, useState } from "react";
import "./homepage.css";
import Header from "../../Reusuable-components/header/Header";
import SearchForm from "./SearchForm";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import axios from "axios";

const HomePage = () => {
  const API_KEY = "1247f1d5fcdc0ac4053a4acf888b0234";
  const [release, setRelease] = useState();
  const movie_url = `https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}`;
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

  const fetchMovie = async () => {
    const upcomingMovies = await fetch(upcomingUrl);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
      <div className="homePage">
        <Header />
        <div
          id="homepageHero"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="">
            <SearchForm />
          </div>
        </div>
        <ScrollTable />
      </div>
    </>
  );
};

export default HomePage;
