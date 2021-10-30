import React, { Component } from 'react';
import { Media } from "reactstrap";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TeamBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        }
    }
    
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };
        return (
            <React.Fragment>
                <Slider {...settings}
                >
                {
                    this.props.clients.map((client, key) =>
                        <div key={key} className="item">
                            <div className="testi-content m-3 position-relative">
                                <div className="testi-box p-4">
                                    <ul className="list-unstyled f-15 text-warning mb-2">
                                        <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item mr-1"><i className="mdi mdi-star ml-1"></i></li>
                                        <li className="list-inline-item mr-1"><i className="mdi mdi-star ml-1"></i></li>
                                        <li className="list-inline-item mr-1"><i className="mdi mdi-star ml-1"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star ml-1"></i></li>
                                    </ul>
                                    <p className="text-muted position-relative mb-0 f-14"><span className="f-20 mr-1">"</span> {client.desc} <span className="f-16">"</span></p>
                                </div>
                                <div className="testi-user mt-4">
                                    <Media className="media align-items-center">
                                        <img src={client.image} alt="" style={{height:48, width:48}} className="mr-3 img-fluid d-block rounded-circle"/>
                                        <Media body>
                                            <h6 className="mb-0 text-dark f-15">{client.name}</h6>
                                            <p className="text-muted mb-0 f-14">{client.post}</p>
                                        </Media>
                                    </Media>
                                </div>
                            </div>
                        </div>
                    )
                } 
                </Slider>
            </React.Fragment>
        );
    }
}

export default TeamBox;