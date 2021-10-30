import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Footer link
import FooterLinks from "./footer-links";

//Import Logo
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  state = {
    links: [
      {
        id: 1,
        title: "Services",
        child: [
          { title: "Digital Marketing", link: "/" },
          { title: "Business Analysis", link: "/" },
          { title: "How It Work", link: "/" },
          { title: "Fix & Flip", link: "/" },
          { title: "Social Activation", link: "/" },
        ],
      },
      {
        id: 2,
        title: "About Us",
        child: [
          { title: "Contact Us", link: "/" },
          { title: "FAQs", link: "/" },
          { title: "Blog", link: "/" },
          { title: "Privacy Policy", link: "/" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="footer bg-dark">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="mb-4">
                  <Link to="/">
                    <img
                      src={logodark}
                      alt=""
                      className="logo-dark"
                      height="26"
                    />
                  </Link>
                  <p className="text-muted mt-4 mb-2">
                    Yourcompanyemailid@gmail.com
                  </p>
                  <h6 className="text-muted font-weight-normal">
                    +00 1234-5678-90
                  </h6>
                </div>
              </Col>
              <Col lg={8}>
                <Row>
                  {this.state.links.map((link, key) => (
                    <Col key={key} md={4}>
                      <h6 className="footer-list-title text-dark mb-3">
                        {link.title}
                      </h6>
                      <ul className="list-unstyled company-sub-menu">
                        {link.child.map((fLink, key) => (
                          <li key={key}>
                            <Link to={fLink.link}>{fLink.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  ))}

                  <Col md={4}>
                    <h6 className="footer-list-title text-dark mb-3">
                      Our Address
                    </h6>
                    <p className="text-muted f-14">
                      4806 Spring Haven Trail South Orange, NJ 07079
                    </p>
                    <h6 className="text-muted pb-2">
                      Email: Support@gamil.com
                    </h6>
                    <ul className="list-unstyled footer-social-list mt-4">
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="mdi mdi-instagram"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="mdi mdi-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Render footer links */}
            <FooterLinks />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Footer;
