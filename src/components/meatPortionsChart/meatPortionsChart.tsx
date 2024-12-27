import { DashboardBox } from "../dashboardBox/DashboardBox";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

const chartData = [
  { month: "January", portions: 186 },
  { month: "February", portions: 305 },
  { month: "March", portions: 237 },
  { month: "April", portions: 73 },
  { month: "May", portions: 209 },
  { month: "June", portions: 214 },
];

const chartConfig = {
  desktop: {
    label: "Meat Portions",
    color: "#3E721D",
  },
} satisfies ChartConfig;

function MeatPortionsChart() {
  return (
    <DashboardBox>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="portions" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </DashboardBox>
  );
}

export { MeatPortionsChart };
