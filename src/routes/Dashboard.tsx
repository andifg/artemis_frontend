import { Layout } from "@/components/layout/layout";

import { Button } from "@/components/ui/button";
import { useAuthentication } from "@/hooks/useAuthentication";

function Dashboard() {
  const { logout } = useAuthentication();

  const getUsers = () => {
    fetch(`${window.location.origin}/api/v1/user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        origin: "http://localhost:5173",
      },
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          logout();
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Layout>
        <h1>Hello FROM Dashboard</h1>
        <Button onClick={getUsers}>Send User Post</Button>
      </Layout>
    </>
  );
}

export { Dashboard };
