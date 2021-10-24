import "./css/LandingPage.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container">
      <div className="container__item landing-page-container">
        <div className="content__wrapper">
          <p className="coords">N 49° 16' 35.173" / W 0° 42' 11.30"</p>

          <div className="ellipses-container">
            <div className="logoContainer">
              <img className="mainLogo" src={logo} alt="logo" />
            </div>

            <div className="ellipses ellipses__outer--thin">
              <div className="ellipses ellipses__orbit"></div>
            </div>

            <div className="ellipses ellipses__outer--thick"></div>
          </div>
        </div>
      </div>
      <div className="content__main h1">
        <p>Automating</p>
        <p>your daily </p>
        <p style={{ fontSize: "12rem" }}>DEV</p>
        <p>workflow</p>
      </div>

      <div className="content__text">
        <Link to="/home" style={{ textDecoration: "none" }}>
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
