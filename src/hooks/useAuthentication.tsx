import { useEffect } from "react";

function useAuthentication() {
  useEffect(() => {
    console.log("useAuthentication always");
  }, []);
}

export { useAuthentication };
