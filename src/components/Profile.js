import axios from "axios";
import { useState, useEffect } from "react";

function Profile() {
  const [mediumToken, setMediumToken] = useState("");
  const [hashNodeToken, setHashNodeToken] = useState("");
  const [devToken, setDevNodeToken] = useState("");

  useEffect(() => {
    axios
      .get("https://api.integrateme.co/save/keys")
      .then((res) => {
        console.log(res);
        setMediumToken(res.data.medium_api);
        setHashNodeToken(res.data.hashnode_api);
        setDevNodeToken(res.data.dev_api);
      })
      .catch((err) => {
        console.log(err);
        alert("Please Enter Valid Details");
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      dev_api: { devToken },
      medium_api: { mediumToken },
      hashnode_api: { hashNodeToken },
    };
    axios
      .post("https://api.integrateme.co/save/keys", body)
      .then((res) => {
        console.log(res);
        // setPosted(true);
        // setDevUrl("");
        // setMediumToken("");
        // setHashNodeToken("");
      })
      .catch((err) => {
        console.log(err);
        alert("Please Enter Valid Details");
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="mediumTokenID" class="form-label">
            Medium Token ID
          </label>
          <input
            type="text"
            class="form-control"
            id="mediumTokenID"
            value={mediumToken}
          />
        </div>
        <div class="mb-3">
          <label for="hashNodeTokenID" class="form-label">
            HashNode Token ID
          </label>
          <input
            type="text"
            class="form-control"
            id="hashNodeTokenID"
            value={hashNodeToken}
          />
        </div>
        <div class="mb-3">
          <label for="devTokenID" class="form-label">
            DEV Token ID
          </label>
          <input
            type="text"
            class="form-control"
            id="devTokenID"
            value={devToken}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Change
        </button>
      </form>
    </div>
  );
}

export default Profile;
