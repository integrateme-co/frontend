import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import hero1 from "../../assets/images/hero-1-img.png";
import logo from "../../components/logo.png";

function LoginButton(params) {
  return (
    <Link to="/login" className="btn btn-warning">
      GET STARTED <span className="ml-2 right-icon">&#8594;</span>
    </Link>
  );
}

function LogoutButton(params) {
  return (
    <Link to="/logout" className="btn btn-warning">
      Logout <span className="ml-2 right-icon">&#8594;</span>
    </Link>
  );
}

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedin: false };
    if (typeof sessionStorage.getItem("sessionid") !== "undefined") {
      this.setState({ isLoggedin: true });
    }
  }

  render() {
    let GetStarted;
    const isLoggedin = this.state.isLoggedin;
    if (isLoggedin) {
      GetStarted = <LogoutButton />;
    } else {
      GetStarted = <LoginButton />;
    }
    return (
      <React.Fragment>
        <section
          className="hero-1-bg position-relative bg-dark d-flex align-items-center"
          id="home"
        >
          <Container>
            <div className="hero-main d-flex align-middle">
              <img
                alt=""
                src={logo}
                width="60"
                height="60"
                className="d-inline-block"
              />{" "}
              <h1 className="hero-1-main text-primary text-center font-weight-normal px-4">
                integrateme.co
              </h1>
            </div>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="hero-title pr-lg-5">
                  <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                    Integrateme.co
                  </p>
                  <h1 className="hero-1-title mb-4 font-weight-normal line-height-1_4">
                    Automating your daily{" "}
                    <span className="text-primary font-weight-medium">
                      DEV WORKFLOW
                    </span>
                  </h1>
                  <p className="text-muted mb-4 pb-2">
                    We offer services to ease your daily DEV workflow by
                    automating them through rigourously tested APIs, so you can
                    concentrate on what really matters.
                  </p>
                  {GetStarted}
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-5 mt-lg-0">
                  <img
                    src={hero1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
