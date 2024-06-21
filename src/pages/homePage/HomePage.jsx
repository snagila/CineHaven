import React, { useEffect, useState } from "react";
import "./homepage.css";
import Header from "../../Reusuable-components/header/Header";
import SearchForm from "./SearchForm";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import { API_KEY } from "../../API_KEY";

const HomePage = () => {
  const [upComingMovies, setUpComingMovies] = useState();
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  const fetchUpComingMovies = async () => {
    const response = await fetch(upcomingUrl);
    const data = await response.json();
    setUpComingMovies(data.results);
  };

  useEffect(() => {
    fetchUpComingMovies();
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
        <ScrollTable title={"UpComing Movies"} movieArray={upComingMovies} />
      </div>
    </>
  );
};

export default HomePage;
