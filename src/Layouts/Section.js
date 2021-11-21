import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie";

//Import LottieFiles
import main from "../assets/lottiefiles/main.json";

//Import images
import logo from "../components/logo.png";

function LoginButton() {
  return (
    <Link to="/login" className="btn btn-warning">
      GET STARTED <span className="ml-2 right-icon">&#8594;</span>
    </Link>
  );
}

function LogoutButton() {
  return (
    <>
      <Link to="/logout" className="btn btn-warning">
        Logout <span className="ml-2 right-icon">&#8594;</span>
      </Link>
      <Link to="/profile" className="btn btn-warning">
        Profile <span className="ml-2 right-icon">&#8594;</span>
      </Link>
    </>
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
    const options = {
      loop: true,
      autoplay: true,
      animationData: main,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
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
              <Link to="/">
                <h1 className="hero-1-main text-primary text-center font-weight-normal px-4">
                  integrateme.co
                </h1>
              </Link>
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
                      <Typewriter
                        options={{
                          strings: ["DEV WORKFLOW"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
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
                  {/* <img
                    src={hero1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  /> */}
                  <Lottie options={options} />
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
