import React from "react";
import "./scrollableTable.css";

const ScrollTable = ({ title, movieArray }) => {
  return (
    <>
      <div className="scrollTable">
        <h2>{title}</h2>

        <div class="media-scroller snaps-inline">
          {movieArray &&
            movieArray.map((item) => (
              <div class="media-element">
                <img
                  src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                  alt=""
                />
                <p class="title">{item.title}</p>
              </div>
            ))}
          {!movieArray && (
            <div class="media-element">
              <img alt="" />
              <p class="title">title</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ScrollTable;
