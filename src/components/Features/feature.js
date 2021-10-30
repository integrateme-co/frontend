import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          img: feature1,
          icon: "mdi  mdi-laptop-mac",
          title: "Activity Reporting",
          desc: "Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta nobis as eligendi optio cumque nihil quis nostrum exercitationem impedit minus omnis repellendus.",
          link: "/",
        },
        {
          id: 2,
          img: feature2,
          icon: "mdi  mdi-account-group",
          title: "Team Management",
          desc: "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.",
          link: "/",
        },
        {
          id: 3,
          img: feature3,
          icon: "mdi  mdi-chart-bell-curve",
          title: "Marketing Analysis",
          desc: "At vero eos accusamus iusto odio soluta nobis est eligendi optio dignissimos ducimus qui blanditiis praesentium as voluptatum deleniti corrupti quos dolores molestias occaecati.",
          link: "/",
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
              title1="Our "
              title2="Features"
              desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
            />

            <FeatureBox features={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
