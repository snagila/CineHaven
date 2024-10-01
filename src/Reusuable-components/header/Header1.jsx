import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header1.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../DataContext";

function Header1() {
  const { movieName, setMovieName } = useContext(MyContext);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setMovieName(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/movieresults/${movieName}`);
  };
  return (
    <div className="whole-header">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Container fluid>
            <Link to={"/"} className="link">
              <Navbar.Brand href="#" className="title">
                CineVision
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="" id="navbarScrollingDropdown" md={6}>
                  <Link to={"/movies-to-watch"} className="link">
                    <NavDropdown.Item href="#action3">
                      Movies To watch
                    </NavDropdown.Item>
                  </Link>

                  <Link to={"/watchedMovies"} className="link">
                    <NavDropdown.Item href="#action4">
                      Watched Movies
                    </NavDropdown.Item>
                  </Link>

                  <NavDropdown.Divider />
                  <Link to={"/allMovies"} className="link">
                    <NavDropdown.Item href="#action5">
                      All Movies
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
              <Form className="d-flex " onSubmit={handleOnSubmit} md={6}>
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
    </div>
  );
}

export default Header1;
