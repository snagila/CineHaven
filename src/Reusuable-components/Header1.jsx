import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header1.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../DataContext";

function Header1() {
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
    <Navbar expand="lg" className="  whole-header" variant="dark">
      <Container>
        <Container fluid>
          <Navbar.Brand href="#" className="title">
            CineVision
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Action Movies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Comedy Movies
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">All Movies</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={handleOnSubmit}>
              <Form.Control
                type="search"
                placeholder="Enter Movie Title"
                className="me-2"
                aria-label="Search"
                name="inputfield"
                required
                onChange={handleOnChange}
              />
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default Header1;
