import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";

//Import Images
import icon1 from "../../assets/images/icon/1.png";
import icon2 from "../../assets/images/icon/2.png";
import icon3 from "../../assets/images/icon/3.png";

class Subscribe extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-dark">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <Row>
                  <Col xs={4}>
                    <div className="subscribe-icon">
                      <img
                        src={icon1}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="subscribe-icon">
                      <img
                        src={icon2}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="">
                      <img
                        src={icon3}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="text-center mt-5 mb-4">
                  <h6 className="text-muted font-weight-normal">
                    Subscribe To Our Newsletter For New Content,{" "}
                    <span className="d-block mt-2">Update And Giveaways!</span>
                  </h6>
                </div>
                <div className="text-center subscribe-form mt-4">
                  <Form action="#">
                    <input type="text" placeholder="Your Email Address..." />
                    <Button type="submit" color="warning">
                      Subscribe
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Subscribe;
