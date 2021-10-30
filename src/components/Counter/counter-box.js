import React, { Component } from 'react';
import { Col } from "reactstrap";
import CountUp from 'react-countup';

class CounterBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.counters.map((counter, key) =>
                        <Col lg={3} md={6} key={key} >
                            <div className="counter-box text-center text-white mb-4 mb-lg-0">
                                <i className={counter.icon + " counter-icon mb-4"}></i>
                                <h2 className="mb-2 font-weight-normal">
                                    <span className="counter-value mt-4">
                                        <CountUp
                                            end={counter.end}
                                            duration={8}
                                        />
                                    </span>
                                    {counter.postfix}
                                </h2>
                                <p className="mb-0 text-white-70 text-uppercase f-14">{counter.title}</p>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default CounterBox;