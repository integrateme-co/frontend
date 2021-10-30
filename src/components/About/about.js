import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-dark" id="about">
          <Container>
            <SectionTitle
              title1="About "
              title2="Us"
              desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
            />

            <Row>
              <Col md={4}>
                <h2 className="font-weight-light line-height-1_6 text-light mb-4">
                  Passionate About Creating Templates For Setup
                </h2>
              </Col>
              <Col md={{ size: 7, offset: 1 }}>
                <Row>
                  <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">
                      Our Mission
                    </h6>
                    <p className="text-muted font-weight-light">
                      At vero eos accusamus iusto odio dignissim ducimus a
                      blandi praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sit occaecati
                      cupiditate provident similique sunt.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">
                      Our Vision
                    </h6>
                    <p className="text-muted font-weight-light">
                      Temporibus autem quibusdam et aut officiis debitis that
                      aut rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae at Itaque
                      earum rerum hic tenetur sapiente.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
