import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

  const onSuccess = () => {
    removeCookie("currentUser");
    console.log("Logout made successfully");
    navigate("/login");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        // style={{ width: "5px" }}
        icon={false}
        className="logoutBtn"
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
