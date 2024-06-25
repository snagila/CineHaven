import React from "react";
import pic from "../../assets/hero.png";
import { Card, Col, Row, Stack } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Col
        gap={2}
        direction="horizontal"
        className="d-flex align-items-center justify-content-center overflow-scroll"
      >
        {movie?.map((item, i) => (
          <Card className="custom-color w-100 text-white">
            <Card.Img
              //   style={{ height: "350px" }}
              variant="top"
              className="rounded-3"
              src={"https://image.tmdb.org/t/p/original" + item.poster_path}
              alt=""
            />
            {/* <Card.Img style={{  height: '350px' }} variant="top" className='rounded-3' src="https://moviea.vercel.app/assets/no-poster-af8294eb.png" alt='' /> */}

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {/* <Card.Text className="text-secondary">{flim.release_date}</Card.Text> */}
            </Card.Body>
          </Card>
        ))}
      </Col>
    </>
  );
};

export default MovieCard;
