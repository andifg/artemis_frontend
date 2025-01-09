import { useClient } from "@/hooks/useClient";
import { useEffect, useState } from "react";
import { MeatPortionService } from "@/client/meatPortionService";
import { Timeframe, AggregatedMeatPortions } from "@/client/types";
import { useAuthentication } from "@/hooks/useAuthentication";
import { extractDate } from "@/utils/extractDate";
import {
  mapforWeeks,
  mapforMonths,
  mapforQuarter,
} from "./meatPortionsChartUtils";

export type AggreagteMeatPortions = {
  Timeframe: Timeframe;
  Value: number;
  TimeframeStart: string;
  label: string;
};

export type meatPortionMap = {
  [key in string]: AggreagteMeatPortions;
};

const getInitialData = (timeframe: Timeframe): meatPortionMap => {
  const result: meatPortionMap = {};
  const today = new Date();

  if (timeframe === "week") {
    mapforWeeks(result, today);
  }

  if (timeframe == "month") {
    mapforMonths(result, today);
  }

  if (timeframe === "quarter") {
    mapforQuarter(result, today);
  }

  return result;
};

const updateMap = (map: meatPortionMap, data: AggregatedMeatPortions[]) => {
  data.forEach((item) => {
    if (map[extractDate(new Date(item.TimeframeStart))]) {
      map[extractDate(new Date(item.TimeframeStart))].Value = item.Total;
    }
  });

  return map;
};

type useMeatPortionChartProps = {
  selected: Timeframe;
};

function useMeatPortionChart({ selected }: useMeatPortionChartProps): {
  meatPortionMap: meatPortionMap;
} {
  const { getUser } = useAuthentication();
  const [callClientServiceMethod] = useClient();

  const [meatPortionMap, setMeatPortionMap] = useState<meatPortionMap>(
    getInitialData(selected),
  );

  const fetchAggregatedMeatPortions = () => {
    callClientServiceMethod({
      function: MeatPortionService.GetAggregatedMeatPortions,
      args: [getUser().id, selected],
    }).then((data) => {
      const initialMap = getInitialData(selected);
      setMeatPortionMap(updateMap(initialMap, data.data));
    });
  };

  useEffect(() => {
    fetchAggregatedMeatPortions();
  }, [selected]);

  return { meatPortionMap };
}

export { useMeatPortionChart };
