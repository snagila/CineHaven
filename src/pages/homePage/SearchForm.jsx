import React, { useState } from "react";

import { Button, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [movieName, setMovieName] = useState("");
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
      <div className=" d-flex flex-column justify-content-center align-items-center">
        <p style={{ fontSize: "3rem" }} className=" m-0">
          Welcome
        </p>
        <p>Your Gateway to Cinematic Wonders</p>
        <Form className="form d-flex gap-4 " onSubmit={handleOnSubmit}>
          <Row className="col-md-9">
            <Form.Control
              type="text"
              placeholder="Enter Movie Title"
              className="px-5 formInputField"
              name="inputfield"
              required
              onChange={handleOnChange}
            />
          </Row>
          <Row className="col-md-3 search-row  ">
            <Button className="px-4 search-button " type="submit">
              Search
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default SearchForm;
