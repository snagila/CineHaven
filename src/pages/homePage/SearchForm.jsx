import React from "react";

import { Button, Form, InputGroup, Row } from "react-bootstrap";

function SearchForm() {
  return (
    <>
      <div className="hero">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <p style={{ fontSize: "3rem" }} className=" m-0">
            Welcome
          </p>
          <p>Your Gateway to Cinematic Wonders</p>
          <Form className="d-flex gap-4">
            <Row className="col-md-9">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Title"
                  className="px-5 formInputField"
                  name="inputfield"
                />
              </Form.Group>
            </Row>
            <Row className="col-md-3 search-row ">
              <Button className="px-4 search-button" type="submit">
                Search
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
