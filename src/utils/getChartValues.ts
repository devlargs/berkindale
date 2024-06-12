import { createCandlestickData } from "@/utils";
import { DATASET } from "@/constants";

export const getChartValues = (ticker: string, date: string, time: string) => {
  const trends = DATASET.filter(
    (q) =>
      q.symbol === `${ticker}:CC` &&
      q.timestamp_at.includes(date) &&
      q.timestamp_at.includes(time)
  );

  if (trends.length) {
    return createCandlestickData(trends[0]);
  }

  return null;
};
