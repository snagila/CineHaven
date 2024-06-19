import React from "react";
import "./movieTable.css";
import Header from "../header/Header";
import pic from "../../assets/hero.png";

const MovieTable = () => {
  return (
    <>
      <Header />
      <div className="mainTable">
        <div className="title container">
          <h2>All Movies</h2>
          <hr />
        </div>
        <div className="movieTable container">
          <div className="movieCard">
            <div className="image">
              <img src={pic} alt="" className="tableImage" />
            </div>
            <div className="movieCardDescription p-2">
              <h3>Movie title</h3>
            </div>
            <div className="button d-grid p-1">
              <button className="btn btn-danger  ">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieTable;
