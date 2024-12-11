import { getCookie } from "typescript-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";



type User = {
  username: string;
  email: string;
  id: string;
};

interface ExtendedJwtPayload extends JwtPayload {
  preferred_username: string;
  email: string;
}

function useAuthentication() {
  let user: User;

  const id_token = getCookie("id_token");
  console.log("id_token", id_token);

  const initiateLogin = () => {
    console.log("Redirecting to auth provider");
    window.location.href = "http://keycloak:8080/realms/artemis/protocol/openid-connect/auth?response_type=code&client_id=artemis&redirect_uri=http://localhost:8000/api/v1/login&state=1234&scope=openid";
  };


  const handleUnauthenticatedAPICall = () => {
    console.log("handleUnauthenticatedAPICall");

    fetch(`${window.location.origin}/api/v1/refresh`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        origin: "http://localhost:5173",
      },
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          console.log("logout because " , response);
          logout();
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error
        );
      })
    }



  const logout = () => {
    console.log("logout");

    if (window.location.pathname != "/") {
      console.log(window.location.pathname);
      console.log("redirecting to /");

      window.location.href = "/";
    }
  };

  if (id_token) {
    const decodedToken = jwtDecode<ExtendedJwtPayload>(id_token);
    user = {
      username: decodedToken.preferred_username || "",
      email: decodedToken.email,
      id: decodedToken.sub || "",
    };

    console.log("user", user);
  } else {
    console.log("no id_token");
    logout();
  }

  return [initiateLogin, handleUnauthenticatedAPICall, logout];
}

export { useAuthentication };
