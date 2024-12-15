import { Layout } from "@/components/layout/layout";

import { Button } from "@/components/ui/button";
import { useAuthentication } from "@/hooks/useAuthentication";

import { BottomNavigator } from "@/components/bottomNavigator/bottomNavigator";
import { LogoHeader } from "@/components/logoHeader/LogoHeader";
import { VeggieStreak } from "@/components/veggiStreak/VeggieStreak";

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
        <LogoHeader />
        <div
          className="dashboard-main"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            marginBottom: "100px",
          }}
        >
          <VeggieStreak />
          <Button onClick={getUsers}>Send User Post</Button>
        </div>
        <BottomNavigator />
      </Layout>
    </>
  );
}

export { Dashboard };
