import React, { useContext, useEffect, useState } from "react";
import "./homepage.css";
import Header from "../../Reusuable-components/header/Header";
import SearchForm from "./SearchForm";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";
import { API_KEY } from "../../API_KEY";
import { MyContext } from "../../DataContext";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const { isLoading, setIsLoading } = useContext(MyContext);
  const [upComingMovies, setUpComingMovies] = useState([]);

  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  const fetchUpComingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(upcomingUrl);
      const data = await response.json();
      setIsLoading(false);
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
        {isLoading === true ? (
          <div className="spinner mt-2">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <ScrollTable title={"UpComing Movies"} movieArray={upComingMovies} />
        )}
      </div>
    </>
  );
};

export default HomePage;
