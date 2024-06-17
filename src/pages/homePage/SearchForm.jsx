import React, { useState } from "react";
import "./searchForm.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  return (
    <>
      <div className="hero">
        <div className="overlay d-flex flex-column justify-content-center align-items-center">
          <p style={{ fontSize: "3rem" }} className=" m-0">
            Welcome
          </p>
          <p>Millions of movies to discover. Explore Now</p>
          <div className="searchbtn">
            <form>
              <InputGroup className="mb-3  ">
                <Form.Control
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />

                <Button type="submit" variant="warning" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
