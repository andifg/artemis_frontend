import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";
import { useAuthentication } from "@/hooks/useAuthentication";

function Hello() {
  const {initiateLogin} = useAuthentication();

  return (
    <>
      <Layout>
        <Button onClick={initiateLogin}>Hello world</Button>
      </Layout>
    </>
  );
}

export default Hello;
