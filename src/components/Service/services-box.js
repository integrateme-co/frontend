import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) => (
          <Col key={key} lg={4} md={6}>
            <div className="service-box service-warning">
              <div className="mb-5">
                <i className={service.icon}></i>
              </div>
              <h5 className="service-title text-light font-weight-normal pt-1 mb-4">
                {service.title}
              </h5>
              <p className="text-muted service-subtitle mb-4">{service.desc}</p>
              <Link to={"/" + service.link} className="read-more-icon">
                <span className="right-icon">&#8594;</span>
              </Link>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ServiceBox;
