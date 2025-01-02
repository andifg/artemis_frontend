import { useEffect, useState } from "react";
import { useClient } from "@/hooks/useClient";
import { MeatPortionService } from "@/client/meatPortionService";
import { useAuthentication } from "@/hooks/useAuthentication";
import { MeatPortion } from "@/client/types";

export type DailyOverview = {
  [key: string]: MeatPortion | undefined;
};

function useDailyOverview() {
  const { getUser } = useAuthentication();
  const user = getUser();

  const initializeMeatPortions = () => {
    const meatPortions: DailyOverview = {};

    for (let i = 0; i < 14; i++) {
      // Calculate the date for each iteration
      const date = new Date();
      date.setDate(date.getDate() - i);

      // Convert the date to a string
      const dateString = date.toISOString().split("T")[0];

      // Add the date to the object
      meatPortions[dateString] = undefined;
    }
    return meatPortions;
  };

  const [dailyOverview, setDailyOverview] = useState<DailyOverview>(
    initializeMeatPortions(),
  );

  const updateMeatPortionsByDate = (newMeatPortions: MeatPortion[]) => {
    setDailyOverview((meatPortions) => {
      const updatedMeatPortions = { ...meatPortions };

      newMeatPortions.forEach((newMeatPortion) => {
        updatedMeatPortions[
          new Date(newMeatPortion.date).toISOString().split("T")[0]
        ] = newMeatPortion;
      });

      return updatedMeatPortions;
    });
  };

  const [callClientServiceMethod] = useClient();

  useEffect(() => {
    // initializeMeatPortions();
    callClientServiceMethod({
      function: MeatPortionService.GetMeatPortions,
      args: [user.id],
    }).then((response) => {
      console.log(response);
      updateMeatPortionsByDate(response.data);
    });
  }, []);

  return { dailyOverview };
}

export { useDailyOverview };
