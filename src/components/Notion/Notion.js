import { Link } from "react-router-dom";
import NotionLogo from "./notion-logo.svg";
import "./notion.css";
import Lottie from "react-lottie";
import notionintegration from "../../assets/lottiefiles/notionintegration.json";
import notionStep3 from "../../assets/images/notion-step3.png";
import notionStep4 from "../../assets/images/notion-step4.png";
import notionStep5 from "../../assets/images/notion-step5.png";
import notionStep6 from "../../assets/images/notion-step6.png";
import notionStep7 from "../../assets/images/notion-step7.png";

function Notion() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: notionintegration,
    rendererSettings: {
      preserveAspectRatio: "xMaxYMid meet",
    },
  };
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="notion-container mx-5 p-5">
          <div className="notion-logo">
            <img src={NotionLogo} alt="Notion Logo" width="200px" />
          </div>
          <div className="notion-text">
            <Link to="/notion-auth" style={{ textDecoration: "none" }}>
              <button className="btn btn-primary" style={{ marginTop: "6rem" }}>
                Connect to Notion
              </button>
            </Link>
          </div>
        </div>
        <div className="vl my-5"></div>
        <div className="animation-container mx-5 p-5">
          <Lottie options={options} height={400} />
        </div>
      </div>
      {/* Instructions */}
      <div className="container d-flex justify-content-center w-100">
        <div className="notion-container mx-5 py-5">
          <div className="notion-text pb-5">
            <h1 className="text-center mb-5">Instructions</h1>
            <ol>
              <li>
                Duplicate{" "}
                <a href="https://uzairali.notion.site/f22775996b054d97ad5eaf15b1e15a30?v=147babefdef04a63b8b6065ce409090e">
                  this template
                </a>{" "}
                into your notion workspace.
              </li>
              <li>
                Click on Connect to Notion and while authorizing select the page
                you just duplicated
              </li>
              <li>
                Copy the sync URL received after the Notion Authentication.
                <img
                  className="w-100 py-3"
                  src={notionStep3}
                  alt="Notion Sync URL"
                />
              </li>
              <li>
                Then go to the repository whose issue you want to sync with
                Notion page and then click on{" "}
                <button className="btn-hook btn-sm">Add webhook</button>
                <img
                  className="w-100 py-3"
                  src={notionStep4}
                  alt="Notion Webhook Add"
                />
              </li>
              <li>
                Insert the sync URL you got in step 1 into the payload URL
                field, change the content type and select{" -> "}
                <div class="form-check">
                  <input class="form-check-input" type="radio" checked />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Let me select individual events.
                  </label>
                </div>
                <img
                  className="w-100 py-3"
                  src={notionStep5}
                  alt="Let me select individual events"
                />
              </li>
              <li>
                Click on the issues checkbox{" "}
                <img
                  className="w-100 py-3"
                  src={notionStep6}
                  alt="Issues Checkbox"
                />
              </li>
              <li>
                And Finally click on{" "}
                <button className="btn btn-success mod">Add webhook</button>{" "}
                <img
                  className="w-100 py-3"
                  src={notionStep7}
                  alt="Issues Checkbox"
                />
              </li>
              <li>
                Congrats! Now you have your GitHub issues synced with your
                Notion Page. If you want to stop the sync process anytime, just
                delete the webhook from GitHub Project Settings.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notion;
