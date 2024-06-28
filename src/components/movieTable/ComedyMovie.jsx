import React, { useContext } from "react";
import "./movieTable.css";

import { MyContext } from "../../DataContext";
import Header1 from "../../Reusuable-components/header/Header1";
import { useNavigate } from "react-router-dom";

const MovieTable = () => {
  const { comedyMovies, setComedyMovies } = useContext(MyContext);

  const handleOnDelete = (id) => {
    const movieListAfterDelete = comedyMovies.filter((item) => item.id !== id);
    setComedyMovies(movieListAfterDelete);
  };
  const navigate = useNavigate();
  const handleOnClick = (title) => {
    navigate(`/searchedmovie/${title}`);
  };
  return (
    <>
      <Header1 />
      <div style={{ minHeight: "100vh", background: "black" }}>
        <div className="mainTable">
          <div className="title container">
            <h2>Comedy Movies</h2>
            <hr />
          </div>
          {comedyMovies.length < 1 ? (
            <h3
              style={{ color: "crimson", padding: "4rem", textAlign: "center" }}
            >
              Sorry! No Movies has been added yet
            </h3>
          ) : (
            <div className="movieTable container">
              {comedyMovies.map((item, i) => (
                <div className="movieCard" key={i}>
                  {console.log(item.id)}
                  <div className="image">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" + item.poster_path
                      }
                      alt=""
                      className="tableImage"
                      onClick={() => handleOnClick(item.title)}
                    />
                  </div>

                  <div className="button d-flex justify-content-center p-1">
                    <button
                      className="btn btn-danger  "
                      onClick={() => handleOnDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieTable;
