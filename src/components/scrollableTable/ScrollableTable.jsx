import React, { useContext } from "react";
import "./scrollableTable.css";
import { MyContext } from "../../DataContext";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ScrollTable = ({ movie }) => {
  return (
    <>
      <div className="table snaps-inline ">
        {movie?.map((item, i) => (
          <Card
            style={{ width: "15rem", background: "black" }}
            className="img"
            key={i}
          >
            <Card.Img
              style={{}}
              src={"https://image.tmdb.org/t/p/original" + item.poster_path}
              className="main-img"
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default ScrollTable;
