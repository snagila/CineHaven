import React, { useContext } from "react";
import "./movieTable.css";

import Header from "../../Reusuable-components/header/Header";
import { MyContext } from "../../DataContext";

const MovieTable = () => {
  const { actionMovies, setActionMovies } = useContext(MyContext);
  const handleOnDelete = (id) => {
    const movieListAfterDelete = actionMovies.filter((item) => item.id !== id);
    setActionMovies(movieListAfterDelete);
  };

  return (
    <>
      <Header />
      <div className="mainTable">
        <div className="title container">
          <h2>All Movies</h2>
          <hr />
        </div>
        <div className="movieTable container">
          {actionMovies.map((item, i) => (
            <div className="movieCard" key={i}>
              <div className="image">
                <img
                  src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                  alt=""
                  className="tableImage"
                />
              </div>

              <div className="movieCardDescription p-2">
                {item.title.length > 16 ? (
                  <p style={{ textAlign: "center" }}>{item.title}</p>
                ) : (
                  <h4>{item.title}</h4>
                )}
              </div>
              <div className="button d-grid p-1">
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
      </div>
    </>
  );
};

export default MovieTable;
