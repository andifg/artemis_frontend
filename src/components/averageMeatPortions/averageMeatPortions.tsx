import "./averageMeatPortions.scss";
import { useState } from "react";
import { DashboardBox } from "../dashboardBox/DashboardBox";
import { TrendingUp } from "lucide-react";

type AverageMeatPortionsTime = "W" | "M" | "6M";

function AverageMeatPortions() {
  const [selected, setSelected] = useState<AverageMeatPortionsTime>("W");

  const timeframeOptions: AverageMeatPortionsTime[] = ["W", "M", "6M"];

  return (
    <DashboardBox>
      <div className="average-meat-portions">
        <div className="average-meat-portions-header">
          <div className="average-meat-portions-header-title">
            <TrendingUp />
            <div className="average-meat-portions-header-title-title">
              Average Daily Meat Portions
            </div>
          </div>

          <div className="average-meat-portions-header-selector">
            {timeframeOptions.map((item) => (
              <div
                className={`average-meat-portions-header-selector-item ${item == selected ? "average-meat-portions-header-selector-item-selected" : ""}`}
                onClick={() => setSelected(item as AverageMeatPortionsTime)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="average-meat-portions-value-header">
          <div className="average-meat-portions-value">2</div>
          <div className="average-meat-portions-diff">-4%</div>
        </div>
      </div>
    </DashboardBox>
  );
}
export { AverageMeatPortions };
