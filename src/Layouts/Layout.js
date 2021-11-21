import React, { Component, Suspense } from "react";

const Section = React.lazy(() => import("./Section"));
const Service = React.lazy(() => import("../components/Service/service"));
const Feature = React.lazy(() => import("../components/Features/feature"));

class Layout extends Component {
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
          <Section />
          <Service />
          <Feature />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Layout;
