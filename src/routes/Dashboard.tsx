import { Layout } from "@/components/layout/layout";
import { BottomNavigator } from "@/components/bottomNavigator/bottomNavigator";
import { LogoHeader } from "@/components/logoHeader/LogoHeader";
import { VeggieStreak } from "@/components/veggiStreak/VeggieStreak";
import { DailyOverview } from "@/components/dailyOverview/dailyOverview";
import { AverageMeatPortions } from "@/components/averageMeatPortions/averageMeatPortions";
import { MeatPortionsChart } from "@/components/meatPortionsChart/meatPortionsChart";

function Dashboard() {
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
          <DailyOverview />
          <VeggieStreak />
          <AverageMeatPortions />
          <MeatPortionsChart />
        </div>
        <BottomNavigator />
      </Layout>
    </>
  );
}

export { Dashboard };
