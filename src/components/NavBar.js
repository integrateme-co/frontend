import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./logo.png";
import { Link } from "react-router-dom";

import "./css/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar variant="dark" className="py-5">
        <Container className="mx-3">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block"
              />{" "}
              <span
                className="align-middle mx-3 h1"
                style={{ color: "#732893" }}
              >
                {" "}
                Integrateme.co{" "}
              </span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
