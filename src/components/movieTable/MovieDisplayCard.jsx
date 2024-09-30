import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieDisplayCard = ({ allMovies, title }) => {
  const navigate = useNavigate();
  const handleOnClick = (title) => {
    navigate(`/searchedmovie/${title}`);
  };
  return (
    <>
      <div
        style={{
          background: "black",
          minHeight: "100vh",
        }}
      >
        <Container>
          {" "}
          <h2 style={{ color: "crimson" }} className="ps-3 fw-bold">
            {title}
          </h2>
          <hr className="text-danger" />
          {allMovies.length < 1 ? (
            <h3
              style={{ color: "crimson", padding: "4rem", textAlign: "center" }}
            >
              Sorry! No Movies has been added yet
            </h3>
          ) : (
            <Row className="pb-2 pt-3 ps-2 pe-2">
              <div className="  ps-4 ">
                <Row className="  gap-3 cursor-pointer  p-2">
                  {allMovies?.map((item) => (
                    <Col
                      className="p-0 card-col-individual "
                      xs={3}
                      md={2}
                      key={item.id}
                    >
                      <Card onClick={() => handleOnClick(item.id)}>
                        {item.poster_path ? (
                          <Card.Img
                            src={
                              "https://image.tmdb.org/t/p/original" +
                              item.poster_path
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
          )}
        </Container>
      </div>
    </>
  );
};

export default MovieDisplayCard;
