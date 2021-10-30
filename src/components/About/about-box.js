import React, { Component } from 'react';
import { Col } from "reactstrap";

class AboutBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((data, key) =>
                        <Col lg="4" key={key}>
                            <div className={data.isLight === true ? "about-box box-shadow rounded text-center mt-4" : "about-box bg-light rounded text-center mt-4"}>
                                <i className={data.icon + " text-primary"}></i>
                                <h5 className="f-18 mt-3">{data.title}</h5>
                                <div className="lighlight-border mt-3"></div>
                                <p className="text-muted mt-3 mb-0">{data.desc}</p>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default AboutBox;