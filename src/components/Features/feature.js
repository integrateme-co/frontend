import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
// import feature1 from "../../assets/images/features/img-1.png";
import feature1 from "../images/notion_logo.svg";
import feature2 from "../images/crosspost_ill.svg";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          img: feature1,
          icon: "mdi  mdi-laptop-mac",
          title: "Crosspost your blogs",
          desc: "Crosspost your blogs across DEV, Medium and Hashnode with the click of a button and seamelessly post you dev articles across different platforms",
          link: "/crosspost",
        },
        {
          id: 2,
          img: feature2,
          icon: "mdi  mdi-account-group",
          title: "Github Notion Sync",
          desc: "Sync your GitHub repository issues with Notion and keep track of your progress.",
          link: "/notion",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-dark" id="features">
          <Container>
            <SectionTitle
              title1="Know about our "
              title2="Integrations"
              desc="Explore the various possibilities with integrateme.co"
            />

            <FeatureBox features={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
