import React, { useContext } from "react";
import "./scrollableTable.css";
import { MyContext } from "../../DataContext";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import pic from "../../assets/hero.png";

const ScrollTable = ({ title, movie }) => {
  console.log(movie);
  return (
    <>
      <div className="table snaps-inline ">
        {movie.map((item, i) => (
          <Card style={{ width: "18rem", background: "black" }} className="img">
            <Card.Img
              style={{}}
              src={"https://image.tmdb.org/t/p/original" + item.poster_path}
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default ScrollTable;
