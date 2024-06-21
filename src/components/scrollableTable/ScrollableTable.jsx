import React, { useContext } from "react";
import "./scrollableTable.css";
import { MyContext } from "../../DataContext";
import { Link } from "react-router-dom";

const ScrollTable = ({ title, movieArray }) => {
  return (
    <>
      <div className="scrollTable">
        <h2>{title}</h2>

        <div class="media-scroller snaps-inline">
          {movieArray.map((item, i) => (
            <Link to={`/searchResult/${item.title}`} key={i}>
              <div class="media-element">
                <img
                  src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                  alt=""
                />
                <p class="title">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollTable;
