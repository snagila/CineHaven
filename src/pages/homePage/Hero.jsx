import React from "react";
import PlayTrailer from "../../Reusuable-components/playTrailer/PlayTrailer";
import { Col, Row } from "react-bootstrap";

const Hero = ({ movie }) => {
  const randomNumber = Math.floor(Math.random() * 20);
  const randomMovie = movie[randomNumber]?.id;

  return (
    <>
      <Row style={{ background: "black" }}>
        <Col>
          <PlayTrailer id={randomMovie} sound={1} />
        </Col>
      </Row>
    </>
  );
};

export default Hero;
