import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./customCarousel.css";

const CustomCarousel = ({ movie }) => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        {movie.map((item, i) => (
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={"https://image.tmdb.org/t/p/original" + item.poster_path}
              style={{ width: "100%", height: "50vh" }}
            />
            <Carousel.Caption>
              <h5>{item.poster}</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CustomCarousel;
