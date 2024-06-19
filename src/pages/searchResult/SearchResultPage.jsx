import React from "react";
import "./searchResultPage.css";
import hero from "../../assets/hero.png";
import Header from "../../Reusuable-components/header/Header";
import { Row } from "react-bootstrap";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";

const SearchResultPage = () => {
  return (
    <>
      <div className="result">
        <Header />
        <div className="searchResult container">
          <div className="movieImage">
            <img className="movieImg" src={hero} />
          </div>
          <div className="movieDiscription">
            <h3>Title : </h3>
            <button className="playBtn">Play Trailer</button>
            <div>
              {" "}
              <h4>Year :</h4>
            </div>
            <div>
              <h4>Actors :</h4>
            </div>

            <div>
              <h4>imdbRating : </h4>
            </div>
            <div>
              <h4>Awards :</h4>
            </div>
            <div>
              <h4>Plot :</h4>
            </div>
          </div>
        </div>
        <ScrollTable />
      </div>
    </>
  );
};

export default SearchResultPage;
