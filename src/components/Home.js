import Container from "react-bootstrap/Container";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="mx-5 py-5 px-3">
        <Link to="/">
          <i class="fa-solid fa-arrow-left" style={{ fontSize: "3rem" }}></i>
        </Link>
      </div>
      <Container className="mt-5 h-75">
        <Row>
          <Col className="p-3">
            <Link to="/wip" style={{ textDecoration: "none" }}>
              <Card
                style={{
                  backgroundColor: "rgba(255, 168, 0, 0.2)",
                  color: "#cdcdde",
                  borderRadius: "0.75rem",
                }}
              >
                <Card.Header
                  as="h1"
                  className="p-4"
                  style={{ color: "#FFA800" }}
                >
                  Schedule Post on DEV
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>
                    Publish your pre-drafted post on dev.to at your convinient
                    time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className="p-3">
            <Link to="/crosspost" style={{ textDecoration: "none" }}>
              <Card
                style={{
                  backgroundColor: "rgba(33, 46, 72, 0.6)",
                  color: "#cdcdde",
                  borderRadius: "0.75rem",
                }}
              >
                <Card.Header
                  as="h1"
                  className="p-4"
                  style={{ color: "#3699FF" }}
                >
                  Crosspost your Blog
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>
                    Publish your blog from one platform to another. ( Medium{" "}
                    {"<->"} HashNode {"<->"} DEV )
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <Link to="/wip" style={{ textDecoration: "none" }}>
              <Card
                style={{
                  backgroundColor: "rgba(246, 78, 96, 0.2)",
                  color: "#cdcdde",
                }}
              >
                <Card.Header
                  as="h1"
                  className="p-4"
                  style={{ color: "#F64E60" }}
                >
                  NotionMailer
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>Coming soon.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className="p-3">
            <Link to="/wip" style={{ textDecoration: "none" }}>
              <Card
                style={{
                  backgroundColor: "rgba(28, 50, 56, 1)",
                  color: "#cdcdde",
                }}
              >
                <Card.Header
                  as="h1"
                  className="p-4"
                  style={{ color: "#0BB783" }}
                >
                  Discord and Article
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>Coming soon.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
