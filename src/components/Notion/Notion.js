import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NotionLogo from "./notion-logo.svg";
import "./notion.css";

function Notion() {
  const [syncUrl, setSyncUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://api.integrateme.co/save/url")
      .then((res) => {
        console.log(res);
        setSyncUrl(res.data.syncUrl);
      })
      .catch((err) => {
        console.log(err);
        alert("Please Enter Valid Details");
      });
  });

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
        <div>{syncUrl && <span>{syncUrl}</span>}</div>
      </div>
    </div>
  );
}

export default Notion;
