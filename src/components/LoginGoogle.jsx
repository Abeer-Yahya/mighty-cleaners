import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "./RefreshToken";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";

const clientId =
  "438266320884-us5a1pn8kfc1bmkv3jsok7t8dqkaobn4.apps.googleusercontent.com";

function Logingoogle() {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setCookie("currentUser", res.profileObj, { path: "/" });
    navigate("/");

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      "Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz"
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Logingoogle;
