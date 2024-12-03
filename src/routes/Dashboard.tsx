import { Layout } from "@/components/layout/layout";

import { Button } from "@/components/ui/button";

function Dashboard() {

  const getUsers = () => {

    console.log(window.location.origin)

    fetch(`${window.location.origin}/api/v1/user`, {
    // fetch(`http://localhost:8000/api/v1/user`, {
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'origin': 'http://localhost:5173',
      },

    })
  }




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
