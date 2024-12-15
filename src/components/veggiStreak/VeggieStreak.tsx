import "./VeggieStreak.scss";
import { DashboardBox } from "../dashboardBox/DashboardBox";
import FireLogo from "../../assets/fire.svg";

function VeggieStreak() {
  return (
    <DashboardBox>
      <div className="veggie-streak">
        <div className="veggie-streak-icon">
          <img src={FireLogo} alt="fire" />
        </div>
        <div className="veggie-streak-text text-primary">
          0 Days Veggie Streak
        </div>
      </div>
    </DashboardBox>
  );
}

export { VeggieStreak };
