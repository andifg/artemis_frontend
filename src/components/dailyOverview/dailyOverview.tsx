import "./dailyOverview.scss";

import { Day, DailyOverviewEntry } from "./day";
import { useState, useRef, useEffect } from "react";

const days: DailyOverviewEntry[] = [
  { date: new Date("2024-12-22"), meatConsumed: false },
  { date: new Date("2024-12-21"), meatConsumed: false },
  { date: new Date("2024-12-20"), meatConsumed: false },
  { date: new Date("2024-12-19"), meatConsumed: true },
  { date: new Date("2024-12-18"), meatConsumed: false },
  { date: new Date("2024-12-17"), meatConsumed: true },
  { date: new Date("2024-12-16"), meatConsumed: false },
  { date: new Date("2024-12-15"), meatConsumed: true },
  { date: new Date("2024-12-14"), meatConsumed: false },
  { date: new Date("2024-12-13"), meatConsumed: false },
  { date: new Date("2024-12-12"), meatConsumed: false },
  { date: new Date("2024-12-11"), meatConsumed: false },
  { date: new Date("2024-12-10"), meatConsumed: false },
];

days.reverse();

function DailyOverview() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dailyOverviewRef = useRef<HTMLDivElement>(null);

  const changeSelectedDate = (date: Date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (dailyOverviewRef.current) {
      dailyOverviewRef.current.scrollLeft =
        dailyOverviewRef.current.scrollWidth;
    }
  }, []);

  return (
    <>
      <div className="daily-overview-wrapper">
        <div>{selectedDate.toDateString()}</div>
        <div className="daily-overview" ref={dailyOverviewRef}>
          <div
            className="daily-overview-slider"
            style={{ width: `${(100 / 7) * days.length}%` }}
          >
            {days.map((day, index) => {
              return (
                <Day
                  key={index}
                  date={day.date}
                  meatConsumed={day.meatConsumed}
                  select={changeSelectedDate}
                  selectedDate={selectedDate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export { DailyOverview };
