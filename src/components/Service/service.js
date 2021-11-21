import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: "pe-7s-way service-icon",
          title: "CrossPost",
          desc: "Crosspost your blogs across DEV, Medium and Hashnode with the click of a button and seamelessly post you dev articles across different platforms.",
          link: "crosspost",
        },
        {
          icon: "pe-7s-loop service-icon",
          title: "Github Notion Sync",
          desc: "Sync your GitHub repository issues with Notion and keep track of your progress.",
          link: "notion",
        },
        {
          icon: "pe-7s-light service-icon",
          title: "Got an integration in mind?",
          desc: "Create an issue in our GitHub Repo",
          link: "github-issues",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <SectionTitle
              title1="Explore "
              title2="Integrations"
              desc="Integrations for the developers"
            />

            <Row>
              <ServiceBox services={this.state.services} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Service;
