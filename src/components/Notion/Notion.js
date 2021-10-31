import { Link } from "react-router-dom";
import NotionLogo from "./notion-logo.svg";
import "./notion.css";

function Notion() {
  return (
    <div>
      <div className="w-100">
        <div className="connect-notion">
          <img src={NotionLogo} width="25%" style={{ fill: "white" }} />
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
