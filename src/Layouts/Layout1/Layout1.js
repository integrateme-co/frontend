import React, { Component, Suspense } from "react";

const Section = React.lazy(() => import("./Section"));
const Service = React.lazy(() => import("../../components/Service/service"));
const About = React.lazy(() => import("../../components/About/about"));
const Feature = React.lazy(() => import("../../components/Features/feature"));
const Counter = React.lazy(() => import("../../components/Counter/counter"));
const Clients = React.lazy(() => import("../../components/Clients/Clients"));
const GetInTouch = React.lazy(() =>
  import("../../components/GetInTouch/GetInTouch")
);
const Subscribe = React.lazy(() =>
  import("../../components/Subscribe/Subscribe")
);
const Footer = React.lazy(() => import("../../components/Footer/footer"));

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          {/* Importing section */}
          <Section />

          {/* Importing service */}
          <Service />

          {/* Importing about us */}
          {/* <About /> */}

          {/* Importing feature */}
          <Feature />

          {/* Importing counter */}
          {/* <Counter /> */}

          {/* Importing clients */}
          {/* <Clients /> */}

          {/* Importing get in touch */}
          {/* <GetInTouch /> */}

          {/* Importing subscribe */}
          {/* <Subscribe /> */}

          {/* Importing footer */}
          {/* <Footer /> */}
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Layout1;
