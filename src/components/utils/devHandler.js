import axios from "axios";

export const postHandler = (mediumUserId) => {
  const body = {
    url: url,
    medium: true,
    hash: true,
    medium_userID: mediumUserId,
    medium_token: medium,
    hash_token: hashNode,
  };

  axios
    .post("https://integrate-app-xyz.herokuapp.com/api/v2/dev", body)
    .then((res) => {
      console.log(res);
      setIsPosted(true);
      setUrl("");
      setMedium("");
      setHashNode("");
    })
    .catch((err) => {
      console.log(err);
      alert("Please Enter Valid Details");
    });
};

export const formSubmitHandler = (medium) => {
  let mediumUserId;
  axios
    .get(`https://api.medium.com/v1/me?accessToken=${medium}`)
    .then((res) => {
      mediumUserId = res.data.data.id;
      console.log(mediumUserId);
      postHandler(mediumUserId);
    })
    .catch((err) => {
      alert("Please enter a valid Medium Token Id");
      console.log(err);
    });
};
