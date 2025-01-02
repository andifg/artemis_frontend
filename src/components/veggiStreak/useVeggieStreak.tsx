import { useEffect, useState } from "react";
import { useClient } from "@/hooks/useClient";
import { MeatPortionService } from "@/client/meatPortionService";
import { useAuthentication } from "@/hooks/useAuthentication";

function useVeggieStreak() {
  const { getUser } = useAuthentication();
  const [callClientServiceMethod] = useClient();

  const [streak, setStreak] = useState<number>(0);

  const fetchStreak = () => {
    callClientServiceMethod({
      function: MeatPortionService.GetVeggieStreak,
      args: [getUser().id],
    }).then((data) => {
      setStreak(data.data);
    });
  };

  useEffect(() => {
    fetchStreak();
  });

  return {
    streak,
  };
}

export { useVeggieStreak };
