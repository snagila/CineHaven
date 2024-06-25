import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./customCarousel.css";
import { Container } from "react-bootstrap";

const CustomCarousel = ({ movie }) => {
  return (
    <>
      <div className="carouselbodydiv">
        <Container>
          <Carousel data-bs-theme="dark" className="carousel-elm">
            {movie?.map((item, i) => (
              <Carousel.Item className="carousel-item">
                {console.log(item)}
                <img
                  className=" carousel-image "
                  src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default CustomCarousel;
