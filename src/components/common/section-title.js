import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-light">
                {this.props.title1}{" "}
                <span className="text-warning">{this.props.title2}</span>
              </h3>
              <p className="text-muted">{this.props.desc}</p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
