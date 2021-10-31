import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import CrossPostModal from "./CrossPostModal";
import Dev from "./Dev";
import HashNode from "./HashNode";
import Medium from "./Medium";
import devLogo from "./images/dev-black.png";
import hashNodeIcon from "./images/hashNode-icon.png";
import mediumIcon from "./images/medium-icon.png";
import CardGroup from "react-bootstrap/CardGroup";
import { Container } from "react-bootstrap";

function CrossPost() {
  const [devShow, setDevShow] = React.useState(false);
  const [hashShow, setHashShow] = React.useState(false);
  const [mediumShow, setMediumShow] = React.useState(false);

  return (
    <>
      <div className="mx-5 py-5 px-3">
        <Link to="/">
          <i class="fa-solid fa-arrow-left" style={{ fontSize: "3rem" }}></i>
        </Link>
      </div>

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        <CardGroup>
          {/* DEV */}

          <Card
            style={{
              width: "30rem",
              backgroundColor: "#1E1E2D",
              cursor: "pointer",
              borderRadius: "1rem",
            }}
            onClick={() => setDevShow(true)}
            className="mx-5"
          >
            <Card.Img variant="top" src={devLogo} className="p-5" />
            <Card.Body
              className="mx-5 p-3 mb-5"
              style={{ backgroundColor: "#151521" }}
            >
              <Card.Title className="primary fs-3">
                DEV to Medium/HashNode
              </Card.Title>
              <Card.Text style={{ color: "#92929f" }}>
                Post from a blog from DEV to Medium/HashNode
              </Card.Text>
            </Card.Body>
          </Card>

          {/* HashNode */}

          <Card
            style={{
              width: "30rem",
              backgroundColor: "#1E1E2D",
              cursor: "pointer",
              borderRadius: "1rem",
            }}
            onClick={() => setHashShow(true)}
            className="mx-5"
          >
            <Card.Img variant="top" src={hashNodeIcon} className="p-5" />
            <Card.Body
              className="mx-5 p-3 mb-5"
              style={{ backgroundColor: "#151521" }}
            >
              <Card.Title className="primary fs-3">
                HashNode to Medium/DEV
              </Card.Title>
              <Card.Text style={{ color: "#92929f" }}>
                Post from a blog from HashNode to Medium/DEV
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Medium */}

          <Card
            style={{
              width: "30rem",
              backgroundColor: "#1E1E2D",
              cursor: "pointer",
              borderRadius: "1rem",
            }}
            onClick={() => setMediumShow(true)}
            className="mx-5"
          >
            <Card.Img variant="top" src={mediumIcon} className="p-5" />
            <Card.Body
              className="mx-5 p-3 mb-5"
              style={{ backgroundColor: "#151521" }}
            >
              <Card.Title className="primary fs-3">
                Medium to HashNode/DEV
              </Card.Title>
              <Card.Text style={{ color: "#92929f" }}>
                Post from a blog from Medium to HashNode/DEV
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

      <Dev
        show={devShow}
        onHide={() => setDevShow(false)}
        title="DEV to Medium or Hashnode"
        first="DEV URL"
        firstTooltip="placeholder"
        firstIcon="fa-brands fa-dev"
        firstPlaceholder="Enter DEV URL"
        second="Medium Token ID"
        secondTooltip="placeholder"
        secondIcon="fa-brands fa-medium"
        secondPlaceholder="Enter Medium Token ID"
        third="HashNode Token ID"
        thirdTooltip="placeholder"
        thirdIcon="fa-solid fa-hashtag"
        thirdPlaceholder="Enter HashNode Token ID"
      />

      <HashNode
        show={hashShow}
        onHide={() => setHashShow(false)}
        title="HashNode to Medium or DEV"
        first="HashNode URL"
        firstTooltip="placeholder"
        firstIcon="fa-solid fa-hashtag"
        firstPlaceholder="Enter HashNode URL"
        second="Medium Token ID"
        secondTooltip="placeholder"
        secondIcon="fa-brands fa-medium"
        secondPlaceholder="Enter Medium Token ID"
        third="Dev Token ID"
        thirdTooltip="placeholder"
        thirdIcon="fa-brands fa-dev"
        thirdPlaceholder="Enter DEV Token ID"
      />

      <Medium
        show={mediumShow}
        onHide={() => setMediumShow(false)}
        title="Medium to Dev or Hashnode"
        first="Medium URL"
        firstTooltip="placeholder"
        firstIcon="fa-brands fa-medium"
        firstPlaceholder="Enter Medium URL"
        second="DEV Token ID"
        secondTooltip="placeholder"
        secondIcon="fa-brands fa-dev"
        secondPlaceholder="Enter DEV Token ID"
        third="HashNode Token ID"
        thirdTooltip="placeholder"
        thirdIcon="fa-solid fa-hashtag"
        thirdPlaceholder="Enter HashNode Token ID"
      />
    </>
  );
}

export default CrossPost;
