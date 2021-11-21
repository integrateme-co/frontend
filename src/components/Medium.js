import axios from "axios";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { InputGroup, FormControl, Row } from "react-bootstrap";
import "./css/CrossPostModal.css";

function Medium(props) {
  const [isDev, toggleDev] = useState(false);
  const [isHashNode, toggleHashNode] = useState(false);
  const [mediumUrl, setMediumUrl] = useState("");
  const [devToken, setDevToken] = useState("");
  const [hashNodeToken, setHashNodeToken] = useState("");
  const [isPosted, setPosted] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isHashNode && !isDev) {
      alert("Please select atleast one of the options.");
      return;
    }
    setLoading(true);
    const body = {
      url: mediumUrl,
      dev_api: devToken,
      dev: isDev,
      hash: isHashNode,
      hash_api: hashNodeToken,
    };

    axios
      .post("https://cross-post.herokuapp.com/api/v2/medium", body)
      .then((res) => {
        console.log(res);
        setMediumUrl("");
        setDevToken("");
        setHashNodeToken("");
        console.log("Medium Success");
        setPosted(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
    setLoading(false);
  };

  const resetHandler = (e) => {
    toggleDev(false);
    toggleHashNode(false);
    setMediumUrl("");
    setDevToken("");
    setHashNodeToken("");
  };

  return (
    <Modal
      {...props}
      fullscreen="sm-down"
      contentClassName="rounded"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <i
          className="fa-solid fa-arrow-left m-3"
          onClick={props.onHide}
          style={{ cursor: "pointer" }}
        ></i>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form onSubmit={handleSubmit}>
          <div className="mb-5 text-center">
            <h1 className="mb-3">{props.title}</h1>
            <div class="text-muted fw-bold fs-5">
              If you need more info, please check the
              <a
                href="hello"
                class="fw-bolder link-primary text-decoration-none"
              >
                {" "}
                Documentation
              </a>
              .
            </div>
          </div>
          {/**********************************
                    First Input
          ************************************/}
          <div class="d-flex flex-column mb-8">
            <label class="d-flex align-items-center fs-4 fw-bold mb-2">
              <span class="required">{props.first}</span>
              <OverlayTrigger
                key="first"
                placement="right"
                overlay={
                  <Tooltip id="tooltip-first">{props.firstTooltip}</Tooltip>
                }
              >
                <i
                  className="fas fa-exclamation-circle ms-2 fs-5"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title={props.firstTooltip}
                  aria-label={props.firstTooltip}
                ></i>
              </OverlayTrigger>
            </label>
            <InputGroup className="mb-3 input-group">
              <InputGroup.Text id="first-input">
                <i class={props.firstIcon}></i>
              </InputGroup.Text>
              <FormControl
                onChange={(e) => {
                  setMediumUrl(e.target.value);
                }}
                value={mediumUrl}
                className="form-control-solid"
                placeholder={props.firstPlaceholder}
                aria-label={props.firstTooltip}
                aria-describedby={props.firstTooltip}
              />
            </InputGroup>
          </div>

          {/**********************************
                    Second Input
          ************************************/}
          <div class="d-flex flex-column mb-8">
            <label class="d-flex align-items-center fs-4 fw-bold mb-2">
              <span class="required">{props.second}</span>
              <OverlayTrigger
                key="second"
                placement="right"
                overlay={
                  <Tooltip id="tooltip-second">{props.secondTooltip}</Tooltip>
                }
              >
                <i
                  className="fas fa-exclamation-circle ms-2 fs-5"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title={props.secondTooltip}
                  aria-label={props.secondTooltip}
                ></i>
              </OverlayTrigger>
            </label>
            <InputGroup className="mb-3 input-group">
              <InputGroup.Text id="second-input">
                <i class={props.secondIcon}></i>
              </InputGroup.Text>
              <FormControl
                onChange={(e) => {
                  setDevToken(e.target.value);
                }}
                value={devToken}
                className="form-control-solid"
                placeholder={props.secondPlaceholder}
                aria-label={props.secondTooltip}
                aria-describedby={props.secondTooltip}
              />
              <Form.Check
                className="input-group-check"
                aria-label="option 1"
                checked={isDev}
                onChange={() => toggleDev(!isDev)}
              />
            </InputGroup>
          </div>

          {/**********************************
                    Third Input
          ************************************/}
          <div class="d-flex flex-column mb-8">
            <label class="d-flex align-items-center fs-4 fw-bold mb-2">
              <span class="required">{props.third}</span>
              <OverlayTrigger
                key="third"
                placement="right"
                overlay={
                  <Tooltip id="tooltip-third">{props.thirdTooltip}</Tooltip>
                }
              >
                <i
                  className="fas fa-exclamation-circle ms-2 fs-5"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title={props.thirdTooltip}
                  aria-label={props.thirdTooltip}
                ></i>
              </OverlayTrigger>
            </label>
            <InputGroup className="mb-3 input-group">
              <InputGroup.Text id="third-input">
                <i class={props.thirdIcon}></i>
              </InputGroup.Text>
              <FormControl
                onChange={(e) => {
                  setHashNodeToken(e.target.value);
                }}
                value={hashNodeToken}
                className="form-control-solid"
                placeholder={props.thirdPlaceholder}
                aria-label={props.thirdTooltip}
                aria-describedby={props.thirdTooltip}
              />
              <Form.Check
                className="input-group-check"
                aria-label="option 2"
                checked={isHashNode}
                onChange={() => toggleHashNode(!isHashNode)}
              />
            </InputGroup>
          </div>
          <Row className="mb-5 mt-3 g-3">
            <div className="col w-75">
              <Button className="form-button w-100" type="submit">
                Submit{" "}
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="ml-2"
                  />
                ) : null}
              </Button>
            </div>
            <div className="col w-75">
              <Button
                className="form-button w-100"
                onClick={(e) => resetHandler(e)}
              >
                Reset
              </Button>
            </div>
          </Row>
          {isPosted && (
            <Row className="mb-5 mt-3 g-3">
              <div className="col w-75">
                <Alert className="text-center" key="success" variant="success">
                  {" "}
                  Successful!{" "}
                </Alert>
              </div>
            </Row>
          )}
          {isError && (
            <Row className="mb-5 mt-3 g-3">
              <div className="col w-75">
                <Alert className="text-center" key="error" variant="danger">
                  {" "}
                  Error!{" "}
                </Alert>
              </div>
            </Row>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Medium;
