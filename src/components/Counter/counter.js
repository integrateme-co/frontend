import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

//Import Images
import counterbg from "../../assets/images/counter-bg-1.jpg";

class Counter extends Component {
    state = {
        counters : [
            { icon : "pe-7s-like2", title : "SUCCESSFUL PROJECT", postfix : "+", end : 620 },
            { icon : "pe-7s-light", title : "PROJECT IDEAS", postfix : "+", end : 350 },
            { icon : "pe-7s-smile", title : "SATISFIED CLIENTS", postfix : "+", end : 800 },
            { icon : "pe-7s-star", title : "AWARD WIN", postfix : "", end : 590 },
        ],
    }
    render() {
        return (
            <React.Fragment>
            <section className="section counter-bg" style={{background : `url(${counterbg}) center center`}}>
                <div className="bg-overlay op-75"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center mb-5">
                                <h2 className="font-weight-normal text-white mb-2">We've Completed</h2>
                                <h5 className="font-weight-normal text-white-70">More Than 1000+ Work Successfully</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row id="counter">
                        <CounterBox counters={this.state.counters} />
                    </Row>
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Counter;