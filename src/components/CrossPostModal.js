import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { InputGroup, FormControl, Row } from "react-bootstrap";
import "./css/CrossPostModal.css";

function CrossPostModal(props) {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [linkOne, setLinkOne] = useState("");
  const [linkTwo, setLinkTwo] = useState("");
  const [linkThree, setLinkThree] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  setLinkOne(e.target.value);
                }}
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
                  setLinkTwo(e.target.value);
                }}
                className="form-control-solid"
                placeholder={props.secondPlaceholder}
                aria-label={props.secondTooltip}
                aria-describedby={props.secondTooltip}
              />
              <Form.Check
                className="input-group-check"
                aria-label="option 1"
                checked={optionOne}
                onChange={() => setOptionOne(!optionOne)}
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
                  setLinkThree(e.target.value);
                }}
                className="form-control-solid"
                placeholder={props.thirdPlaceholder}
                aria-label={props.thirdTooltip}
                aria-describedby={props.thirdTooltip}
              />
              <Form.Check
                className="input-group-check"
                aria-label="option 2"
                checked={optionTwo}
                onChange={() => setOptionTwo(!optionTwo)}
              />
            </InputGroup>
          </div>
          <Row className="mb-5 mt-3 g-3">
            <div className="col w-75">
              <Button className="form-button w-100" type="submit">
                Submit
              </Button>
            </div>
            <div className="col w-75">
              <Button className="form-button w-100" onClick={props.onHide}>
                Cancel
              </Button>
            </div>
          </Row>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer className="mb-3">

      </Modal.Footer> */}
    </Modal>
  );
}

export default CrossPostModal;
