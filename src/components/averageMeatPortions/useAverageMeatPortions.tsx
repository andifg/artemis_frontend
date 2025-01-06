import { useClient } from "@/hooks/useClient";
import { useEffect, useState } from "react";
import { MeatPortionService } from "@/client/meatPortionService";
import { Timeframe, AverageMeatPortions } from "@/client/types";
import { useAuthentication } from "@/hooks/useAuthentication";

type useAverageMeatPortionsProps = {
  selected: Timeframe;
};

type useAverageMeatPortionsReturn = {
  averageMeatPortions: AverageMeatPortions;
};

function useAverageMeatPortions({
  selected,
}: useAverageMeatPortionsProps): useAverageMeatPortionsReturn {
  const { getUser } = useAuthentication();
  const [callClientServiceMethod] = useClient();

  const [averageMeatPortions, setAverageMeatPortions] =
    useState<AverageMeatPortions>({
      Timeframe: "week",
      Value: 0,
      ChangeRate: 0,
    });

  const fetchAverageMeatPortions = () => {
    callClientServiceMethod({
      function: MeatPortionService.GetAverageMeatPortions,
      args: [getUser().id, selected],
    }).then((data) => {
      console.log("data average", data.data);
      setAverageMeatPortions({
        Timeframe: data.data.Timeframe,
        Value: data.data.Value,
        ChangeRate: data.data.ChangeRate,
      });
    });
  };

  useEffect(() => {
    fetchAverageMeatPortions();
  }, [selected]);

  return {
    averageMeatPortions,
  };
}

export { useAverageMeatPortions };
