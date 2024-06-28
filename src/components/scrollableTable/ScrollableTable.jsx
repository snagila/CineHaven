import React, { useContext } from "react";
import "./scrollableTable.css";
import { MyContext } from "../../DataContext";

import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ScrollTable = ({ movieArray, title }) => {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/movieresults/${id}`);
  };
  return (
    <>
      <div style={{ background: "black" }}>
        <Row style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          <Col className="movie-events">
            <h3 className="ms-4">{title}</h3>
          </Col>
          <Col>
            <div className="table snaps-inline ">
              {movieArray?.map((item, i) => (
                <Card
                  style={{ width: "15rem", background: "black" }}
                  className="img"
                  key={item.id}
                  onClick={() => handleOnClick(item.title)}
                >
                  <Card.Img
                    style={{}}
                    src={
                      "https://image.tmdb.org/t/p/original" + item.poster_path
                    }
                    className="main-img"
                  />
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ScrollTable;
