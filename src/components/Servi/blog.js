import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import BlogBox from "./blog-box";

//Import Images
import blog1 from "../../assets/images/blog/img-1.jpg";
import blog2 from "../../assets/images/blog/img-2.jpg";
import blog3 from "../../assets/images/blog/img-3.jpg";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs : [
                { img : blog1, title : "Printer took galley book.", category : "Business, Corporate", date : "25", month : "Jan", desc : "Pellensque pharetra diamt tricies pharetra tortor in tha starc amet semper smart dapibus tortor in maximus." },
                { img : blog2, title : "Enjoy pleasure aying cones.", category : "Design, Designer", date : "12", month : "Feb", desc : "Semper felis pharetr ultricies justo ornare eget consectetur venenatis they at pharetra metus eleifend rutrum pulvinar" },
                { img : blog3, title : "Welmed every pain avoided.", category : "Business, Corporate", date : "31", month : "Jun", desc : "Curabitur labore pharetra quis lacia dolor convais honcus nulla porta stiyo vitae a eros felis iaculis in imperdiet." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="blog">
                    <Container>
                    <SectionTitle
                        title="Our Blog"
                        subtitle="News"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />
                        <Row className="mt-5 pt-2">
                            <BlogBox blogs={this.state.blogs} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;