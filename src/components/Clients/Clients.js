import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";
import ClientsSlider from "./Clients-slider";

//Import Images
import client1 from "../../assets/images/user/img-1.jpg";
import client2 from "../../assets/images/user/img-2.jpg";
import client3 from "../../assets/images/user/img-3.jpg";
import client4 from "../../assets/images/user/img-4.jpg";
import client5 from "../../assets/images/user/img-5.jpg";

class Clients extends Component {
  state = {
    clients: [
      {
        image: client1,
        name: "Roberta Guevara",
        post: "Web Developer",
        desc: "Sed ut perspiciatis unde omnis at iste natus error a voluptatem accusantium doloremque totam.",
      },
      {
        image: client2,
        name: "Roberta Guevara",
        post: "Web Developer",
        desc: "Sed ut perspiciatis unde omnis at iste natus error a voluptatem accusantium doloremque totam.",
      },
      {
        image: client3,
        name: "Roberta Guevara",
        post: "Web Developer",
        desc: "Sed ut perspiciatis unde omnis at iste natus error a voluptatem accusantium doloremque totam.",
      },
      {
        image: client4,
        name: "Roberta Guevara",
        post: "Web Developer",
        desc: "Sed ut perspiciatis unde omnis at iste natus error a voluptatem accusantium doloremque totam.",
      },
      {
        image: client5,
        name: "Roberta Guevara",
        post: "Web Developer",
        desc: "Sed ut perspiciatis unde omnis at iste natus error a voluptatem accusantium doloremque totam.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-dark" id="clients">
          <Container>
            <SectionTitle
              title1="Our "
              title2="Clients"
              desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
            />
            <Row>
              <Col lg={4}>
                <h3 className="font-weight-normal mt-3 line-height-1_4">
                  Some Words From Our{" "}
                  <span className="font-weight-medium text-warning">
                    Happy Clients{" "}
                  </span>
                </h3>
                <div className="testi-border my-4"></div>
                <p className="text-muted">
                  Itaque earum rerum tenetur a sapiente delectus ut aut
                  reiciendis voluptatibus maiores alias consequatur.
                </p>
              </Col>
              <Col lg={8}>
                <ClientsSlider clients={this.state.clients} />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
