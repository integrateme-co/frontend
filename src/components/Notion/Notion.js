import { Link } from "react-router-dom";
import NotionLogo from "./notion-logo.svg";
import "./notion.css";

function Notion() {
  return (
    <div>
      <div className="mx-5 py-5 px-3">
        <Link to="/">
          <i class="fa-solid fa-arrow-left" style={{ fontSize: "3rem" }}></i>
        </Link>
      </div>
      <div className="w-100">
        <div className="connect-notion">
          <img
            src={NotionLogo}
            width="25%"
            style={{ fill: "white" }}
            alt="Notion Logo"
          />
          <Link to="/notion-auth" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary" style={{ marginTop: "6rem" }}>
              Connect to Notion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notion;
