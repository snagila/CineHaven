import React from "react";
import "./scrollableTable.css";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ScrollTable = ({ movieArray, title }) => {
  const navigate = useNavigate();
  const handleOnClick = (title) => {
    navigate(`/searchedmovie/${title}`);
  };

  return (
    <>
      <Row
        style={{
          background: "black",
        }}
        className="pb-2 pt-3 ps-2 pe-2"
      >
        <Row>
          <h3 className="ps-4" style={{ color: "whitesmoke" }}>
            {title}
          </h3>
        </Row>
        <div
          className="card-div  ps-4 snaps-inline"
          style={{
            overflowX: "auto",
          }}
        >
          <Row className="flex-nowrap  gap-3 cursor-pointer p-2">
            {movieArray?.map((item) => (
              <Col className="p-0 card-col-individual " xs={2} key={item.id}>
                <Card onClick={() => handleOnClick(item.title)}>
                  {item.poster_path ? (
                    <Card.Img
                      src={
                        "https://image.tmdb.org/t/p/original" + item.poster_path
                      }
                    />
                  ) : (
                    <Card.Img src="https://moviea.vercel.app/assets/no-poster-af8294eb.png" />
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Row>
    </>
  );
};

export default ScrollTable;
