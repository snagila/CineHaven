import React, { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../DataContext";

function SearchForm() {
  const { movieName, setMovieName } = useContext(MyContext);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setMovieName(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchResult/${movieName}`);
  };

  return (
    <>
      {/* <div className=" d-flex flex-column justify-content-center align-items-center">
        <p style={{ fontSize: "3rem" }}>Welcome</p>

        <p>Your Gateway to Cinematic Wonders</p>
      </div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col xs={12} md={8} xl={8}>
            <Form.Control
              type="text"
              placeholder="Enter Movie Title"
              name="inputfield"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col xs={12} md={4} xl={4}>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Form> */}
    </>
  );
}

export default SearchForm;
