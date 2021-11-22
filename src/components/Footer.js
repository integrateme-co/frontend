import { Link } from "react-router-dom";
import bcm from "../assets/images/bmc-button.png";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="fixed-footer px-5">
      <div className="footer-item">
        <Link to="/github" style={{ textDecoration: "none", color: "#FFA800" }}>
          <i class="fa-solid fa-star" style={{ color: "#FFA800" }}></i>
          <span className="footer-text mx-3">us on Github</span>
        </Link>
      </div>
      <a
        className="footer-item"
        href="mailto:hey@integrateme.co"
        style={{ textDecoration: "none", color: "#FFA800" }}
      >
        <i class="fa-solid fa-envelope"></i>
        <span className="footer-text mx-3">hey@integrateme.co</span>
      </a>
      <div className="footer-item">
        <a href="https://www.buymeacoffee.com/integrateme">
          <img src={bcm} alt="BMC" width="150px" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
