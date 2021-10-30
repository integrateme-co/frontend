import React, { Component } from 'react';
import { Col, Media } from "reactstrap";
import { Link } from "react-router-dom";

class BlogBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.blogs.map((blog, key) =>
                            <Col lg={4} key={key} >
                                <div className="blog-box box-shadow rounded p-3 mt-4">
                                    <div className="blog-img">
                                        <img src={blog.img} className="img-fluid rounded" alt=""/>
                                    </div>
                                    <Media className="mt-4">
                                        <div className="blog-date rounded">
                                            <h5 className="text-white f-14 font-weight-normal p-2 mb-0">{blog.date}</h5>
                                            <h5 className="bg-dark f-12 font-weight-normal rounded text-white p-2 mb-0 text-uppercase">{blog.month}</h5>
                                        </div>
                                        <Media body className="ml-3 mt-2">
                                            <Link to=""><h5 className="f-18 mb-1">{blog.title}</h5></Link>
                                            <p className="text-muted">{blog.category}</p>
                                        </Media>
                                    </Media>

                                    <p className="text-muted mt-2">{blog.desc}</p>
                                    <div className="mt-3">
                                        <Link to="#" className="read-more">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default BlogBox;