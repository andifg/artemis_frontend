import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";

function Hello() {
  const rederictToAuthProvider = () => {
    console.log("Redirecting to auth provider");

    window.location.href =
      "http://keycloak:8080/realms/artemis/protocol/openid-connect/auth?response_type=code&client_id=artemis&redirect_uri=http://localhost:8000/api/login&state=1234&scope=openid";
  };

  return (
    <>
      <Layout>
        <Button onClick={rederictToAuthProvider}>Hello world</Button>
      </Layout>
    </>
  );
}

export default Hello;
