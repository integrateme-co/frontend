import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Animations
import AnimCrosspost from "../../assets/lottiefiles/crosspost.json";
import AnimGithubNotion from "../../assets/lottiefiles/githubnotion.json";

class Features extends Component {
  constructor(props) {
    super(props);
    const crosspostOptions = {
      loop: true,
      autoplay: true,
      animationData: AnimCrosspost,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const githubNotionOptions = {
      loop: true,
      autoplay: true,
      animationData: AnimGithubNotion,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    this.state = {
      features: [
        {
          id: 1,
          options: crosspostOptions,
          icon: "mdi  mdi-laptop-mac",
          title: "Crosspost your blogs",
          desc: "Crosspost your blogs across DEV, Medium and Hashnode with the click of a button and seamelessly post you dev articles across different platforms",
          link: "/crosspost",
        },
        {
          id: 2,
          options: githubNotionOptions,
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
        <section className="section" id="features">
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
