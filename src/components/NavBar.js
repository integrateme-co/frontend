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
              <img alt="" src={logo} width="52" height="52" />{" "}
              <span className="align-middle mx-3 h1 text-primary">
                {" "}
                integrateme.co{" "}
              </span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
