import React from "react";
import "./movieTable.css";
import Header from "../header/Header";
import pic from "../../assets/hero.png";

const MovieTable = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="mainTable">
        <div className="title container">
          <h2>All Movies</h2>
        </div>
        <div className="movieTable">
          <div className="movieCard">
            <div className="image">
              <img src={pic} alt="" className="tableImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieTable;
